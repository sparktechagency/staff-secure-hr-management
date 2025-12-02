import React from "react";
import SectionHeader from "../shared/SectionHeader";
import FeaturedDetailCard, {
  FeaturedDetailCardData,
} from "../shared/Cards/FeaturedDetailCard";
const data: FeaturedDetailCardData[] = [
  {
    variant: "dark",
    title: "Seasonal Staffing",
    description:
      "Prepare for busy seasons with our flexible hiring solutions. Whether it's holiday retail rushes, summer hospitality peaks, or year-end manufacturing demands, we help you scale your workforce quickly.",
  },
  {
    variant: "dark",
    title: "Project-Based Teams",
    description:
      "Building a team for a specific project? Our subscription model allows you to hire skilled contractors for the duration of your project without long-term commitments beyond your chosen contract term.",
  },
  {
    variant: "dark",
    title: "Rapid Expansion",
    description:
      "Growing fast? Our Diamond package provides unlimited CVs, allowing you to build your team as quickly as your business demands without worrying about per-hire costs.",
  },
  {
    variant: "dark",
    title: "Specialized Skill Gaps",
    description:
      "Need specific expertise? Our HR team can target candidates with specialized skills and certifications, ensuring you get professionals who can hit the ground running.",
  },
];

const CommonUseCase = () => {
  return (
    <div className="py-20 ">
      <SectionHeader title="Common Use Cases" />
      <div className="mt-10 space-y-5">
        {data.map((item, index) => (
          <FeaturedDetailCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CommonUseCase;
