import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ExternalLink, RotateCcw, Trophy, AlertTriangle, Keyboard } from "lucide-react";
import {
  ACTION_KEY_ROW,
  applyGameOutcome,
  applyJamoInput,
  createDefaultGameStats,
  isDefaultStats,
  isValidGuess,
  judgeGuess,
  MAX_ATTEMPTS,
  mergeKeyboardState,
  pickRandomWord,
  QWERTY_KEY_ROWS,
  resolvePhysicalKey,
  TYPEABLE_JAMO,
  WORD_LENGTH,
  normalizeGameStats,
} from "../utils/wordBaseball";
import type { Attempt, GameStats, GameStatus, KeyboardState, Mark, WordEntry } from "../utils/wordBaseball";

const DATA_SOURCE = "https://raw.githubusercontent.com/BLU30CEAN/korean-baseball/main/data";
const ANSWER_POOL_URL = `${DATA_SOURCE}/answer-pool.json`;
const VALID_WORDS_URL = `${DATA_SOURCE}/valid-words.json`;
const GITHUB_URL = "https://github.com/BLU30CEAN/korean-baseball";

type ToastTone = "success" | "danger";
type TileTone = "empty" | "strike" | "ball" | "out";
type LoadState = "loading" | "ready" | "error";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const PageShell = styled.div`
  min-height: calc(100vh - 80px);
  padding: 2rem 1rem 4rem;
  background: ${(props) => props.theme.colors.background};
`;

const PageFrame = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const ExternalLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const GameCard = styled(motion.section)`
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 28px;
  padding: 1.5rem;
  box-shadow: ${(props) => props.theme.shadows.card};
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 22px;
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const HeroCopy = styled.div`
  flex: 1 1 520px;
  min-width: 0;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.05;
  margin-bottom: 0.75rem;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1rem;
  max-width: 760px;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9rem;
  font-weight: 600;
`;

const StatsGrid = styled.div`
  flex: 0 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  min-width: min(100%, 280px);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    min-width: 100%;
  }
`;

const StatCard = styled.div`
  padding: 0.95rem 1rem;
  border-radius: 18px;
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const StatLabel = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.82rem;
  margin-bottom: 0.35rem;
`;

const StatValue = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.1rem;
  font-weight: 700;
`;

const ResultBanner = styled(motion.div)<{ $tone: ToastTone }>`
  margin-bottom: 1.25rem;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid
    ${(props) => (props.$tone === "success" ? "rgba(34, 197, 94, 0.45)" : "rgba(239, 68, 68, 0.45)")};
  background: ${(props) =>
    props.$tone === "success" ? "rgba(34, 197, 94, 0.12)" : "rgba(239, 68, 68, 0.12)"};
`;

const BannerTitle = styled.div`
  font-size: 1.15rem;
  font-weight: 800;
  margin-bottom: 0.35rem;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BannerText = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const BoardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const SectionTitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 700;
`;

const SectionHint = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const BoardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const BoardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(${WORD_LENGTH}, minmax(0, 1fr));
  gap: 0.7rem;
`;

const Tile = styled.div<{ $tone: TileTone }>`
  aspect-ratio: 1 / 1;
  min-height: 58px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 2vw, 1.35rem);
  font-weight: 800;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => {
    if (props.$tone === "strike") {
      return "rgba(34, 197, 94, 0.18)";
    }
    if (props.$tone === "ball") {
      return "rgba(245, 158, 11, 0.18)";
    }
    if (props.$tone === "out") {
      return "rgba(148, 163, 184, 0.18)";
    }
    return props.theme.colors.background;
  }};
  border: 1px solid
    ${(props) => {
      if (props.$tone === "strike") {
        return "rgba(34, 197, 94, 0.55)";
      }
      if (props.$tone === "ball") {
        return "rgba(245, 158, 11, 0.55)";
      }
      if (props.$tone === "out") {
        return "rgba(148, 163, 184, 0.45)";
      }
      return props.theme.colors.border;
    }};
  text-transform: none;
`;

const KeyboardSection = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const KeyboardRow = styled.div`
  display: grid;
  gap: 0.45rem;
`;

const KeyButton = styled.button<{ $wide?: boolean; $mark?: Mark }>`
  min-height: 52px;
  border-radius: 14px;
  border: 1px solid
    ${(props) => {
      if (props.$mark === "strike") {
        return "rgba(34, 197, 94, 0.7)";
      }
      if (props.$mark === "ball") {
        return "rgba(245, 158, 11, 0.7)";
      }
      if (props.$mark === "out") {
        return "rgba(148, 163, 184, 0.45)";
      }
      return props.theme.colors.border;
    }};
  background: ${(props) => {
    if (props.$mark === "strike") {
      return "rgba(34, 197, 94, 0.18)";
    }
    if (props.$mark === "ball") {
      return "rgba(245, 158, 11, 0.18)";
    }
    if (props.$mark === "out") {
      return "rgba(148, 163, 184, 0.14)";
    }
    return props.theme.colors.background;
  }};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  font-weight: 700;
  padding: 0.65rem 0.5rem;
  transition: all 0.2s ease;
  width: 100%;
  grid-column: ${(props) => (props.$wide ? "span 1" : "auto")};

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    border-color: ${(props) => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const KeyLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
`;

const Footer = styled.div`
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.92rem;
  line-height: 1.6;
`;

const FooterNote = styled.p`
  max-width: 760px;
`;

const Toast = styled(motion.div)<{ $tone: ToastTone }>`
  position: fixed;
  top: 96px;
  right: 1rem;
  z-index: 1100;
  padding: 0.9rem 1rem;
  border-radius: 14px;
  border: 1px solid
    ${(props) => (props.$tone === "success" ? "rgba(34, 197, 94, 0.45)" : "rgba(239, 68, 68, 0.45)")};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};
  box-shadow: ${(props) => props.theme.shadows.card};
  min-width: min(92vw, 320px);

  @media (max-width: 640px) {
    right: 0.75rem;
    left: 0.75rem;
    min-width: auto;
  }
`;

const ToastTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

const ToastText = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.5;
  font-size: 0.92rem;
`;

const LoadingShell = styled(PageShell)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingCard = styled.div`
  width: min(100%, 520px);
  padding: 2rem;
  border-radius: 24px;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: ${(props) => props.theme.shadows.card};
  text-align: center;
`;

const Spinner = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 4px solid ${(props) => props.theme.colors.border};
  border-top-color: ${(props) => props.theme.colors.primary};
  animation: ${spin} 0.9s linear infinite;
`;

const LoadingTitle = styled.h2`
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.colors.text};
`;

const LoadingText = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const ErrorCard = styled(LoadingCard)`
  text-align: left;
`;

const ErrorTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ErrorActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
`;

const RetryButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 0.8rem 1rem;
  background: ${(props) => props.theme.colors.gradient};
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const MiniLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border-radius: 999px;
  padding: 0.8rem 1rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 700;
`;

function loadStoredStats(): GameStats {
  if (typeof window === "undefined") {
    return createDefaultGameStats();
  }

  try {
    const raw = window.localStorage.getItem("word-baseball.stats.v1");
    if (!raw) {
      return createDefaultGameStats();
    }

    return normalizeGameStats(JSON.parse(raw) as Partial<GameStats>);
  } catch {
    return createDefaultGameStats();
  }
}

function persistStats(stats: GameStats) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem("word-baseball.stats.v1", JSON.stringify(stats));
  } catch {
    // ignore storage failures
  }
}

function getTileTone(mark?: Mark): TileTone {
  if (!mark) {
    return "empty";
  }

  return mark;
}

function WordBaseballPage() {
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [loadError, setLoadError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);
  const [answerPool, setAnswerPool] = useState<WordEntry[]>([]);
  const [validWords, setValidWords] = useState<string[]>([]);
  const [answer, setAnswer] = useState<WordEntry | null>(null);
  const [history, setHistory] = useState<Attempt[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [keyboardState, setKeyboardState] = useState<KeyboardState>({});
  const [status, setStatus] = useState<GameStatus>("playing");
  const [stats, setStats] = useState<GameStats>(() => createDefaultGameStats());
  const [statsLoaded, setStatsLoaded] = useState(false);
  const [toast, setToast] = useState<{ message: string; tone: ToastTone } | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const validWordSet = useMemo(() => new Set(validWords), [validWords]);

  const clearToastTimer = useCallback(() => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
  }, []);

  const pushToast = useCallback(
    (message: string, tone: ToastTone = "danger") => {
      clearToastTimer();
      setToast({ message, tone });
      toastTimerRef.current = setTimeout(() => {
        setToast(null);
        toastTimerRef.current = null;
      }, 1500);
    },
    [clearToastTimer],
  );

  const resetBoard = useCallback(
    (nextAnswerPool: WordEntry[]) => {
      clearToastTimer();
      const nextAnswer = pickRandomWord(nextAnswerPool);

      setAnswer(nextAnswer);
      setHistory([]);
      setCurrentGuess([]);
      setKeyboardState({});
      setStatus("playing");
      setToast(null);
    },
    [clearToastTimer],
  );

  const handleReload = useCallback(() => {
    setReloadToken((value) => value + 1);
  }, []);

  const handleResetGame = useCallback(() => {
    if (!answerPool.length) {
      return;
    }

    resetBoard(answerPool);
  }, [answerPool, resetBoard]);

  const finalizeGame = useCallback(
    (outcome: "won" | "lost", attempts: Attempt[]) => {
      if (!answer) {
        return;
      }

      const nextStats = applyGameOutcome(statsLoaded ? stats : loadStoredStats(), outcome);
      setStats(nextStats);
      setHistory(attempts);
      setCurrentGuess([]);
      setStatus(outcome === "won" ? "won" : "lost");
      persistStats(nextStats);

      if (outcome === "won") {
        pushToast("정답을 맞췄다!", "success");
        return;
      }

      pushToast(`아쉽지만 실패했다. 정답은 ${answer.word} (${answer.jamo})였다.`);
    },
    [answer, pushToast, stats, statsLoaded],
  );

  const commitGuess = useCallback(() => {
    if (status !== "playing" || !answer) {
      return;
    }

    if (currentGuess.length !== WORD_LENGTH) {
      pushToast("다섯 자모를 모두 입력해라.");
      return;
    }

    const guess = currentGuess.join("");

    if (!isValidGuess(guess, validWordSet)) {
      pushToast("사전에 없는 단어다.");
      return;
    }

    const marks = judgeGuess(currentGuess, answer.jamo.split(""));
    const nextHistory = [...history, { guess, marks }];

    setKeyboardState((previous) => mergeKeyboardState(previous, currentGuess, marks));

    if (guess === answer.jamo) {
      finalizeGame("won", nextHistory);
      return;
    }

    if (nextHistory.length >= MAX_ATTEMPTS) {
      finalizeGame("lost", nextHistory);
      return;
    }

    setHistory(nextHistory);
    setCurrentGuess([]);
  }, [answer, currentGuess, finalizeGame, history, pushToast, status, validWordSet]);

  const handleBackspace = useCallback(() => {
    if (status !== "playing") {
      return;
    }

    setCurrentGuess((previous) => previous.slice(0, -1));
  }, [status]);

  const handleLetter = useCallback(
    (letter: string) => {
      if (status !== "playing" || !TYPEABLE_JAMO.has(letter)) {
        return;
      }

      setCurrentGuess((previous) => {
        const next = applyJamoInput(previous, letter);
        return next.length > WORD_LENGTH ? previous : next;
      });
    },
    [status],
  );

  const handlePress = useCallback(
    (value: string) => {
      if (value === "Enter") {
        commitGuess();
        return;
      }

      if (value === "⌫" || value === "Backspace") {
        handleBackspace();
        return;
      }

      handleLetter(value);
    },
    [commitGuess, handleBackspace, handleLetter],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) {
        return;
      }

      const resolved = resolvePhysicalKey(event.key);
      if (!resolved) {
        return;
      }

      event.preventDefault();
      handlePress(resolved);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePress]);

  useEffect(() => {
    const storedStats = loadStoredStats();
    setStats((current) => {
      if (!isDefaultStats(current)) {
        return current;
      }

      return storedStats;
    });
    setStatsLoaded(true);
  }, []);

  useEffect(() => {
    if (!statsLoaded) {
      return;
    }

    persistStats(stats);
  }, [stats, statsLoaded]);

  useEffect(() => {
    let cancelled = false;

    const loadGameData = async () => {
      setLoadState("loading");
      setLoadError(null);

      try {
        const [answerRes, validRes] = await Promise.all([fetch(ANSWER_POOL_URL), fetch(VALID_WORDS_URL)]);

        if (!answerRes.ok) {
          throw new Error(`answer-pool.json 요청 실패 (${answerRes.status})`);
        }

        if (!validRes.ok) {
          throw new Error(`valid-words.json 요청 실패 (${validRes.status})`);
        }

        const [answerPoolData, validWordsData] = await Promise.all([
          answerRes.json() as Promise<WordEntry[]>,
          validRes.json() as Promise<string[]>,
        ]);

        if (cancelled) {
          return;
        }

        setAnswerPool(answerPoolData);
        setValidWords(validWordsData);
        resetBoard(answerPoolData);
        setLoadState("ready");
      } catch (error) {
        if (cancelled) {
          return;
        }

        setLoadError(error instanceof Error ? error.message : "게임 데이터를 불러오지 못했다.");
        setLoadState("error");
      }
    };

    loadGameData();

    return () => {
      cancelled = true;
    };
  }, [reloadToken, resetBoard]);

  useEffect(() => {
    return () => {
      clearToastTimer();
    };
  }, [clearToastTimer]);

  const attemptsLeft = Math.max(MAX_ATTEMPTS - history.length, 0);
  const isReady = loadState === "ready" && !!answer && validWords.length > 0;
  const hasWon = status === "won";
  const hasLost = status === "lost";
  const statusLabel = hasWon ? "성공" : hasLost ? "실패" : "진행 중";

  if (loadState === "loading") {
    return (
      <LoadingShell>
        <LoadingCard>
          <Spinner />
          <LoadingTitle>KWB를 불러오는 중</LoadingTitle>
          <LoadingText>
            공개 단어 목록을 GitHub raw에서 받아오는 중이다. 잠깐만 기다려라.
          </LoadingText>
        </LoadingCard>
      </LoadingShell>
    );
  }

  if (loadState === "error" || !isReady) {
    return (
      <LoadingShell>
        <ErrorCard>
          <ErrorTitle>
            <AlertTriangle size={22} />
            게임을 불러오지 못했다
          </ErrorTitle>
          <LoadingText>{loadError ?? "알 수 없는 오류가 발생했다."}</LoadingText>
          <ErrorActions>
            <RetryButton type="button" onClick={handleReload}>
              다시 불러오기
            </RetryButton>
            <MiniLink href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              원본 저장소
            </MiniLink>
            <BackLink to="/" state={{ scrollTo: "projects" }}>
              <ArrowLeft size={16} />
              프로젝트로
            </BackLink>
          </ErrorActions>
        </ErrorCard>
      </LoadingShell>
    );
  }

  return (
    <PageShell>
      <PageFrame>
        <TopBar>
          <NavGroup>
            <BackLink to="/" state={{ scrollTo: "projects" }}>
              <ArrowLeft size={16} />
              프로젝트로 돌아가기
            </BackLink>
            <ExternalLinkButton href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              GitHub
            </ExternalLinkButton>
          </NavGroup>
          <NavGroup>
            <Chip>
              <Keyboard size={16} />
              키보드 입력 지원
            </Chip>
            <Chip>
              <RotateCcw size={16} />
              언제든 새 게임
            </Chip>
          </NavGroup>
        </TopBar>

        <GameCard
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Hero>
            <HeroCopy>
              <Title>KWB</Title>
              <Description>
                KWB는 5자모 단어를 6번 안에 맞히는 게임이다. 입력한 자모는 strike, ball, out으로
                피드백되고, 공개 단어 목록을 기반으로만 정답을 인정한다.
              </Description>
              <MetaRow>
                <Chip>남은 시도 {attemptsLeft} / {MAX_ATTEMPTS}</Chip>
                <Chip>정답 후보 {answerPool.length.toLocaleString()}개</Chip>
                <Chip>{statusLabel}</Chip>
                <Chip>연승 {stats.currentStreak}</Chip>
                <Chip>최고 {stats.bestStreak}</Chip>
              </MetaRow>
            </HeroCopy>

            <StatsGrid>
              <StatCard>
                <StatLabel>승리</StatLabel>
                <StatValue>{stats.wins}</StatValue>
              </StatCard>
              <StatCard>
                <StatLabel>패배</StatLabel>
                <StatValue>{stats.losses}</StatValue>
              </StatCard>
              <StatCard>
                <StatLabel>이번 판 상태</StatLabel>
                <StatValue>{statusLabel}</StatValue>
              </StatCard>
              <StatCard>
                <StatLabel>입력 길이</StatLabel>
                <StatValue>{currentGuess.length} / {WORD_LENGTH}</StatValue>
              </StatCard>
            </StatsGrid>
          </Hero>

          <AnimatePresence mode="wait">
            {(hasWon || hasLost) && answer && (
              <ResultBanner
                key={status}
                $tone={hasWon ? "success" : "danger"}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <BannerTitle>
                  {hasWon ? <Trophy size={18} /> : <AlertTriangle size={18} />}
                  {hasWon ? "정답을 맞췄다" : "게임이 끝났다"}
                </BannerTitle>
                <BannerText>
                  정답은 <strong>{answer.word}</strong> ({answer.jamo})이다.
                  {answer.definition ? ` 뜻풀이: ${answer.definition}` : ""}
                </BannerText>
              </ResultBanner>
            )}
          </AnimatePresence>

          <BoardSection>
            <BoardHeader>
              <SectionTitle>
                <Keyboard size={18} />
                시도 보드
              </SectionTitle>
              <SectionHint>Enter로 제출하고 Backspace로 지운다.</SectionHint>
            </BoardHeader>

            <BoardGrid>
              {Array.from({ length: MAX_ATTEMPTS }, (_, rowIndex) => {
                const attempt = history[rowIndex];
                const isActiveRow = rowIndex === history.length && status === "playing";
                const letters = attempt ? attempt.guess.split("") : isActiveRow ? currentGuess : [];
                const marks = attempt?.marks;

                return (
                  <BoardRow key={`row-${rowIndex}`}>
                    {Array.from({ length: WORD_LENGTH }, (_, cellIndex) => {
                      const letter = letters[cellIndex];
                      const mark = marks?.[cellIndex];

                      return (
                        <Tile key={cellIndex} $tone={getTileTone(mark)}>
                          {letter ?? ""}
                        </Tile>
                      );
                    })}
                  </BoardRow>
                );
              })}
            </BoardGrid>
          </BoardSection>

          <KeyboardSection>
            <SectionTitle>
              <Keyboard size={18} />
              입력 키보드
            </SectionTitle>

            {QWERTY_KEY_ROWS.map((row, rowIndex) => (
              <KeyboardRow
                key={`qwerty-${rowIndex}`}
                style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
              >
                {row.map((key) => (
                  <KeyButton
                    key={key.physical}
                    type="button"
                    $mark={keyboardState[key.label]}
                    onClick={() => handlePress(key.label)}
                    disabled={status !== "playing"}
                  >
                    <KeyLabel>{key.label}</KeyLabel>
                  </KeyButton>
                ))}
              </KeyboardRow>
            ))}

            <KeyboardRow style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              {ACTION_KEY_ROW.map((key) => (
                <KeyButton
                  key={key.physical}
                  type="button"
                  $wide
                  onClick={() => handlePress(key.label)}
                  disabled={status !== "playing" && key.physical !== "Enter"}
                >
                  <KeyLabel>{key.label}</KeyLabel>
                </KeyButton>
              ))}
            </KeyboardRow>
          </KeyboardSection>

          <Footer>
            <FooterNote>
              이 게임은 `korean-baseball` 저장소의 공개 단어 데이터를 받아 실행한다. 정답을 맞히면
              통계가 저장되고, 다시 시작 버튼으로 새 단어를 바로 뽑을 수 있다.
            </FooterNote>
            <NavGroup>
              <RetryButton type="button" onClick={handleResetGame} disabled={answerPool.length === 0}>
                새 게임
              </RetryButton>
            </NavGroup>
          </Footer>
        </GameCard>
      </PageFrame>

      <AnimatePresence>
        {toast && (
          <Toast
            $tone={toast.tone}
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
          >
            <ToastTitle>
              {toast.tone === "success" ? <Trophy size={16} /> : <AlertTriangle size={16} />}
              알림
            </ToastTitle>
            <ToastText>{toast.message}</ToastText>
          </Toast>
        )}
      </AnimatePresence>
    </PageShell>
  );
}

export default WordBaseballPage;
