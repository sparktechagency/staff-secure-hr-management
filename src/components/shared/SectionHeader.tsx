import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  className?: string;
  title?: string;
  subTitle?: string;
  description?: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({
  className = "",
  subTitle,
  title,
  description,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center text-center mb-10 lg:mb-16",
        className
      )}
    >
      {subTitle && (
        <h2 className="text-sm sm:text-base lg:text-lg text-secondary-color font-semibold mb-3">
          {subTitle}
        </h2>
      )}
      {title && (
        <div className="mb-3">
          {" "}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-secondary-color font-bold">
            {title}
          </h1>
        </div>
      )}
      {description && (
        <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-base-color w-full sm:w-[90%] lg:w-[80%] xl:w-[65%] mx-auto font-medium">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
