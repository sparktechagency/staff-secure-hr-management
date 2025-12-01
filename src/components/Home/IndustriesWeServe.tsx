import React from "react";
import SectionHeader from "../shared/SectionHeader";
import IndustriesWeServeCard from "../shared/Cards/IndustriesWeServeCard";
import { AllImages } from "../../../public/assets/AllImages";

const IndustriesWeServe = () => {
  const tiers = [
    {
      name: "Small Business",
      employees: "1-10 Employees",
      image: AllImages.smallBusiness, // replace with your actual images
      features: [
        "Perfect cost-effective package",
        "Free up your time",
        "Includes Free Ads",
      ],
      bgColor: "bg-white",
    },
    {
      name: "Medium Business",
      employees: "10-50 Employees",
      image: AllImages.mediumBusiness,
      features: [
        "24/7 Live Chat",
        "Comprehensive vetting",
        "Discounted payroll service",
        "Includes Free Ads",
      ],
      bgColor: "bg-emerald-50",
    },
    {
      name: "Large Business",
      employees: "50+ Employees",
      image: AllImages.largeBusiness,
      features: [
        "24/7 Live Chat",
        "Direct HR Director",
        "Unlimited placements",
        "Employment advice",
        "Includes Free Ads",
      ],
      bgColor: "bg-white",
    },
  ];
  return (
    <div className="py-20">
      <SectionHeader title="Industries we serve" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <IndustriesWeServeCard key={index} tier={tier} index={index} />
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
