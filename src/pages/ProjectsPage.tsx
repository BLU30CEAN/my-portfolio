import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
    window.setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, [navigate]);
  return null;
};

export default ProjectsPage;
