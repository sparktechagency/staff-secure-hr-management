"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { IPricingPlan } from "./PricingCard";

const PricingCardButton = ({ plan, openModal }: { plan: IPricingPlan, openModal: (plan: IPricingPlan) => void }) => {


  return (
    <button
      onClick={() =>
        openModal(plan)
      }
      className={cn(
        "w-full rounded-xl px-8 py-4 font-semibold text-white transition-all duration-300 cursor-pointer hover:bg-[#1C398E]",
        plan?.popular ? "bg-[#1C398E]" : "bg-[#1C398E]"
      )}
    >
      Subscribe →
    </button>
  );
};

export default PricingCardButton;
