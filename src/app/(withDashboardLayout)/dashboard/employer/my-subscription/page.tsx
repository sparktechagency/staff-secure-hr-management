import { pricingPlans } from "@/components/Package/PackageSection";
import PricingCard, {
  IPricingPlan,
} from "@/components/shared/Cards/PricingCard";
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

  console.log(data);

  const packageData = data?.data || {};

  const mySubscription = pricingPlans?.find(
    (item) => item.name === packageData?.mySubscriptionsId?.type
  );

  console.log(mySubscription);
  return (
    <div className="">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-color mb-0">
        My Subscription
      </h1>
      <div className="w-fit max-w-[450px] mt-28">
        {mySubscription && (
          <PricingCard
            plan={mySubscription as IPricingPlan}
            myPackage={true}
            expired={packageData?.mySubscriptionsId?.expireDate}
            purchased={packageData?.mySubscriptionsId?.buyTime}
          />
        )}
      </div>
    </div>
  );
};

export default page;
