import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import {
  createScope,
  createTimeline,
  animate,
  stagger,
  utils,
  type Scope,
} from "animejs";
import { RotateCcw, Trash2, Trophy } from "lucide-react";

type CellValue = number | "NaN";

interface CellState {
  id: string;
  value: CellValue;
}

const SLOT_W = 64;
const SLOT_H = 56;
const SLOT_GAP = 8;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${SLOT_GAP}px;
  align-items: center;
`;

const RowLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary};
  width: 78px;
`;

const Slot = styled.div`
  width: ${SLOT_W}px;
  height: ${SLOT_H}px;
  border: 1.5px dashed ${(props) => props.theme.colors.border};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  color: ${(props) => props.theme.colors.textSecondary};
  background: ${(props) => props.theme.colors.surface};
`;

const Trash = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  height: ${SLOT_H}px;
  padding: 0 0.85rem;
  border: 1.5px dashed ${(props) => props.theme.colors.border};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.82rem;
  font-weight: 600;
`;

const Pool = styled.div`
  position: relative;
  min-height: ${SLOT_H + 12}px;
`;

const Cell = styled.div<{ $isNaN: boolean; $placed: boolean }>`
  position: absolute;
  width: ${SLOT_W}px;
  height: ${SLOT_H}px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  user-select: none;
  cursor: ${(props) => (props.$placed ? "default" : "grab")};
  background: ${(props) =>
    props.$isNaN
      ? `linear-gradient(135deg, ${props.theme.colors.danger} 0%, #f59e0b 100%)`
      : `linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.accent} 100%)`};
  color: #fff;
  box-shadow: ${(props) => props.theme.shadows.card};
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const ResetBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Accuracy = styled.span<{ $solved: boolean }>`
  font-weight: 800;
  color: ${(props) =>
    props.$solved ? props.theme.colors.primary : props.theme.colors.text};
`;

const WinBadge = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  pointer-events: none;
  opacity: 0;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 800;
  letter-spacing: 0.05em;
`;

const INITIAL_VALUES: CellValue[] = [7, 3, "NaN", 5, 1, 9, "NaN", 4, 8];

function shuffle<T>(arr: readonly T[], seed: number): T[] {
  const out = arr.slice() as T[];
  let s = seed;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function makeCells(seed: number): CellState[] {
  return shuffle(INITIAL_VALUES, seed).map((value, i) => ({
    id: `${seed}-${i}-${String(value)}`,
    value,
  }));
}

export function CellSorterGame() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const slotRefs = useRef<Array<HTMLDivElement | null>>([]);
  const trashRef = useRef<HTMLDivElement | null>(null);
  const cellRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const scopeRef = useRef<Scope | null>(null);
  const accuracyRef = useRef<HTMLSpanElement | null>(null);

  const [seed, setSeed] = useState(1);
  const [cells, setCells] = useState<CellState[]>(() => makeCells(1));
  // slot index → cell id. trash = "trash" → set of ids.
  const [slotMap, setSlotMap] = useState<Record<number, string | null>>(() => ({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  }));
  const [trashed, setTrashed] = useState<Set<string>>(() => new Set());
  const [solved, setSolved] = useState(false);

  const expectedSortedValues = useMemo(() => [1, 3, 4, 5, 7, 8, 9], []);

  const valueOf = useCallback(
    (id: string | null) => cells.find((c) => c.id === id)?.value,
    [cells]
  );

  const computeAccuracy = useCallback(() => {
    let correct = 0;
    expectedSortedValues.forEach((v, i) => {
      if (valueOf(slotMap[i] ?? null) === v) correct += 1;
    });
    cells
      .filter((c) => c.value === "NaN")
      .forEach((c) => {
        if (trashed.has(c.id)) correct += 1;
      });
    const total = expectedSortedValues.length + cells.filter((c) => c.value === "NaN").length;
    return Math.round((correct / total) * 100);
  }, [slotMap, trashed, cells, valueOf, expectedSortedValues]);

  const accuracy = computeAccuracy();

  // animate accuracy number smoothly
  const displayedAcc = useRef(0);
  useEffect(() => {
    const target = accuracy;
    const el = accuracyRef.current;
    if (!el) return;
    const start = displayedAcc.current;
    const obj = { v: start };
    const anim = animate(obj, {
      v: target,
      duration: 480,
      ease: "outQuad",
      onUpdate: () => {
        el.textContent = `${Math.round(obj.v)}%`;
        displayedAcc.current = obj.v;
      },
    });
    return () => {
      anim.cancel();
    };
  }, [accuracy]);

  // win detection
  useEffect(() => {
    if (accuracy === 100 && !solved) {
      setSolved(true);
    }
  }, [accuracy, solved]);

  // win sequence
  useEffect(() => {
    if (!solved || !rootRef.current) return;
    const tl = createTimeline({ defaults: { ease: "outQuad" } });
    const placed = Object.values(slotMap)
      .map((id) => (id ? cellRefs.current.get(id) : null))
      .filter(Boolean) as HTMLDivElement[];
    if (placed.length) {
      tl.add(placed, {
        scale: [1, 1.18, 1],
        rotate: [0, 6, -5, 0],
        duration: 700,
        delay: stagger(70),
      });
    }
    const badge = rootRef.current.querySelector("[data-win-badge]") as HTMLElement | null;
    if (badge) {
      tl.add(
        badge,
        {
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 450,
        },
        "-=400"
      );
    }
    return () => {
      tl.cancel();
    };
  }, [solved, slotMap]);

  // place cell into nearest slot/trash via drag end
  const onDragEnd = useCallback(
    (cellId: string, ev: PointerEvent, el: HTMLDivElement) => {
      const slotRects = slotRefs.current
        .map((s, i) => (s ? { i, rect: s.getBoundingClientRect() } : null))
        .filter(Boolean) as Array<{ i: number; rect: DOMRect }>;
      const trashRect = trashRef.current?.getBoundingClientRect() ?? null;

      const px = ev.clientX;
      const py = ev.clientY;

      const inside = (r: DOMRect) =>
        px >= r.left && px <= r.right && py >= r.top && py <= r.bottom;

      let placedSlot: number | null = null;
      let toTrash = false;

      for (const s of slotRects) {
        if (inside(s.rect)) {
          placedSlot = s.i;
          break;
        }
      }
      if (placedSlot === null && trashRect && inside(trashRect)) {
        toTrash = true;
      }

      if (placedSlot !== null) {
        // if slot taken, swap or reject
        const occupied = slotMap[placedSlot];
        if (occupied && occupied !== cellId) {
          // reject — snap back
          animate(el, { x: 0, y: 0, duration: 280, ease: "outQuad" });
          return;
        }
        // also remove this cell from any previous slot or trash
        setSlotMap((prev) => {
          const next = { ...prev };
          for (const k of Object.keys(next)) {
            const idx = Number(k);
            if (next[idx] === cellId) next[idx] = null;
          }
          next[placedSlot!] = cellId;
          return next;
        });
        setTrashed((prev) => {
          if (!prev.has(cellId)) return prev;
          const next = new Set(prev);
          next.delete(cellId);
          return next;
        });
        // snap to slot center
        const slotRect = slotRects.find((s) => s.i === placedSlot!)!.rect;
        const elRect = el.getBoundingClientRect();
        const dx = slotRect.left - elRect.left + (slotRect.width - elRect.width) / 2;
        const dy = slotRect.top - elRect.top + (slotRect.height - elRect.height) / 2;
        const currentX = utils.get(el, "x", false) as number;
        const currentY = utils.get(el, "y", false) as number;
        animate(el, {
          x: currentX + dx,
          y: currentY + dy,
          duration: 220,
          ease: "outBack",
        });
        return;
      }

      if (toTrash) {
        setTrashed((prev) => {
          const next = new Set(prev);
          next.add(cellId);
          return next;
        });
        setSlotMap((prev) => {
          const next = { ...prev };
          for (const k of Object.keys(next)) {
            const idx = Number(k);
            if (next[idx] === cellId) next[idx] = null;
          }
          return next;
        });
        animate(el, {
          scale: [1, 0.4],
          opacity: [1, 0.25],
          duration: 360,
          ease: "outQuad",
        });
        return;
      }

      // dropped on empty: snap back
      animate(el, { x: 0, y: 0, duration: 280, ease: "outElastic(1, .6)" });
    },
    [slotMap]
  );

  // attach pointer-drag listeners to each cell (lightweight, no createDraggable needed here
  // because we need custom drop-target logic; but we still use anime for tween)
  useEffect(() => {
    const scope = createScope({ root: rootRef.current as HTMLElement }).add(() => {
      const handlers: Array<() => void> = [];

      cells.forEach((c) => {
        const el = cellRefs.current.get(c.id);
        if (!el) return;

        let startX = 0;
        let startY = 0;
        let baseX = 0;
        let baseY = 0;
        let dragging = false;

        const onMove = (e: PointerEvent) => {
          if (!dragging) return;
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          utils.set(el, { x: baseX + dx, y: baseY + dy });
        };
        const onUp = (e: PointerEvent) => {
          if (!dragging) return;
          dragging = false;
          el.style.zIndex = "1";
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerup", onUp);
          onDragEnd(c.id, e, el);
        };
        const onDown = (e: PointerEvent) => {
          if (trashed.has(c.id)) return;
          e.preventDefault();
          dragging = true;
          startX = e.clientX;
          startY = e.clientY;
          baseX = (utils.get(el, "x", false) as number) || 0;
          baseY = (utils.get(el, "y", false) as number) || 0;
          el.style.zIndex = "10";
          el.setPointerCapture?.(e.pointerId);
          window.addEventListener("pointermove", onMove);
          window.addEventListener("pointerup", onUp);
        };

        el.addEventListener("pointerdown", onDown);
        handlers.push(() => {
          el.removeEventListener("pointerdown", onDown);
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerup", onUp);
        });
      });

      return () => {
        handlers.forEach((h) => h());
      };
    });

    scopeRef.current = scope;
    return () => {
      scope.revert();
    };
  }, [cells, onDragEnd, trashed]);

  // entrance stagger
  useEffect(() => {
    const els = cells
      .map((c) => cellRefs.current.get(c.id))
      .filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;
    const anim = animate(els, {
      opacity: [0, 1],
      translateY: [16, 0],
      scale: [0.85, 1],
      duration: 520,
      ease: "outBack",
      delay: stagger(55),
    });
    return () => {
      anim.cancel();
    };
  }, [cells]);

  const reset = () => {
    const next = seed + 1;
    setSeed(next);
    setCells(makeCells(next));
    setSlotMap({ 0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null });
    setTrashed(new Set());
    setSolved(false);
    displayedAcc.current = 0;
    // clear inline transforms on cells before remount
    cellRefs.current.forEach((el) => {
      utils.set(el, { x: 0, y: 0, scale: 1, opacity: 1 });
    });
  };

  return (
    <div ref={rootRef} style={{ position: "relative" }}>
      <Layout>
        <Row>
          <RowLabel>sorted</RowLabel>
          {expectedSortedValues.map((v, i) => (
            <Slot
              key={i}
              ref={(el) => {
                slotRefs.current[i] = el;
              }}
              aria-label={`slot ${v}`}
            >
              {v}
            </Slot>
          ))}
        </Row>

        <Row>
          <RowLabel>dropna</RowLabel>
          <Trash ref={trashRef}>
            <Trash2 size={16} aria-hidden /> NaN bin
          </Trash>
        </Row>

        <Row>
          <RowLabel>pool</RowLabel>
          <Pool style={{ flex: 1 }}>
            {cells.map((c, i) => (
              <Cell
                key={c.id}
                ref={(el) => {
                  if (el) cellRefs.current.set(c.id, el);
                  else cellRefs.current.delete(c.id);
                }}
                $isNaN={c.value === "NaN"}
                $placed={trashed.has(c.id)}
                style={{
                  left: `${i * (SLOT_W + SLOT_GAP)}px`,
                  top: 0,
                  opacity: 0,
                }}
              >
                {c.value === "NaN" ? "NaN" : c.value}
              </Cell>
            ))}
          </Pool>
        </Row>
      </Layout>

      <StatusBar>
        <span>
          Accuracy:{" "}
          <Accuracy $solved={solved} ref={accuracyRef}>
            0%
          </Accuracy>
        </span>
        <ResetBtn type="button" onClick={reset}>
          <RotateCcw size={14} aria-hidden /> 다시 섞기
        </ResetBtn>
      </StatusBar>

      <WinBadge data-win-badge>
        <Trophy size={28} />
        <span>sort_values + dropna 완료!</span>
      </WinBadge>
    </div>
  );
}

export default CellSorterGame;
