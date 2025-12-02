import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  className?: string;
  subTitleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  title?: string;
  subTitle?: string;
  description?: string;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({
  className = "",
  subTitleClassName = "",
  titleClassName = "",
  descriptionClassName = "",
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
        <h2
          className={cn(
            "text-sm sm:text-base lg:text-lg text-secondary-color font-semibold mb-3",
            subTitleClassName
          )}
        >
          {subTitle}
        </h2>
      )}
      {title && (
        <div className="mb-3">
          {" "}
          <h1
            className={cn(
              "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-secondary-color font-bold",
              titleClassName
            )}
          >
            {title}
          </h1>
        </div>
      )}
      {description && (
        <p
          className={cn(
            "text-xs sm:text-sm lg:text-base xl:text-lg text-base-color w-full sm:w-[90%] lg:w-[80%] xl:w-[65%] mx-auto font-medium",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
