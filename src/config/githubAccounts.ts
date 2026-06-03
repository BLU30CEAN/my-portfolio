/** 포트폴리오 히트맵에 합산할 GitHub 계정 (소문자·대문자 모두 API에서 수용) */
export const GITHUB_HEATMAP_ACCOUNTS = ["BLU30CEAN", "bbo14"] as const;

export type GitHubHeatmapAccount = (typeof GITHUB_HEATMAP_ACCOUNTS)[number];
