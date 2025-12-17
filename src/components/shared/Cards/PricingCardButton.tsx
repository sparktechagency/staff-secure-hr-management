"use client";
import { cn } from "@/lib/utils";
import { purchasePackage } from "@/services/PackageService/PackageServiceApi";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import React from "react";
import { useRouter } from "next/navigation";
import { IPricingPlan } from "./PricingCard";

const PricingCardButton = ({ plan }: { plan: IPricingPlan }) => {
  const router = useRouter();

  const handleSubmit = async (payload: {
    subscriptionType: string; // 'Bronze' || 'Platinum' "| " 'Diamond'
    durationInMonths: number;
    amount: number;
    discount: number;
  }) => {
    const res = await tryCatchWrapper(
      purchasePackage,
      { body: payload },
      "Wait a moment...",
      "Redirecting!",
      "Something went wrong! Please try again."
    );

    console.log(res);

    if (res?.success) {
      router.push(res?.data?.checkoutUrl);
    }
  };

  return (
    <button
      onClick={() =>
        handleSubmit({
          subscriptionType: plan.name, // 'Bronze' || 'Platinum' "| " 'Diamond'
          durationInMonths: 1,
          amount: plan.price,
          discount: 0,
        })
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
