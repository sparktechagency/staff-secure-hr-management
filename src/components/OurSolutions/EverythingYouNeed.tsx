import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../shared/SectionHeader";
import FeaturedCard, { IFeaturedCardData } from "../shared/Cards/FeaturedCard";
import { FiMessageSquare } from "react-icons/fi";
import { BsCurrencyPound } from "react-icons/bs";
import { LuShield } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiSparkling2Fill } from "react-icons/ri";

const cardData: IFeaturedCardData[] = [
  {
    id: 1,
    icon: (
      <div className="bg-gradient-to-b from-[#2B7FFF] to-[#155DFC] p-3 rounded-xl">
        <FiMessageSquare className="text-white size-6" />
      </div>
    ),
    title: "Streamlined Communication",
    description: "Direct line to HR administrators for quick responses",
  },
  {
    id: 2,
    icon: (
      <div className="bg-gradient-to-b from-[#FE9A00] to-[#E17100] p-3 rounded-xl">
        <BsCurrencyPound className="text-white size-6" />
      </div>
    ),
    title: "Transparent Pricing",
    description: "Clear pricing with no hidden fees or surprises",
  },
  {
    id: 3,
    icon: (
      <div className="bg-gradient-to-b from-[#00BC7D] to-[#009966] p-3 rounded-xl">
        <LuShield className="text-white size-6" />
      </div>
    ),
    title: "Secure & Compliant",
    description: "Enterprise-grade security for all candidate data",
  },
  {
    id: 4,
    icon: (
      <div className="bg-gradient-to-b from-[#AD46FF] to-[#9810FA] p-3 rounded-xl">
        <IoDocumentTextOutline className="text-white size-6" />
      </div>
    ),
    title: "Full Support",
    description: "Assistance from hire to contract completion",
  },
  {
    id: 5,
    icon: (
      <div className="bg-gradient-to-b from-[#FACC15] to-[#FBBF24] p-3 rounded-xl">
        <RiSparkling2Fill className="text-white size-6" />
      </div>
    ),
    title: "AI That Understands People",
    description: "Empowering people with intelligent technology",
  },
];

const EverythingYouNeed = () => {
  return (
    <div className="py-20 bg-[#0c3188]">
      <Container>
        <SectionHeader
          titleClassName="text-white"
          descriptionClassName="text-white font-normal"
          title="Everything You Need"
          description="Comprehensive features for efficient workforce management"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {cardData.map((card) => (
            <FeaturedCard
              key={card.id}
              data={card}
              className="items-start justify-start"
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default EverythingYouNeed;
