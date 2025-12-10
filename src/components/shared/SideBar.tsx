"use client";
// import { selectIsCollapsed } from "@/redux/features/sidebar/sidebarSlice";
// import { useAppSelector } from "@/redux/hooks";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { usePathname } from "next/navigation";
import React from "react";
import SidebarCollapsedIcon from "./SidebarCollapsedIcon";
import getActiveKeys from "@/utils/activeKey";
import {
  useCandidatePaths,
  useEmployerPaths,
} from "@/utils/dashboardMenuItems";
import { useSidebar } from "@/context/SidebarContext";
// import { ISignInUser } from "@/types";
// import { decodedToken } from "@/utils/jwt";
// import Cookies from "js-cookie";

const SideBar = () => {
  const path = usePathname();

  const { isCollapsed } = useSidebar(); // Access the collapse state from context

  // const token = Cookies.get("frafolMainAccessToken");
  // const userData: ISignInUser | null = decodedToken(token || "");
  // const isCollapsed = useAppSelector(selectIsCollapsed);

  const pathname = usePathname();

  const currentPath = path?.split("/")?.[2];

  const userData = {
    role: currentPath,
  };
  const defaultUrl =
    userData?.role === "candidate" ? "/candidate" : "/employer";

  const normalizedPath = pathname.replace(defaultUrl, "");

  const candidatePath = useCandidatePaths();
  const employerPath = useEmployerPaths();

  const activeKeys = getActiveKeys(normalizedPath);
  const menuItems =
    userData?.role === "candidate" ? candidatePath : employerPath;

  return (
    <Sider
      theme="light"
      width={300}
      trigger={null}
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      collapsed={isCollapsed}
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
        backgroundColor: "#ffffff",
      }}
      className={` !fixed !z-[60] !top-12  ${
        isCollapsed ? "!left-[-300px]" : "!left-0"
      }`}
    >
      <div className="flex items-center justify-end my-5 px-4">
        <SidebarCollapsedIcon />
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={activeKeys}
        selectedKeys={activeKeys}
        style={{
          backgroundColor: "transparent",
          border: "none",
          paddingLeft: "6px",
          paddingRight: "6px",
        }}
        items={menuItems}
      />
    </Sider>
  );
};

export default SideBar;
