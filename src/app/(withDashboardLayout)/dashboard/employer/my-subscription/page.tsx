import MySubspriptionPage from "@/components/Dashboard/MySubscription/MySubspriptionPage";
import TagTypes from "@/helpers/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import React from "react";

const page = async () => {
  const res = await fetchWithAuth(`/subscription/my`, {
    next: {
      tags: [TagTypes.package],
    },
  });

  const data = await res.json();


  const packageData = data?.data || {};

  console.log(packageData)


  return (
    <div className="">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-color mb-0">
        My Subscription
      </h1>
      <MySubspriptionPage packageData={packageData} />
    </div>
  );
};

export default page;
