import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import WeSpecialiseInCard from "./WeSpecialiseInCard";
import SectionHeader from "../shared/SectionHeader";

const ourOfferingData = [
  {
    id: 1,
    images: AllImages.trust,
    title: "Construction",
    description: "Pre‑vetted trades and site staff, placed fast.",
  },
  {
    id: 2,
    images: AllImages.trust,
    title: "Industrial",
    description: "Reliable warehouse and manufacturing talent.",
  },
  {
    id: 3,
    images: AllImages.trust,
    title: "Hospitality",
    description: "Front‑of‑house to kitchen, ready for peaks.",
  },
  {
    id: 4,
    images: AllImages.trust,
    title: "Healthcare",
    description: "Compliant, referenced support staff.",
  },
  {
    id: 5,
    images: AllImages.trust,
    title: "Tourism",
    description: "Seasonal and event staffing, on demand.",
  },
];

const WeSpecialiseIn = () => {
  return (
    <div className="py-20">
      <SectionHeader
        title="The sectors we specialise in"
        description="All UK regions covered with industry‑specific screening and references"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {ourOfferingData.map((item) => (
          <WeSpecialiseInCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WeSpecialiseIn;
