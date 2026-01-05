import OverviewCards from "@/components/Dashboard/Overview/OverviewCards";
import PackageCardViewSection from "@/components/Dashboard/Overview/PackageCardViewSection";
import RecentNotification from "@/components/Dashboard/Overview/RecentNotification";
import TagTypes from "@/helpers/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import Link from "next/link";
import React from "react";

const page = async () => {

  const res = await fetchWithAuth(`/overview/employee`, {
    next: {
      tags: [
        TagTypes.conversation,
        TagTypes.job,
        TagTypes.package,
        TagTypes.profile,
      ],
      revalidate: 0,
    },
  });
  const resdata = await res.json();
  console.log(resdata);
  return (
    <div className="">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-color mb-4">
          Welcome back! Here&apos;s what&apos;s happening on your platform.
        </h1>
        {/* <p className="text-[#5D5D5D] text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
          Welcome back! Here&apos;s what&apos;s happening on your platform.
        </p> */}
      </div>
      <div className="mt-10">
        <OverviewCards data={resdata?.data} />
      </div>
      {resdata?.data?.mySubscription ? (
        <PackageCardViewSection
          mySubscription={resdata?.data?.mySubscription}
        />
      ) : <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl  p-8 sm:p-10 shadow-sm mt-10">
        <div className="">

          {/* Message */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            No Active Subscription
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to a package to unlock access to CVs and start hiring top talent for your requirements.
          </p>

          {/* Call to Action */}
          <div className="flex justify-end">
            <Link
              href="/packages"
              className=" !bg-secondary-color !text-white rounded-lg py-2 px-4 shadow-md hover:shadow-lg"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>}

      <div>
        <RecentNotification notificationData={resdata?.data?.notifications} />
      </div>
    </div>
  );
};

export default page;
