import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import SectionGridCard from "../shared/Cards/SectionGridCard";

const cardsData = {
  id: 1,
  isFeatured: true,
  isReverse: false,
  subtitle: "Human Expertise. AI Precision.",
  title: "Why Businesses Across the UK Trust Staff Secure Ltd",
  description:
    "For over 35 years, we’ve supported UK organizations by taking the pressure out of recruitment. Our experienced HR team and cutting-edge AI tools work hand-in-hand to shortlist only verified candidates — saving you time, cost and risk. From small businesses to national firms, we help employers hire confidently and compliantly. For Full-time and Temporary placement.",

  featuredText: [
    "Fast, reliable placements — fully screened and reference-checked candidates.",
    "24/7 expert support — speak to real people whenever you need help.",
    "Flexible HR packages — designed for small, medium and large UK businesses.",
  ],

  buttonText: "Learn more",
  url: "/who-we-help",
  image: AllImages?.trust,
};

const AboutUsHome = () => {
  return (
    <div className="py-20">
      <SectionGridCard cardData={cardsData} />
    </div>
  );
};

export default AboutUsHome;
