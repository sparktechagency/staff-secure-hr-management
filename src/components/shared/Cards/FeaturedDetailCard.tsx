import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // adjust path if needed

export interface FeaturedDetailCardData {
  icon?: ReactNode;
  title: string;
  subTitle?: string;
  description: string;
  variant?: "white" | "dark";
  className?: string; // optional extra classes
}

export default function FeaturedDetailCard({
  data,
  className = "",
}: {
  data: FeaturedDetailCardData;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg p-8 transition-all duration-500 ease-in-out hover:shadow",
        data?.variant === "white" && "bg-white border border-[#E1E1E1]",
        data?.variant === "dark" && "bg-secondary-color text-white",
        className // allows overrides if needed
      )}
    >
      <div className="flex items-start gap-5">
        {/* Icon */}
        {data?.icon && (
          <div
            className={cn(
              "flex p-4 shrink-0 items-center justify-center rounded-2xl text-2xl",
              data?.variant === "white" &&
                "bg-secondary-color text-primary-color",
              data?.variant === "dark" && "bg-white/20 text-white"
            )}
          >
            {data?.icon}
          </div>
        )}

        {/* Content */}
        <div className="flex-1">
          <h3
            className={cn(
              "mb-1 text-lg sm:text-xl lg:text-2xl font-bold",
              data?.variant === "white" && "text-secondary-color",
              data?.variant === "dark" && "text-white"
            )}
          >
            {data?.title}
          </h3>
          <h5
            className={cn(
              "mb-3 text-sm sm:text-base lg:text-lg font-medium",
              data?.variant === "white" && "text-base-color",
              data?.variant === "dark" && "text-white"
            )}
          >
            {data?.subTitle}
          </h5>
          <p
            className={cn(
              "text-xs sm:text-sm lg:text-base leading-relaxed",
              data?.variant === "white" && "text-gray-600",
              data?.variant === "dark" && "text-blue-100"
            )}
          >
            {data?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
