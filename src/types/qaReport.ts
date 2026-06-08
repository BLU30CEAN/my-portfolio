export type DefectSeverity = "critical" | "major" | "minor";
export type DefectStatus = "open" | "resolved";

export type QAReportSummary = {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  flaky: number;
  durationMs: number;
  passRate: number;
};

export type QAReportSuite = {
  id: string;
  name: string;
  file: string;
  passed: number;
  failed: number;
  skipped: number;
  durationMs: number;
};

export type QAReportDefect = {
  id: string;
  suite: string;
  title: string;
  file: string;
  severity: DefectSeverity;
  status: DefectStatus;
  message?: string;
  firstSeen: string;
  lastSeen: string;
  resolvedAt?: string | null;
};

export type QAReportHistory = {
  runAt: string;
  total: number;
  passed: number;
  failed: number;
  passRate: number;
};

export type QAReport = {
  schemaVersion: number;
  generatedAt: string;
  runner: string;
  environment: string;
  summary: QAReportSummary;
  suites: QAReportSuite[];
  defects: QAReportDefect[];
  history: QAReportHistory[];
};
