import React from "react";
import type { AdminTemplateId } from "../../data/adminTemplates";
import ThreeColumnOpsDemo from "./ThreeColumnOpsDemo";
import SidebarCatalogDemo from "./SidebarCatalogDemo";

/** 템플릿 A/B 라이브 데모 라우터 */
const LiveTemplateDemo: React.FC<{ template: AdminTemplateId }> = ({
  template,
}) => {
  if (template === "sidebar-catalog") return <SidebarCatalogDemo />;
  return <ThreeColumnOpsDemo />;
};

export default LiveTemplateDemo;
