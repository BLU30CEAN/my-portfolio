import { useEffect, useState } from "react";
import { GITHUB_HEATMAP_ACCOUNTS } from "../config/githubAccounts";
import {
  fetchMergedGitHubActivity,
  type MergedGitHubActivity,
} from "../utils/githubContributions";

interface State {
  data: MergedGitHubActivity | null;
  loading: boolean;
  error: string | null;
}

export function useGitHubActivity(): State {
  const [state, setState] = useState<State>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetchMergedGitHubActivity(GITHUB_HEATMAP_ACCOUNTS)
      .then((data) => {
        if (!cancelled) {
          setState({ data, loading: false, error: null });
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setState({
            data: null,
            loading: false,
            error:
              err instanceof Error
                ? err.message
                : "GitHub 활동 데이터를 불러오지 못했습니다.",
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
