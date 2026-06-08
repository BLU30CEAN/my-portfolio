import { GITHUB_HEATMAP_ACCOUNTS } from "../config/githubAccounts";
import { GITLAB_ARCHIVE_SOURCES } from "../config/gitlabSources";

const CONTRIBUTIONS_API =
  "https://github-contributions-api.jogruber.de/v4";

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface UserContributionResponse {
  total: { lastYear: number };
  contributions: ContributionDay[];
}

export interface GitHubUserProfile {
  login: string;
  public_repos: number;
}

export interface MergedGitHubActivity {
  accounts: string[];
  contributions: ContributionDay[];
  totalContributions: number;
  totalRepos: number;
  perAccount: Array<{
    login: string;
    contributions: number;
    repos: number;
    source: "github" | "gitlab";
    profileUrl?: string;
    pending?: boolean;
  }>;
}

export interface GitLabArchiveFile {
  source: "gitlab";
  username: string;
  profileUrl: string;
  exportedAt: string | null;
  method: string;
  note: string;
  total: number;
  contributions: Array<{ date: string; count: number }>;
}

function archiveToDays(archive: GitLabArchiveFile): ContributionDay[] {
  return archive.contributions.map(({ date, count }) => ({
    date,
    count,
    level: 0,
  }));
}

export async function fetchGitLabArchives(): Promise<GitLabArchiveFile[]> {
  const base = process.env.PUBLIC_URL || "";
  const results = await Promise.all(
    GITLAB_ARCHIVE_SOURCES.map(async (src) => {
      try {
        const res = await fetch(`${base}/data/${src.dataFile}`);
        if (!res.ok) return null;
        return (await res.json()) as GitLabArchiveFile;
      } catch {
        return null;
      }
    }),
  );
  return results.filter((r): r is GitLabArchiveFile => r !== null);
}

export interface HeatmapCell {
  date: string;
  count: number;
  level: number;
  empty: boolean;
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`GitHub fetch failed: ${res.status} ${url}`);
  }
  return res.json() as Promise<T>;
}

export async function fetchUserContributions(
  username: string,
): Promise<UserContributionResponse> {
  return fetchJson(`${CONTRIBUTIONS_API}/${username}?y=last`);
}

export async function fetchUserProfile(
  username: string,
): Promise<GitHubUserProfile> {
  return fetchJson(`https://api.github.com/users/${username}`);
}

/** GitHub 스타일 4단계 강도 (합산 count 기준) */
export function countToLevel(count: number, maxCount: number): number {
  if (count <= 0) return 0;
  if (maxCount <= 0) return 1;
  const ratio = count / maxCount;
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

/** 날짜별 count 합산 후 level 재계산 */
export function mergeContributions(
  datasets: ContributionDay[][],
): ContributionDay[] {
  const byDate = new Map<string, number>();

  for (const days of datasets) {
    for (const day of days) {
      byDate.set(day.date, (byDate.get(day.date) ?? 0) + day.count);
    }
  }

  const dates = Array.from(byDate.keys()).sort();
  const maxCount = Math.max(0, ...Array.from(byDate.values()));

  return dates.map((date) => {
    const count = byDate.get(date) ?? 0;
    return {
      date,
      count,
      level: countToLevel(count, maxCount),
    };
  });
}

/** 주(열) × 요일(행) 그리드 — GitHub contribution graph 레이아웃 */
export function buildHeatmapGrid(days: ContributionDay[]): HeatmapCell[][] {
  if (days.length === 0) return [];

  const first = new Date(`${days[0].date}T12:00:00`);
  const startPad = first.getDay();

  const padded: HeatmapCell[] = [
    ...Array.from({ length: startPad }, () => ({
      date: "",
      count: 0,
      level: 0,
      empty: true,
    })),
    ...days.map((d) => ({ ...d, empty: false })),
  ];

  const weekCount = Math.ceil(padded.length / 7);
  const weeks: HeatmapCell[][] = [];

  for (let w = 0; w < weekCount; w++) {
    const column: HeatmapCell[] = [];
    for (let d = 0; d < 7; d++) {
      column.push(padded[w * 7 + d] ?? { date: "", count: 0, level: 0, empty: true });
    }
    weeks.push(column);
  }

  return weeks;
}

export async function fetchMergedGitHubActivity(
  accounts: readonly string[] = GITHUB_HEATMAP_ACCOUNTS,
): Promise<MergedGitHubActivity> {
  const [perAccount, gitlabArchives] = await Promise.all([
    Promise.all(
      accounts.map(async (login) => {
        const [contrib, profile] = await Promise.all([
          fetchUserContributions(login),
          fetchUserProfile(login),
        ]);

        const contributions = contrib.contributions.reduce(
          (sum, d) => sum + d.count,
          0,
        );

        return {
          login: profile.login,
          contributions,
          repos: profile.public_repos,
          days: contrib.contributions,
          source: "github" as const,
          profileUrl: `https://github.com/${profile.login}`,
          pending: false,
        };
      }),
    ),
    fetchGitLabArchives(),
  ]);

  const gitlabEntries = GITLAB_ARCHIVE_SOURCES.map((src) => {
    const archive = gitlabArchives.find((a) => a.username === src.id);
    const days = archive ? archiveToDays(archive) : [];
    const contributions = days.reduce((sum, d) => sum + d.count, 0);
    const pending = !archive?.exportedAt || contributions === 0;

    return {
      login: src.label,
      contributions,
      repos: 0,
      days,
      source: "gitlab" as const,
      profileUrl: src.profileUrl,
      pending,
    };
  });

  const allDaySets = [
    ...perAccount.map((a) => a.days),
    ...gitlabEntries.map((g) => g.days),
  ];
  const mergedDays = mergeContributions(allDaySets);

  const allAccounts = [...perAccount, ...gitlabEntries];

  return {
    accounts: allAccounts.map((a) => a.login),
    contributions: mergedDays,
    totalContributions: mergedDays.reduce((sum, d) => sum + d.count, 0),
    totalRepos: perAccount.reduce((sum, a) => sum + a.repos, 0),
    perAccount: allAccounts.map(
      ({ login, contributions, repos, source, profileUrl, pending }) => ({
        login,
        contributions,
        repos,
        source,
        profileUrl,
        pending,
      }),
    ),
  };
}

export function formatStat(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k+`;
  return n.toLocaleString("ko-KR");
}
