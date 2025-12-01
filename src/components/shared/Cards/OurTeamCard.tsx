import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export interface ITeam {
  id: number;
  name: string;
  designation: string;
  description: string;
  image: StaticImageData | string;
  linkedin: string;
  twitter: string;
}
const OurTeamCard = ({ team }: { team: ITeam }) => {
  return (
    <div key={team?.id} className={``}>
      {/* Image Container - Blob Shape */}
      <Image
        src={team.image}
        alt={team.name}
        className="w-full h-80 rounded-3xl object-cover object-top"
      />

      {/* Content */}
      <div className="py-5 px-2">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-base-color mb-2">
          {team.name}
        </h3>
        <h3 className="text-sm md:text-base lg:text-lg font-bold text-base-color mb-5">
          {team.designation}
        </h3>
        <p className="text-xs md:text-sm lg:text-base text-base-color mb-3">
          {team.description}
        </p>
        <div className="flex items-center gap-3">
          <Link href={team.linkedin}>
            <FaLinkedin className="size-5 text-[#0077B5]" />
          </Link>
          <Link href={team.twitter}>
            <FaXTwitter className="size-5 text-[#000000]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
