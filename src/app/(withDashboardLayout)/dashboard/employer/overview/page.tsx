import OverviewCards from "@/components/Dashboard/Overview/OverviewCards";
import { getCurrentUser } from "@/services/AuthService";
import React from "react";

const page = async () => {
  const userData = await getCurrentUser();

  console.log(userData);
  return (
    <div className="">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-color mb-4">
          Hello {userData?.name},
        </h1>
        <p className="text-[#5D5D5D] text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
          Welcome back! Here&apos;s what&apos;s happening on your platform.
        </p>
      </div>
      <div className="mt-10">
        <OverviewCards />
      </div>
    </div>
  );
};

export default page;
