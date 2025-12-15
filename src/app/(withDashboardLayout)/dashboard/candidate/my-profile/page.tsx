import MyProfile from "@/components/Dashboard/CandidatePages/MyProfile";
import TagTypes from "@/helpers/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { ICandidateProfile } from "@/types/profile.type";
import React from "react";

const page = async () => {
  const res = await fetchWithAuth(`/users/candidate/my-profile`, {
    next: {
      tags: [TagTypes.profile],
    },
  });

  const data = await res.json();

  console.log(data);

  const myProfile: ICandidateProfile = data?.data || [];
  console.log(myProfile);
  return (
    <div>
      <MyProfile myProfileData={myProfile} />
    </div>
  );
};

export default page;
