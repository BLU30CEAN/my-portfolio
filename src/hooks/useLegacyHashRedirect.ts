import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER_BASENAME } from "../utils/routerBasename";

/** 예전 HashRouter 북마크 `/#/journal` → `/journal` 로 한 번만 치환 */
export function useLegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.startsWith("#/")) return;

    const legacyPath = hash.slice(1);
    const base = ROUTER_BASENAME.replace(/\/$/, "");
    window.history.replaceState(null, "", `${base}${legacyPath}`);

    const q = legacyPath.indexOf("?");
    const pathname = q >= 0 ? legacyPath.slice(0, q) : legacyPath;
    const search = q >= 0 ? legacyPath.slice(q) : "";
    navigate(`${pathname}${search}`, { replace: true });
  }, [navigate]);
}
