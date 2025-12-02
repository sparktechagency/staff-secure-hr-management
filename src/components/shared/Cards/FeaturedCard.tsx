import { cn } from "@/lib/utils";
import React from "react";

export interface IFeaturedCardData {
  id: number;
  icon: React.ReactNode | string;
  title: string;
  description: string;
}

const FeaturedCard = ({
  data,
  className = "",
  titleCalssName = "",
  descriptionClassName = "",
}: {
  data: IFeaturedCardData;
  className?: string;
  titleCalssName?: string;
  descriptionClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "p-5 rounded-2xl border border-[#FFFFFF33] bg-[#FFFFFF1A] flex flex-col items-center justify-center gap-1",
        className
      )}
    >
      <div className="w-fit mb-3">{data.icon}</div>
      <h3
        className={cn(
          "text-sm sm:text-base lg:text-lg font-semibold text-primary-color",
          titleCalssName
        )}
      >
        {data.title}
      </h3>
      <p
        className={cn(
          "text-xs sm:text-sm lg:text-base text-primary-color",
          descriptionClassName
        )}
      >
        {data.description}
      </p>
    </div>
  );
};

export default FeaturedCard;
