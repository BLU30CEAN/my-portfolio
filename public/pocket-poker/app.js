/* pocket-poker — EV 미니 계산기 (Phase 1)
 * 거친 근사다. 솔버 출력이 아니다.
 */

/** 핸드 등급 룩업 (0–1). 미등록 핸드는 0.30 폴백. */
const HAND_STRENGTH = (() => {
  const t = {
    AA:1.00, KK:0.96, QQ:0.92, JJ:0.88, TT:0.84,
    AKs:0.86, AKo:0.82, AQs:0.80, AQo:0.76, AJs:0.78, AJo:0.72,
    KQs:0.74, KQo:0.70, KJs:0.70, KJo:0.66, QJs:0.68, QJo:0.62,
    99:0.78, 88:0.72, 77:0.68, 66:0.62, 55:0.58, 44:0.54, 33:0.50, 22:0.48,
    JTs:0.66, T9s:0.58, "98s":0.52, "87s":0.48, "76s":0.46, "65s":0.42, "54s":0.40,
    A9s:0.62, A8s:0.60, A7s:0.58, A6s:0.55, A5s:0.55, A4s:0.53, A3s:0.51, A2s:0.50,
    A9o:0.55, A8o:0.52, A7o:0.50, A6o:0.46, A5o:0.46, A4o:0.43, A3o:0.41, A2o:0.40,
    "72o":0.05, "82o":0.07, "83o":0.08,
  };
  return (raw) => {
    const k = (raw || "").trim();
    if (k in t) return t[k];
    // 페어
    if (/^([23456789TJQKA])\1$/i.test(k)) return Math.min(0.78, 0.48 + ("23456789TJQKA".indexOf(k[0].toUpperCase()) * 0.025));
    // 수트
    const suited = /s$/i.test(k);
    const m = k.match(/^([23456789TJQKA])([23456789TJQKA])[so]?$/i);
    if (m) {
      const r1 = "23456789TJQKA".indexOf(m[1].toUpperCase());
      const r2 = "23456789TJQKA".indexOf(m[2].toUpperCase());
      const gap = Math.abs(r1 - r2);
      const high = Math.max(r1, r2);
      let base = 0.20 + high * 0.025 - gap * 0.02;
      if (suited) base += 0.06;
      return Math.max(0.05, Math.min(0.85, base));
    }
    return 0.30;
  };
})();

const POS_MULT = { EP:0.92, MP:1.00, CO:1.05, BTN:1.10, SB:0.94, BB:0.85 };
const oppPenalty = (n) => 1 / (1 + 0.15 * (Math.max(1, n) - 1));

function compute({ position, hand, opponents, pot }) {
  const hs   = HAND_STRENGTH(hand);
  const pm   = POS_MULT[position] ?? 1.0;
  const op   = oppPenalty(opponents);
  const win  = hs * pm * op;                  // 0–1
  const ev   = (win - 0.5) * pot;             // BB
  const recAction =
    win > 0.62 ? "3x raise" :
    win > 0.52 ? "call / min-raise" :
    win > 0.42 ? "limp / check" :
    "fold";
  const risk =
    win > 0.60 ? "LOW" :
    win > 0.45 ? "MID" :
    "HIGH";
  return { win, ev, recAction, risk };
}

function fmtPct(x){ return (x*100).toFixed(0) + "%"; }
function fmtEv(x){ return (x>=0?"+":"") + x.toFixed(1) + " BB"; }

function render() {
  const f = document.getElementById("ev-form");
  const data = Object.fromEntries(new FormData(f));
  data.opponents = Number(data.opponents);
  data.pot = Number(data.pot);
  const r = compute(data);
  document.getElementById("win").textContent  = fmtPct(r.win);
  document.getElementById("ev").textContent   = fmtEv(r.ev);
  document.getElementById("rec").textContent  = r.recAction;
  document.getElementById("risk").textContent = r.risk;

  // 컬러 신호
  const rows = document.querySelectorAll(".result-row");
  rows.forEach(el => el.classList.remove("ok","warn","danger"));
  const recRow = rows[2];
  if (r.win > 0.60) recRow.classList.add("ok");
  else if (r.win > 0.45) recRow.classList.add("warn");
  else recRow.classList.add("danger");
}

document.addEventListener("DOMContentLoaded", () => {
  const f = document.getElementById("ev-form");
  f.addEventListener("input", render);
  f.addEventListener("change", render);
  render();
});
