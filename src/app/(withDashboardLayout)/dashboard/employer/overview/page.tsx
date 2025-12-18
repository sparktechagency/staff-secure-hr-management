import OverviewCards from "@/components/Dashboard/Overview/OverviewCards";
import PackageCardViewSection from "@/components/Dashboard/Overview/PackageCardViewSection";
import RecentNotification from "@/components/Dashboard/Overview/RecentNotification";
import TagTypes from "@/helpers/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { getCurrentUser } from "@/services/AuthService";
import React from "react";

const page = async () => {
  const userData = await getCurrentUser();

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
          Hello {userData?.name},
        </h1>
        <p className="text-[#5D5D5D] text-sm sm:text-base lg:text-lg xl:text-xl font-semibold">
          Welcome back! Here&apos;s what&apos;s happening on your platform.
        </p>
      </div>
      <div className="mt-10">
        <OverviewCards data={resdata?.data} />
      </div>
      {resdata?.data?.mySubscription && (
        <PackageCardViewSection
          mySubscription={resdata?.data?.mySubscription}
        />
      )}

      <div>
        <RecentNotification notificationData={resdata?.data?.notifications} />
      </div>
    </div>
  );
};

export default page;
