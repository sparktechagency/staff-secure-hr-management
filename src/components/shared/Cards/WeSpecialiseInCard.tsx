import React from "react";
import * as motion from "motion/react-client";
import Image, { StaticImageData } from "next/image";

const WeSpecialiseInCard = ({
  item,
}: {
  item: {
    id: number;
    images: string | StaticImageData;
    title: string;
    description: string;
  };
}) => {
  return (
    <motion.div
      //   initial={{
      //     scale: 0.8,
      //     opacity: 0,
      //   }}
      //   whileInView={{ scale: 1, opacity: 1 }}
      //   viewport={{ once: false }} // animate when 30% visible
      //   transition={{ duration: 1, ease: "easeOut" }}
      //   key={item.id}
      className="w-full sm:w-auto md:w-full h-full sm:h-[400px] mx-auto md:h-full relative max-h-[400px] max-w-[400px]"
    >
      <div>
        <Image
          alt="our-offering1"
          src={item.images}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full sm:w-auto md:w-full h-full sm:h-[400px] mx-auto md:h-full max-h-[400px] max-w-[400px] aspect-square rounded-[40%] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 rounded-[40%] "></div>
      </div>
      <div className="absolute inset-0 h-full flex flex-col justify-center items-center gap-2 p-[5%]">
        <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold  tracking-wider text-primary-color">
          {item.title}
        </div>
        <div className="text-center text-white text-sm sm:text-base lg:text-lg xl:text-xl">
          {item.description}
        </div>
      </div>
    </motion.div>
  );
};

export default WeSpecialiseInCard;
