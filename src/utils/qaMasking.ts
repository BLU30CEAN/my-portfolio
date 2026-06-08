import type { QAReport, QAReportDefect, QAReportSuite } from "../types/qaReport";

const MASK = "●●●";

export function maskText(value: string, unlocked: boolean): string {
  if (unlocked || !value) return value;
  return MASK;
}

export function maskFilePath(value: string, unlocked: boolean): string {
  if (unlocked || !value) return value;
  const base = value.split("/").pop() || value;
  const ext = base.includes(".") ? base.slice(base.lastIndexOf(".")) : "";
  return `e2e/${MASK}${ext}`;
}

export function maskReportForView(data: QAReport, unlocked: boolean): QAReport {
  if (unlocked) return data;

  return {
    ...data,
    environment: MASK,
    suites: data.suites.map(
      (s): QAReportSuite => ({
        ...s,
        name: MASK,
        file: maskFilePath(s.file, false),
      }),
    ),
    defects: data.defects.map(
      (d): QAReportDefect => ({
        ...d,
        suite: MASK,
        title: MASK,
        file: maskFilePath(d.file, false),
        message: d.message ? MASK : undefined,
      }),
    ),
    history: data.history.map((h) => ({
      ...h,
      runAt: MASK,
    })),
  };
}
