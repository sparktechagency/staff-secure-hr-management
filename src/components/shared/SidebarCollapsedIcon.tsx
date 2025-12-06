"use client";
import { useSidebar } from "@/context/SidebarContext";
import { BarsOutlined } from "@ant-design/icons";

const SidebarCollapsedIcon = () => {
  const { handleToggleCollapse } = useSidebar(); // Use the context to get the toggle function

  return (
    <BarsOutlined
      onClick={handleToggleCollapse}
      className="text-3xl !text-secondary-color"
    />
  );
};

export default SidebarCollapsedIcon;
