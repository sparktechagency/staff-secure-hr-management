// components/ContactInfoCard.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContactInfoCardData {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  variant?: "default" | "button";
}

interface ContactInfoCardProps {
  data: ContactInfoCardData;
}

export default function ContactInfoCard({ data }: ContactInfoCardProps) {
  const { icon, label, value, href } = data;

  const content = (
    <div
      className={cn(
        "flex items-start gap-4 rounded-2xl bg-white p-5 transition-all border border-[#E1E1E1]"
      )}
    >
      <div
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-xl text-secondary-color bg-[#DBEAFE]"
        )}
      >
        {icon}
      </div>

      <div>
        <p className="text-xs sm:text-sm lg:text-base font-semibold text-base-color">
          {label}
        </p>
        <p className="mt-1 text-base sm:text-lg lg:text-xl font-normal text-[#162456]">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
