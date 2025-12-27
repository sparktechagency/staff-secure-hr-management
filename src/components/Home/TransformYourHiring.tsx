import React from "react";
import ReuseButton from "../ui/Button/ReuseButton";

const TransformYourHiring = () => {
  return (
    <div className="pt-20 pb-28 text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-secondary-color font-bold mb-8">
        Ready to transform your hiring?
      </h1>
      <p className="text-sm sm:text-base lg:text-lg xl:text-xl mt-5 text-[#505050]">
        Chat directly with one of our HR experts to discuss your recruitment
        needs and <br /> find the perfect package for your business.
      </p>

      <ReuseButton
        url="contact"
        variant="secondary"
        className="mt-16 w-fit !rounded-lg"
      >
        Contact Us
      </ReuseButton>
    </div>
  );
};

export default TransformYourHiring;
