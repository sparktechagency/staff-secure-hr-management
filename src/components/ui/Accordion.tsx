// Accordion.jsx
"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  className,
  isOpen,
  onToggle,
}) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight); // Access only if not null
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className={cn(
        `${
          height > 0
            ? "border-b border-primary-color"
            : "border-b border-[#E4E7EC]"
        } mb-5 bg-primary-color duration-500 rounded`,
        className
      )}
    >
      <div
        className="flex justify-between gap-5 items-center p-4 cursor-pointer duration-500"
        onClick={onToggle}
      >
        <h3 className="text-base-color text-base md:text-lg lg:text-xl font-semibold">
          {title}
        </h3>{" "}
        {isOpen ? (
          <div className="p-[2px] rounded-full border border-secondary-color">
            <HiMinus className="text-secondary-color text-base md:text-lg lg:text-xl duration-500" />
          </div>
        ) : (
          <div className="p-[2px] rounded-full border border-secondary-color">
            <GoPlus className="text-secondary-color text-base md:text-lg lg:text-xl duration-500" />
          </div>
        )}
      </div>
      <div
        ref={contentRef}
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.5s ease",
        }}
      >
        <div className="p-4 bg-primary-color text-[#667085] duration-500 text-sm md:text-base lg:text-lg rounded-bl rounded-br border-b border-[#E4E7EC]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
