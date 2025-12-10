"use client";
import React from "react";
import { Button } from "antd";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "highlight"
  | "ghost"
  | "outline"
  | "error";

interface ReuseButtonProps {
  url?: string;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const variantStyles = {
  primary: "!bg-primary-color !text-base-color border !border-base-color ",
  secondary:
    "!bg-secondary-color !text-primary-color border !border-secondary-color",
  highlight: "!bg-base-color !text-primary-color border !border-primary-color",
  ghost:
    "!bg-primary-color/20 !text-base-color border  !border-primary-color/20 hover:!bg-primary-color hover:!text-base-color hover:!border-primary-color",
  outline: "!bg-transparent !text-secondary-color !border-secondary-color",
  error: "!bg-red-600 !text-primary-color border !border-red-600",
};

const ReuseButton = ({
  url,
  variant = "primary",
  className,
  disabled = false,
  loading = false,
  htmlType = "button",
  onClick,
  children,
  icon,
}: ReuseButtonProps) => {
  return url ? (
    <Link href={url}>
      <Button
        className={cn(
          "!py-5 !px-8 !text-lg w-full text-center  !ring-0 rounded-md",
          variantStyles[variant],
          className
        )}
        disabled={disabled}
        loading={loading}
        htmlType={htmlType}
        onClick={onClick}
        icon={icon}
      >
        {children}
      </Button>
    </Link>
  ) : (
    <Button
      className={cn(
        "!py-5 !px-8 !text-lg w-full text-center  !ring-0 rounded-md",
        variantStyles[variant],
        className
      )}
      disabled={disabled}
      loading={loading}
      htmlType={htmlType}
      onClick={onClick}
      icon={icon}
    >
      {children}
    </Button>
  );
};

export default ReuseButton;
