import AboutBanner from "@/components/About/AboutBanner";
import Container from "@/components/ui/Container";
import React from "react";
import { AllImages } from "../../../../public/assets/AllImages";
import SectionGridCard, {
  ICardData,
} from "@/components/shared/Cards/SectionGridCard";
import OurTeam from "@/components/About/OurTeam";

const cardsData: ICardData[] = [
  {
    id: 1,
    isFeatured: true,
    isReverse: false,
    subtitle: "Our Mission",
    title: "Empowering UK Businesses",
    description:
      "We cater to both small and large UK businesses, helping you operate more efficiently by combining the power of AI-driven technology with human  expertise. Over the past three years, we've developed cutting-edge HR  technology that simplifies every step of the hiring process—from  candidate screening to placement.",
    featuredText: [
      "AI-driven candidate screening and matching",
      "Simplified hiring process from start to finish",
      "Full-time and temporary placement solutions",
    ],
    image: AllImages?.ourMission,
  },
  {
    id: 2,
    isFeatured: false,
    isReverse: true,
    subtitle: "Our Expertise",
    title: "Precision, Reliability, Peace of Mind",
    description:
      "With a team boasting over 200 years of combined experience in  recruitment, interviewing, and employment management, Staff Secure Ltd  delivers precision, reliability, and peace of mind. We take pride in  helping you find the right candidate for your project—whether it's a  full-time or temporary placement.",
    subDescription:
      "Our mission starts with supporting business owners to operate with less  anxiety and greater productivity. Driven by AI technology and  strengthened by our expert team, we empower both employers and employees to reach their full potential.",
    image: AllImages?.ourExperience,
  },
];

const page = () => {
  return (
    <div>
      <Container>
        <AboutBanner />
        {cardsData.map((cardData) => (
          <SectionGridCard key={cardData.id} cardData={cardData} />
        ))}
        <OurTeam />
      </Container>
    </div>
  );
};

export default page;
