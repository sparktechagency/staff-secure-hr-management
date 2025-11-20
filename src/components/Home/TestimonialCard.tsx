import { Rate } from "antd";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-[#F9FAFB] p-4 rounded-xl">
      <Rate value={5} disabled />
      <p className="text-sm sm:text-base lg:text-lg my-4">{`"They found the perfect person for my construction role — hands down the best HR service I've used."`}</p>
      <p className="text-sm sm:text-base lg:text-lg font-bold">
         - John Clark, MD
      </p>
    </div>
  );
};

export default TestimonialCard;
