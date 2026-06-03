import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
/** 레거시 `/#/projects` → 홈 Projects 섹션 */
function ProjectsRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true, state: { scrollTo: "projects" } });
  }, [navigate]);

  return null;
}

export default ProjectsRedirect;
