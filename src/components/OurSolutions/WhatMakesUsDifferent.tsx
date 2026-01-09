import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../shared/SectionHeader";
import FeaturedCard, { IFeaturedCardData } from "../shared/Cards/FeaturedCard";
import { RiSparkling2Fill } from "react-icons/ri";
import { BsCurrencyPound, BsDatabase } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";

const cardData: IFeaturedCardData[] = [
  {
    id: 1,
    icon: (
      <div className="bg-gradient-to-br from-[#1C398E] to-[#1447E6] p-3 rounded-xl">
        <LuUsers className="text-white size-6" />
      </div>
    ),
    title: "Human-First Approach",
    description:
      "Every candidate is personally reviewed by our HR professionals. No automated matching—just quality human judgment.",
  },
  {
    id: 2,
    icon: (
      <div className="bg-gradient-to-br from-[#3D775B] to-[#00C566] p-3 rounded-xl">
        <BsDatabase className="text-white size-6" />
      </div>
    ),
    title: "Curated Talent Pool",
    description:
      "Our database is carefully maintained with only verified, skilled professionals who meet industry standards",
  },
  {
    id: 3,
    icon: (
      <div className="bg-gradient-to-br from-[#E17100] to-[#FE9A00] p-3 rounded-xl">
        <BsCurrencyPound className="text-white size-6" />
      </div>
    ),
    title: "Subscription Benefits",
    description:
      "Predictable costs, flexible terms, and the ability to scale without renegotiating contracts or surprise fees.",
  },
  {
    id: 4,
    icon: (
      <div className="bg-gradient-to-br from-[#8E2DE2] to-[#FF6A88] p-3 rounded-xl">
        <RiSparkling2Fill className="text-white size-6" />
      </div>
    ),
    title: " AI-Powered Insights",
    description:
      "Our AI technology enhances recruitment by analyzing data to suggest better matches and streamline the hiring process",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <div className="py-20 ">
      <Container>
        <SectionHeader
          title="What Makes Us Different"
          description="The Staff Secure Ltd advantage"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {cardData.map((card) => (
            <FeaturedCard
              className="items-center justify-center border-[#E1E1E1]"
              titleCalssName="text-base sm:text-lg lg:text-xl text-secondary-color"
              descriptionClassName="text-sm sm:text-base lg:text-lg text-base-color text-center"
              key={card.id}
              data={card}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhatMakesUsDifferent;
