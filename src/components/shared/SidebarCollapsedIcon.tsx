"use client";
import { toggleCollapse } from "@/redux/features/sidebar/sidebarSlice";
import { useAppDispatch } from "@/redux/hooks";
import { BarsOutlined } from "@ant-design/icons";

const SidebarCollapsedIcon = () => {
  const dispatch = useAppDispatch();
  const handleToggleCollapse = () => {
    dispatch(toggleCollapse());
  };
  return (
    <BarsOutlined
      onClick={handleToggleCollapse}
      className="text-3xl !text-secondary-color"
    />
  );
};

export default SidebarCollapsedIcon;
