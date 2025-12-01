import React from "react";
import OurTeamCard, { ITeam } from "../shared/Cards/OurTeamCard";
import { AllImages } from "../../../public/assets/AllImages";

export const teamMembers: ITeam[] = [
  {
    id: 1,
    name: "Michael Kemp",
    designation: "CV Review & Quality Control",
    description:
      "Mike ensures every CV meets our standards for quality and accuracy. His sharp eye for detail guarantees that only the most suitable profiles progress through our placement process.",
    image: AllImages.michaelKemp, // or use string URL: 'https://yourdomain.com/michael.jpg'
    linkedin: "https://linkedin.com/in/michaelkemp",
    twitter: "https://x.com/michaelkemp",
  },
  {
    id: 2,
    name: "Paula Jones",
    designation: "Recruitment & Candidate Placement",
    description:
      "Paula oversees applicant interviews and candidate assessments to ensure each individual is perfectly matched to the right opportunity. Her expertise bridges the gap between talent and the ideal workplace.",
    image: AllImages.paulaJones,
    linkedin: "https://linkedin.com/in/paulajones",
    twitter: "https://x.com/paulajones",
  },
  {
    id: 3,
    name: "Ted Moratto",
    designation: "Head of Technology & AI Development",
    description:
      "Ted drives innovation by developing cutting-edge AI employment tools that streamline recruitment and empower smarter HR decisions. His leadership keeps our platform ahead of industry trends.",
    image: AllImages.tedMoratto,
    linkedin: "https://linkedin.com/in/tedmoratto",
    twitter: "https://x.com/tedmoratto",
  },
  {
    id: 4,
    name: "Patrick Fraser",
    designation: "Line Manager & HR Operations",
    description:
      "Patrick coordinates across all teams and HR Management Managers, ensuring seamless collaboration and consistent delivery of exceptional client service. His focus is on efficiency, reliability, and results.",
    image: AllImages.patrickFraser,
    linkedin: "https://linkedin.com/in/patrickfraser",
    twitter: "https://x.com/patrickfraser",
  },
];

const OurTeam = () => {
  return (
    <div className="py-20">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-secondary-color font-bold mb-5">
        People Behind the Progress
      </h1>
      <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl text-base-color font-semibold mb-3">
        Our dedicated professionals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        {teamMembers.map((member) => (
          <OurTeamCard key={member.id} team={member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
