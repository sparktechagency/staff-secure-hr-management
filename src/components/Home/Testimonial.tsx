import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { Rate } from "antd";

const testimonialData = [
  {
    id: 1,
    rate: 4.5,
    message: `"They found the perfect person for my construction role — hands down the best HR service I've used."`,
    userName: "- John Clark, MD",
  },
  {
    id: 2,
    rate: 4.0,
    message: `"They found the perfect person for my construction role — hands down the best HR service I've used."`,
    userName: "- John Clark, MD",
  },
  {
    id: 3,
    rate: 5,
    message: `"They found the perfect person for my construction role — hands down the best HR service I've used."`,
    userName: "- John Clark, MD",
  },
  {
    id: 4,
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
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {testimonialData.map((item) => (
          <div
            key={item.id}
            className="bg-[#F9FAFB] border border-[#E1E1E1] rounded-xl p-4"
          >
            <Rate value={item.rate} disabled className="text-[#364153]" />
            <p className="text-xs sm:text-sm lg:text-base text-[#364153] my-4">
              {item.message}
            </p>
            <p className="text-sm sm:text-base lg:text-lg font-bold text-[#162456]">
              {item.userName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
