"use client";
import React from 'react';
import Cookie from "js-cookie";
import ShowPackagePurchaseModal from '../shared/Modal/ShowPackagePurchaseModal';
import { useGetUserData } from '@/context/useGetUserData';


const PopUpPage = () => {
    const userData = useGetUserData();
    const [showPopup, setShowPopup] = React.useState(false);
    const subscribedEmail = Cookie.get("staffSecureEmployerIsSubscribedEmail");
    const isSubscribed = Cookie.get("staffSecureEmployerIsSubscribed");

    React.useEffect(() => {
        if (isSubscribed === "false" && userData?.role === "employer" && subscribedEmail === userData?.email) {
            setShowPopup(true);
        }
    }, []);

    console.log(showPopup)

    const handleCancel = () => {
        setShowPopup(false);
        Cookie.remove("staffSecureEmployerIsSubscribed");
    };

    return (
        <div>
            <ShowPackagePurchaseModal isShowPackagePurchaseModalVisible={showPopup} handleCancel={handleCancel} />
        </div>
    );
};

export default PopUpPage;