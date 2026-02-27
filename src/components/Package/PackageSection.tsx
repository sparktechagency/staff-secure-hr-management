"use client";
import React from "react";
import SectionHeader from "../shared/SectionHeader";
// import { FaRegCircleCheck } from "react-icons/fa6";
import PricingCard, { IPricingPlan } from "../shared/Cards/PricingCard";
import { AllImages } from "../../../public/assets/AllImages";
import { useRouter } from "next/navigation";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { purchasePackage } from "@/services/PackageService/PackageServiceApi";
import ViewSubscriptionAgreeModal from "../shared/Modal/ViewSubscriptionAgreeModal";

export const pricingPlans: IPricingPlan[] = [
  {
    name: "Bronze",
    price: 199,
    period: "month",
    description: "Ideal for small, one-time hires",
    icon: AllImages?.bronze,
    features: [
      { text: "3 pre-screened CVs per month", included: true },
      {
        text: "Guaranteed full vetting and interviewing for every Candidate sent",
        included: true,
      },
      { text: "Email support", included: true },
      { text: "Access to employer dashboard", included: true },
      { text: "Basic candidate filtering", included: true },
      { text: "Contract management tools", included: true },
      { text: "Free display on Staff Secure Ltd Job board", included: true },
      { text: "AI Pay Rate Assistant", included: true },
      { text: "12-month contract", included: true },
      { text: "Priority support", included: false },
      { text: "Dedicated HR account manager", included: false },
      { text: "Discounted payroll services", included: false },
    ],
  },
  {
    name: "Platinum",
    price: 599,
    period: "month",
    description: "Standard solution for growing teams",
    badge: "Most Popular",
    icon: AllImages?.platinum,
    popular: true,
    features: [
      { text: "10 pre-screened CVs per month", included: true },
      {
        text: "Guaranteed full vetting and interviewing for every Candidate sent",
        included: true,
      },

      { text: "Priority email & chat support", included: true },
      { text: "Access to employer dashboard", included: true },
      { text: "Advanced candidate filtering", included: true },
      { text: "Contract management tools", included: true },
      { text: "Priority support", included: true },
      { text: "Extended placement tracking", included: true },
      { text: "Free display on Staff Secure Ltd Job board", included: true },
      { text: "AI Pay Rate Assistant", included: true },
      { text: "Discounted payroll services", included: true },
      { text: "12-month contract", included: true },
    ],
  },
  {
    name: "Diamond",
    price: 1199,
    period: "month",
    description: "Full access with dedicated HR support",
    icon: AllImages?.diamond,
    features: [
      { text: "Unlimited pre-screened CVs", included: true },
      {
        text: "Guaranteed full vetting and interviewing for every Candidate sent",
        included: true,
      },

      { text: "24/7 priority support", included: true },
      { text: "Access to employer dashboard", included: true },
      { text: "Advanced candidate filtering", included: true },
      { text: "Contract management tools", included: true },
      { text: "Dedicated HR account manager", included: true },
      { text: "Extended placement tracking", included: true },
      { text: "Free display on Staff Secure Ltd Job board", included: true },
      { text: "AI Pay Rate Assistant", included: true },
      { text: "Discounted payroll services", included: true },
      { text: "12-month contract", included: true },
    ],
  },
];

const PackageSection = () => {
  const router = useRouter();
  const [isAggreedModalOpen, setIsAggreedModalOpen] = React.useState(false);
  const [currentRecord, setCurrentRecord] = React.useState<IPricingPlan | null>(null);

  const handleAggreedModalOpen = (record: IPricingPlan) => {
    setCurrentRecord(record);
    setIsAggreedModalOpen(true);
  }

  const handleAggreedModalClose = () => {
    setCurrentRecord(null);
    setIsAggreedModalOpen(false);
  }


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
      handleAggreedModalClose();
      router.push(res?.data?.url);
    }
  };

  return (
    <div className="py-20 mt-20">
      <SectionHeader
        title="Choose Your Package"
        description="Flexible subscription plans designed for businesses of all sizes. All packages include our 3-day free trial."
      />
      {/* <div className="mt-10 flex items-center gap-2 bg-secondary-color text-primary-color py-2 px-4 rounded-full w-fit mx-auto">
        <FaRegCircleCheck className="size-5" />
        <span>3 days trial, Cancel anytime within 3 days</span>
      </div> */}

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-20 items-center">
        {pricingPlans.map((plan, i) => (
          <PricingCard key={i} plan={plan} openModal={handleAggreedModalOpen} />
        ))}
      </div>
      <ViewSubscriptionAgreeModal
        isModalOpen={isAggreedModalOpen}
        handleCancel={handleAggreedModalClose}
        currentRecord={currentRecord!}
        handleSubmit={handleSubmit} />
    </div>
  );
};

export default PackageSection;
