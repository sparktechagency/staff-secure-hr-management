/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const IndustriesWeServeCard = ({
  tier,
  index,
}: {
  tier: any;
  index: number;
}) => {
  return (
    <div key={index} className={``}>
      {/* Image Container - Blob Shape */}
      <Image
        src={tier.image}
        alt={tier.name}
        className="w-full h-96 rounded-[70px] object-cover"
        priority={index === 0}
      />

      {/* Content */}
      <div className="py-5 px-2">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-base-color mb-2">
          {tier.name}
        </h3>
        <p className="text-sm md:text-base lg:text-lg font-medium text-secondary-color mb-3">
          {tier.employees}
        </p>

        <ul className="space-y-2">
          {tier.features.map((feature: any, i: number) => (
            <li key={i} className="flex items-center">
              <span className="text-secondary-color mr-3">•</span>
              <span className="text-base-color text-xs sm:text-sm lg:text-base leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndustriesWeServeCard;
