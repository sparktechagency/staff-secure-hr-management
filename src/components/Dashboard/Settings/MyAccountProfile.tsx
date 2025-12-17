"use client";

import ReusableTabs from "@/components/ui/ReusableTabs";
import React from "react";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import { IProfile } from "@/types/profile.type";

const MyAccountProfile = ({
  activeTab,
  myData,
}: {
  activeTab: "profile" | "changePassword";
  myData: IProfile;
}) => {
  console.log(myData);

  return (
    <div>
      <div className="">
        <ReusableTabs
          activeTab={activeTab}
          align="left"
          tabs={[
            {
              label: "Edit Profile",
              value: "profile",
              content: <EditProfile myData={myData} />,
            },
            {
              label: "Change Password",
              value: "changePassword",
              content: <ChangePassword />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MyAccountProfile;
