import React from "react";
import SectionHeader from "../shared/SectionHeader";

const testimonialData = [
  {
    id: 1,
    rate: 5,
    message: `"They found the perfect person for my construction role — hands down the best HR service I've used."`,
    userName: "- John Clark, MD",
  },
];

const Testimonial = () => {
  return (
    <div className="py-20">
      <SectionHeader title="Trusted by leading companies" />
      <div>
        <video
          controls
          src="/assets/video/Staff-Secure-Correct-testimonial.mp4"
          className="w-full h-auto rounded max-h-[600px]"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Testimonial;
