"use client";
import React from "react";
import { LuBriefcaseBusiness, LuUser } from "react-icons/lu";
import Link from "next/link";
import ReuseButton from "../ui/Button/ReuseButton";
import { AllImages } from "../../../public/assets/AllImages";
import Image from "next/image";

const joinOptions = [
  {
    id: "employer",
    title: "Join As a Employer",
    description: "Find and hire qualified candidates for your organisation.",
    icon: <LuBriefcaseBusiness className="text-3xl text-primary-color" />,
  },
  {
    id: "candidate",
    title: "Join As a Candidate",
    description: "Discover job opportunities that match your skills.",
    icon: <LuUser className="text-3xl text-primary-color" />,
  },
];

const JoinSecureStaff = () => {
  const [userType, setUserType] = React.useState<string | null>(null);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" flex flex-col items-center justify-center gap-3 h-full py-20">
        <Image
          src={AllImages.logo}
          width={500}
          height={500}
          className="w-64 mx-auto"
          alt="logo"
        />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary-color mt-7 mb-2">
          Join Staff Secure Ltd{" "}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-base-color">
          Choose how you want to use our platform
        </p>

        <div className="w-fit">
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 mt-5">
            {joinOptions?.map(({ id, title, description, icon }) => (
              <div
                key={id}
                onClick={() => setUserType(id)}
                className={`${userType === id
                    ? "border-2 border-secondary-color"
                    : "border-2 border-[#E1E1E1]"
                  } w-72 p-5 bg-primary-color  rounded-2xl cursor-pointer flex flex-col justify-center items-center text-center gap-3`}
              >
                <div className="w-fit p-2 bg-secondary-color rounded-full">
                  {icon}
                </div>
                <p className="text-sm sm:text-base lg:text-lg font-bold">
                  {title}
                </p>
                <p className="text-[10px] sm:text-xs lg:text-sm font-semibold text-[#6B7280]">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div
            className={`${!userType ? "hidden" : "flex"
              }  justify-end items-end w-full mt-5`}
          >
            <ReuseButton
              variant="secondary"
              className="!w-fit !text-[10px] sm:!text-xs lg:!text-sm !px-5 !py-2.5"
              url={
                userType === "employer" ? "/join/employer" : "/join/candidate"
              }
            >
              Continue
            </ReuseButton>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2.5 mt-10">
          <p>Already have an account?</p>
          <Link href="/sign-in" className="text-secondary-color font-bold">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinSecureStaff;
