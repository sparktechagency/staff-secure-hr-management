import React from "react";
import SectionHeader from "../shared/SectionHeader";
import Container from "../ui/Container";

const items = [
  {
    id: "01",
    title: "Submit Your Requirements",
    description:
      "Tell us about the roles you need to fill and your ideal candidate profile",
  },
  {
    id: "02",
    title: "We Screen & Match",
    description:
      "Our HR team reviews applications and selects the best candidates",
  },
  {
    id: "02",
    title: "Receive Qualified CVs",
    description:
      "Get pre-vetted candidates delivered directly to your dashboard",
  },
  {
    id: "04",
    title: "Hire with Confidence",
    description:
      "Interview and hire knowing every candidate has been thoroughly checked",
  },
];

const HowItWork = () => {
  return (
    <div className="py-20 bg-[#F9FAFB]">
      <Container>
        <SectionHeader
          title="How It Works"
          description="Our streamlined process gets you quality candidates faster"
        />{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-primary-color border border-[#E1E1E1] rounded-xl p-6"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C3188] mb-5">
                {item.id}
              </p>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#162456] mb-4">
                {item.title}
              </h4>
              <p className="text-base sm:text-lg lg:text-xl text-[#505050]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>{" "}
    </div>
  );
};

export default HowItWork;
