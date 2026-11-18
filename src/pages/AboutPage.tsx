import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
    window.setTimeout(() => {
      document
        .getElementById("about")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, [navigate]);
  return null;
};

export default AboutPage;
