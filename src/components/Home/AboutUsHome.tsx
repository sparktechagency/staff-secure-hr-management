import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import ReuseButton from "../ui/Button/ReuseButton";
import { RiBox2Line } from "react-icons/ri";

const points = [
  "Fast, reliable placements — fully screened and reference-checked candidates.",
  "24/7 expert support — speak to real people whenever you need help.",
  "Flexible HR packages — designed for small, medium and large UK businesses.",
];

const AboutUsHome = () => {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-sm sm:text-base lg:text-lg font-bold mb-5">
            Human Expertise. AI Precision.
          </p>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[55px] tracking-wide leading-14 font-semibold text-secondary-color mb-8">
            Why Businesses Across the UK Trust Staff Secure Ltd
          </h3>

          <p className="text-base sm:text-lg lg:text-xl mb-3">
            For over 35 years, we’ve supported UK organizations by taking the
            pressure out of recruitment. Our experienced HR team and
            cutting-edge AI tools work hand-in-hand to shortlist only verified
            candidates — saving you time, cost and risk. From small businesses
            to national firms, we help employers hire confidently and
            compliantly. For <span className="font-bold">Full-time</span> and{" "}
            <span className="font-bold">Temporary placement</span>.
          </p>
          <ul className="list-item list-inside mt-10">
            {points.map((point, index) => (
              <li
                key={index}
                className=" text-sm sm:text-base lg:text-lg  mb-2 flex items-center gap-2"
              >
                <RiBox2Line />
                {point}
              </li>
            ))}
          </ul>
          <ReuseButton variant="secondary" className="mt-8 w-fit">
            Learn more
          </ReuseButton>
        </div>
        <div>
          <Image
            src={AllImages?.trust}
            alt="about-us"
            width={600}
            height={600}
            className="w-full h-auto max-w-[600px] max-h-[650px] object-cover rounded-[30%]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
