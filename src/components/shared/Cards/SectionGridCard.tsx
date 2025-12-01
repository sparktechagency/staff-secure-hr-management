import Image, { StaticImageData } from "next/image";
import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RiBox2Line } from "react-icons/ri";
import ReuseButton from "@/components/ui/Button/ReuseButton";

interface IFeaturedItem {
  title: string;
  description: string;
}

export interface ICardData {
  id: number;
  isFeatured: boolean;
  isReverse: boolean;
  subtitle: string;
  title: string;
  description: string;
  featuredWithDescription?: IFeaturedItem[];
  featuredText?: string[];
  subDescription?: string;
  buttonText?: string;
  url?: string;
  image: string | StaticImageData;
}

const SectionGridCard = ({ cardData }: { cardData: ICardData }) => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div
            className={`${
              cardData.isReverse ? "order-2 lg:order-2" : "order-2 lg:order-1"
            }`}
          >
            <p className="text-secondary-color font-semibold text-xs md:text-sm lg:text-base uppercase tracking-wider mb-3">
              {cardData.subtitle}
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-secondary-color font-bold mb-4 leading-16">
              {cardData.title}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg  text-base-color leading-relaxed mb-10">
              {cardData.description}
            </p>
            {cardData.isFeatured ? (
              cardData?.featuredWithDescription ? (
                <div className="space-y-6">
                  {cardData?.featuredWithDescription?.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-[#DCFCE7] p-2 rounded-xl mt-1">
                        <IoCheckmarkCircleOutline className="text-success size-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-base-color text-sm sm:text-base lg:text-lg mb-1">
                          {feature.title}
                        </p>
                        <p className=" text-[#505050] text-xs sm:text-sm lg:text-base mb-2">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="list-item list-inside mt-10">
                  {cardData?.featuredText?.map((feature, index) => (
                    <li
                      key={index}
                      className=" text-sm sm:text-base lg:text-lg  mb-2 flex items-center gap-2"
                    >
                      <RiBox2Line />
                      {feature}
                    </li>
                  ))}
                </ul>
              )
            ) : null}
            {cardData?.subDescription && (
              <p className="text-sm sm:text-base lg:text-lg  text-base-color leading-relaxed mb-10">
                {cardData?.subDescription}
              </p>
            )}

            {cardData?.buttonText && (
              <ReuseButton
                url={cardData?.url}
                variant="secondary"
                className="mt-8 w-fit"
              >
                {cardData?.buttonText}
              </ReuseButton>
            )}
          </div>

          {/* Right Side - Image */}
          <div
            className={`${
              cardData.isReverse ? "order-1 lg:order-1" : "order-1 lg:order-2"
            }`}
          >
            <Image
              src={cardData.image}
              alt="about-us"
              width={600}
              height={600}
              className="w-full h-auto  max-h-[650px] object-cover rounded-[100px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionGridCard;
