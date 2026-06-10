import { useEffect, useMemo, useState } from "react";
import { useGitHubActivity } from "./useGitHubActivity";
import { useQAReport } from "./useQAReport";

type GitLabArchive = {
  total: number;
  exportedAt: string;
  contributions?: Array<{ date: string; count: number }>;
};

export type OpsEvent = {
  level: "ok" | "info" | "warn";
  message: string;
  ago: string;
};

const GITLAB_URL = `${process.env.PUBLIC_URL || ""}/data/gitlab-eunjun.json`;

function formatRelative(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  if (Number.isNaN(diff)) return iso;
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 48) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function eventTimestamp(iso: string): number {
  const ts = new Date(iso).getTime();
  return Number.isNaN(ts) ? 0 : ts;
}

function pushEvent(
  rows: Array<OpsEvent & { at: number }>,
  level: OpsEvent["level"],
  message: string,
  iso: string,
) {
  const at = eventTimestamp(iso);
  if (!at) return;
  rows.push({ level, message, ago: formatRelative(iso), at });
}

export type OpsFeedStatus = "loading" | "healthy" | "degraded" | "offline";

export type OpsFeed = {
  id: string;
  name: string;
  detail: string;
  status: OpsFeedStatus;
};

function formatDuration(ms: number): string {
  if (ms < 1000) return `${Math.round(ms)}ms`;
  return `${(ms / 1000).toFixed(1)}s`;
}

export function usePortfolioOpsData() {
  const qa = useQAReport();
  const github = useGitHubActivity();
  const [gitlab, setGitlab] = useState<GitLabArchive | null>(null);
  const [gitlabError, setGitlabError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(`${GITLAB_URL}?t=${Date.now()}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as GitLabArchive;
        if (!cancelled) setGitlab(json);
      } catch (e) {
        if (!cancelled) {
          setGitlabError(
            e instanceof Error ? e.message : "GitLab export를 불러오지 못했습니다.",
          );
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const loading = qa.loading || github.loading;

  const feeds = useMemo<OpsFeed[]>(() => {
    const qaStatus: OpsFeedStatus = qa.loading
      ? "loading"
      : qa.error
        ? "offline"
        : qa.data && qa.data.summary.failed > 0
          ? "degraded"
          : "healthy";

    const ghStatus: OpsFeedStatus = github.loading
      ? "loading"
      : github.error
        ? "offline"
        : "healthy";

    const glStatus: OpsFeedStatus = gitlabError
      ? "offline"
      : gitlab
        ? "healthy"
        : "loading";

    return [
      {
        id: "qa-report",
        name: "qa-report.json",
        detail: qa.data
          ? `${qa.data.summary.passed}/${qa.data.summary.total} pass`
          : "Playwright export",
        status: qaStatus,
      },
      {
        id: "github-api",
        name: "github-contributions-api",
        detail: github.data
          ? `${github.data.totalContributions} contrib / 365d`
          : "runtime merge",
        status: ghStatus,
      },
      {
        id: "gitlab-json",
        name: "gitlab-eunjun.json",
        detail: gitlab
          ? `${gitlab.total} events`
          : "static export",
        status: glStatus,
      },
    ];
  }, [qa, github, gitlab, gitlabError]);

  const events = useMemo<OpsEvent[]>(() => {
    const rows: Array<OpsEvent & { at: number }> = [];

    if (qa.data?.history?.length) {
      for (const run of qa.data.history) {
        pushEvent(
          rows,
          run.failed > 0 ? "warn" : "ok",
          `E2E ${run.passed}/${run.total} passed (${run.passRate}%)`,
          run.runAt,
        );
      }
    }

    if (qa.data?.generatedAt) {
      pushEvent(
        rows,
        "info",
        `Report export — ${qa.data.runner} / ${qa.data.environment}`,
        qa.data.generatedAt,
      );
    }

    for (const defect of qa.data?.defects ?? []) {
      if (defect.status === "open") {
        pushEvent(
          rows,
          defect.severity === "critical" ? "warn" : "info",
          `Defect open — ${defect.suite} / ${defect.title}`,
          defect.lastSeen,
        );
      } else if (defect.resolvedAt) {
        pushEvent(
          rows,
          "ok",
          `Defect resolved — ${defect.suite} / ${defect.title}`,
          defect.resolvedAt,
        );
      }
    }

    const latestGh = [...(github.data?.contributions ?? [])]
      .filter((day) => day.count > 0)
      .sort((a, b) => b.date.localeCompare(a.date))[0];
    if (latestGh) {
      pushEvent(
        rows,
        "info",
        `GitHub activity — ${latestGh.count} contrib on ${latestGh.date}`,
        `${latestGh.date}T23:59:59.000Z`,
      );
    }

    if (gitlab?.exportedAt) {
      pushEvent(
        rows,
        "info",
        `GitLab archive refresh — ${gitlab.total} events`,
        gitlab.exportedAt,
      );
    }

    const latestGl = [...(gitlab?.contributions ?? [])]
      .filter((day) => day.count > 0)
      .sort((a, b) => b.date.localeCompare(a.date))[0];
    if (latestGl) {
      pushEvent(
        rows,
        "info",
        `GitLab activity — ${latestGl.count} events on ${latestGl.date}`,
        `${latestGl.date}T23:59:59.000Z`,
      );
    }

    return rows
      .sort((a, b) => b.at - a.at)
      .slice(0, 6)
      .map(({ at: _at, ...event }) => event);
  }, [qa.data, github.data, gitlab]);

  const trend = useMemo(() => {
    const history = qa.data?.history ?? [];
    const values = [...history].reverse().map((h) => h.passRate);
    if (history.length >= 2) {
      const delta = history[0].passRate - history[1].passRate;
      const sign = delta >= 0 ? "+" : "";
      return {
        values,
        meta: `${sign}${delta.toFixed(1)}pp vs prior run`,
      };
    }
    if (history.length === 1) {
      return { values, meta: `${history[0].passRate}% latest run` };
    }
    return { values: [] as number[], meta: "awaiting E2E history" };
  }, [qa.data]);

  const kpis = useMemo(() => {
    const ghTotal = github.data?.totalContributions ?? 0;
    const glTotal = gitlab?.total ?? 0;

    return {
      passRate: qa.data?.summary.passRate ?? null,
      runDuration: qa.data?.summary.durationMs ?? null,
      activityTotal: ghTotal + glTotal,
      openDefects: qa.data?.defects.filter((d) => d.status === "open").length ?? null,
    };
  }, [qa.data, github.data, gitlab]);

  return {
    loading,
    error: qa.error || github.error || gitlabError,
    kpis,
    feeds,
    events,
    trend,
    lastSync: qa.data?.generatedAt ?? null,
    formatDuration,
  };
}
