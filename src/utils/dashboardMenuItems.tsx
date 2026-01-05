"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import overview from "../../public/assets/svg/overview.svg";
import { useSidebar } from "@/context/SidebarContext";
import { useAppDispatch } from "@/redux/hooks";
import { toggleCollapse } from "@/redux/features/sidebar/sidebarSlice";

export const useCandidatePaths = () => {
  const { handleToggleCollapse } = useSidebar(); // Use the context to get the toggle function

  const pathname = usePathname();

  return [
    {
      key: "current-vacancies",
      label: (
        <Link
          onClick={handleToggleCollapse}
          href="/dashboard/candidate/current-vacancies"
        >
          Current Vacancies
        </Link>
      ),
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/current-vacancies")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
    {
      key: "my-profile",
      label: (
        <Link
          onClick={handleToggleCollapse}
          href="/dashboard/candidate/my-profile"
        >
          My Profile
        </Link>
      ),
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/my-profile")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
    {
      key: "live-chat",
      label: (
        <Link
          onClick={handleToggleCollapse}
          href="/dashboard/candidate/live-chat"
        >
          Live Chat
        </Link>
      ),
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/live-chat")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
    {
      key: "settings",
      label: (
        <Link
          onClick={handleToggleCollapse}
          href="/dashboard/candidate/settings"
        >
          Settings
        </Link>
      ),
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/settings")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
  ];
};
export const useEmployerPaths = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const handleToggleCollapse = () => {
    dispatch(toggleCollapse());
  };
  return [
    {
      key: "overview",
      label: (
        <Link
          onClick={handleToggleCollapse}
          href="/dashboard/employer/overview"
        >
          Overview
        </Link>
      ),
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/overview")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
    {
      key: "create-project",
      label: (
        <Link
          onClick={handleToggleCollapse}
          href="/dashboard/employer/create-project"
        >
          Create Project
        </Link>
      ),
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/create-project")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
    {
      key: "project-requirements",
      label: (
        <Link
          onClick={handleToggleCollapse}
          href="/dashboard/employer/project-requirements"
        >
          Current Project
        </Link>
      ),
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/project-requirements")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
    {
      key: "received-cvs",
      label: (
        <Link
          onClick={handleToggleCollapse}
          href="/dashboard/employer/received-cvs"
        >
          Received CVs
        </Link>
      ),
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/received-cvs")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
    {
      key: "my-subscription",
      label: (
        <Link
          onClick={handleToggleCollapse}
          href="/dashboard/employer/my-subscription"
        >
          My Subscription
        </Link>
      ),
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/my-subscription")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
    {
      key: "live-chat",
      label: (
        <Link
          onClick={handleToggleCollapse}
          href="/dashboard/employer/live-chat"
        >
          Live Chat
        </Link>
      ),
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/live-chat")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
    {
      key: "settings",
      label: (
        <Link
          onClick={handleToggleCollapse}
          href="/dashboard/employer/settings"
        >
          Settings
        </Link>
      ),
      icon: (
        <Image
          src={overview}
          alt="icon"
          width={20}
          className="mr-2"
          style={{
            filter: pathname.includes("/settings")
              ? "invert(1) sepia(1) saturate(0) brightness(200%) contrast(100%)"
              : undefined,
          }}
        />
      ),
    },
  ];
};
