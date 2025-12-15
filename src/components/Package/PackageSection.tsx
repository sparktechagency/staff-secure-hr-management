import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { FaRegCircleCheck } from "react-icons/fa6";
import PricingCard, { PricingPlan } from "../shared/Cards/PricingCard";
import { AllImages } from "../../../public/assets/AllImages";

const pricingPlans: PricingPlan[] = [
  {
    name: "Bronze",
    price: "£199",
    period: "month",
    description: "Ideal for small, one-time hires",
    icon: AllImages?.bronze,
    features: [
      { text: "3 pre-screened CVs per period", included: true },
      {
        text: "Guaranteed full vetting and interviewing for every CV sent",
        included: true,
      },
      { text: "Email support", included: true },
      { text: "Access to employer dashboard", included: true },
      { text: "Basic candidate filtering", included: true },
      { text: "Contract management tools", included: true },
      { text: "Free display on Staff Secure Ltd job board", included: true },
      { text: "AI Pay Rate Assistant", included: true },
      { text: "Priority support", included: false },
      { text: "Dedicated HR account manager", included: false },
      { text: "Discounted payroll services", included: false },
    ],
  },
  {
    name: "Platinum",
    price: "£599",
    period: "month",
    description: "Standard solution for growing teams",
    badge: "Most Popular",
    icon: AllImages?.platinum,
    popular: true,
    features: [
      { text: "10 pre-screened CVs per period", included: true },
      {
        text: "Guaranteed full vetting and interviewing for every CV sent",
        included: true,
      },

      { text: "Priority email & chat support", included: true },
      { text: "Access to employer dashboard", included: true },
      { text: "Advanced candidate filtering", included: true },
      { text: "Contract management tools", included: true },
      { text: "Priority support", included: true },
      { text: "Extended placement tracking", included: true },
      { text: "Free display on Staff Secure Ltd job board", included: true },
      { text: "AI Pay Rate Assistant", included: true },
      { text: "Discounted payroll services", included: true },
    ],
  },
  {
    name: "Diamond",
    price: "£1,199",
    period: "month",
    description: "Full access with dedicated HR support",
    icon: AllImages?.diamond,
    features: [
      { text: "Unlimited pre-screened CVs", included: true },
      {
        text: "Guaranteed full vetting and interviewing for every CV sent",
        included: true,
      },

      { text: "24/7 priority support", included: true },
      { text: "Access to employer dashboard", included: true },
      { text: "Advanced candidate filtering", included: true },
      { text: "Contract management tools", included: true },
      { text: "Dedicated HR account manager", included: true },
      { text: "Extended placement tracking", included: true },
      { text: "Free display on Staff Secure Ltd job board", included: true },
      { text: "AI Pay Rate Assistant", included: true },
      { text: "Discounted payroll services", included: true },
    ],
  },
];

const PackageSection = () => {
  return (
    <div className="py-20 mt-20">
      <SectionHeader
        title="Choose Your Package"
        description="Flexible subscription plans designed for businesses of all sizes. All packages include our 3-day free trial."
      />
      <div className="mt-10 flex items-center gap-2 bg-secondary-color text-primary-color py-2 px-4 rounded-full w-fit mx-auto">
        <FaRegCircleCheck className="size-5" />
        <span>3 days trial, Cancel anytime within 3 days</span>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-20 items-center">
        {pricingPlans.map((plan, i) => (
          <PricingCard key={i} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PackageSection;
