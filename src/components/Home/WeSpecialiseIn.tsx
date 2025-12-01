import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import WeSpecialiseInCard from "../shared/Cards/WeSpecialiseInCard";
import SectionHeader from "../shared/SectionHeader";

const ourOfferingData = [
  {
    id: 1,
    images: AllImages.constructionSpe,
    title: "Construction",
    description: "Pre‑vetted trades and site staff, placed fast.",
  },
  {
    id: 2,
    images: AllImages.industrialSpe,
    title: "Industrial",
    description: "Reliable warehouse and manufacturing talent.",
  },
  {
    id: 3,
    images: AllImages.hospitalitySpe,
    title: "Hospitality",
    description: "Front‑of‑house to kitchen, ready for peaks.",
  },
  {
    id: 4,
    images: AllImages.healthcareSpe,
    title: "Healthcare",
    description: "Compliant, referenced support staff.",
  },
  {
    id: 5,
    images: AllImages.tourismSpe,
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
