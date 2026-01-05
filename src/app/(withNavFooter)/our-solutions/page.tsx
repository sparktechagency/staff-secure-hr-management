import HowItWork from "@/components/OurSolutions/HowItWork";
import OurSolutionsBanner from "@/components/OurSolutions/OurSolutionsBanner";
import SectionGridCard from "@/components/shared/Cards/SectionGridCard";
import Container from "@/components/ui/Container";
import React from "react";
import { AllImages } from "../../../../public/assets/AllImages";
import EverythingYouNeed from "@/components/OurSolutions/EverythingYouNeed";
import WhatMakesUsDifferent from "@/components/OurSolutions/WhatMakesUsDifferent";

const cardsData = [
  {
    id: 1,
    isFeatured: true,
    isReverse: false,
    subtitle: "Expert Screening",
    title: "Admin-Managed Recruitment",
    description:
      "Our experienced HR administrators handle the entire recruitment process, from sourcing candidates to initial screening. You receive only pre-qualified CVs that match your requirements.",
    featuredWithDescription: [
      {
        title: "Professional HR Screening",
        description: "Every candidate reviewed by experienced HR professionals",
      },
      {
        title: "Quality Over Quantity",
        description: "Only relevant, qualified matches delivered to you",
      },
      {
        title: "Save Valuable Time",
        description: "No more sorting through unqualified applications",
      },
    ],
    image: AllImages?.expertScreening,
  },
  {
    id: 2,
    isFeatured: true,
    isReverse: true,
    subtitle: "Verified Talent",
    title: "Pre-Vetted Database",
    description:
      "Access our extensive database of pre-vetted professionals across multiple industries. All workers are verified and background-checked before being added to our system.",
    featuredWithDescription: [
      {
        title: "Comprehensive Verification",
        description: "Background checks and reference validation",
      },
      {
        title: "Skills & Certifications",
        description: "Verified qualifications and industry certifications",
      },
      {
        title: "Continuously Updated",
        description: "Regular database updates with fresh talent",
      },
    ],
    image: AllImages?.verifiedTalent,
  },
  {
    id: 3,
    isFeatured: true,
    isReverse: false,
    subtitle: "All-in-One Platform",
    title: "Intuitive Dashboard",
    description:
      "Manage all your hiring activities from one intuitive dashboard. Submit requirements, review CVs, track placements, and communicate with our HR team seamlessly.",
    featuredWithDescription: [
      {
        title: "Real-Time Updates",
        description: "Instant notifications on application status",
      },
      {
        title: "Organized Workflow",
        description: "Smart CV sorting and candidate management",
      },
      {
        title: "Direct Messaging",
        description: "Only Available For Platinum and Diamond Packages .",
      },
    ],
    image: AllImages?.allinOnePlatform,
    imageRadus: 0,
  },
  {
    id: 4,
    isFeatured: true,
    isReverse: true,
    subtitle: "AI Candidate Matching",
    title: "Smart Candidate Matches",
    description:
      "Use advanced AI to instantly match Project Requirementss with the most suitable candidates. Our intelligent system analyses skills, experience, and preferences to ensure every recommendation fits your needs precisely.",
    featuredWithDescription: [
      {
        title: "Intelligent Screening",
        description:
          "AI reviews profiles to deliver accurate, data-driven matches.",
      },
      {
        title: "Bias-Free Selection",
        description:
          "Ensures every candidate is assessed fairly and consistently.",
      },
      {
        title: "Faster Hiring",
        description: "Reduce screening time with automated shortlisting.",
      },
    ],
    image: AllImages?.AICandidateMatching,
  },
];

const page = () => {
  return (
    <div>
      <Container>
        <OurSolutionsBanner />
      </Container>
      <HowItWork />
      <Container>
        {cardsData.map((cardData) => (
          <SectionGridCard key={cardData.id} cardData={cardData} />
        ))}
      </Container>
      <EverythingYouNeed />
      <WhatMakesUsDifferent />
    </div>
  );
};

export default page;
