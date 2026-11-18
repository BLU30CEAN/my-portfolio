import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
    window.setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, [navigate]);
  return null;
};

export default ContactPage;
