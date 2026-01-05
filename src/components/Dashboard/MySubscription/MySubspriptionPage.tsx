/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { pricingPlans } from '@/components/Package/PackageSection';
import PricingCard, { IPricingPlan } from '@/components/shared/Cards/PricingCard';
import ShowAutoRenewCancleModal from '@/components/shared/Modal/ShowAutoRenewCancleModal';
import React from 'react';

const MySubspriptionPage = ({ packageData }: { packageData: any }) => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);


    console.log(packageData)

    const mySubscription = pricingPlans?.find(
        (item) => item.name === packageData?.mySubscriptionsId?.type
    );
    return (
        <div className="w-fit max-w-[450px] mt-28">
            {mySubscription && (
                <PricingCard
                    plan={mySubscription as IPricingPlan}
                    myPackage={true}
                    autoRenewal={packageData?.mySubscriptionsId?.autoRenewal}
                    expired={packageData?.mySubscriptionsId?.expireDate}
                    purchased={packageData?.mySubscriptionsId?.buyTime}
                    openCancelModal={() => setIsModalOpen(true)}
                />
            )}
            <ShowAutoRenewCancleModal isModalOpen={isModalOpen} handleCancel={() => setIsModalOpen(false)} />
        </div>
    );
};

export default MySubspriptionPage;