import CreateProject from "@/components/Dashboard/CreateProject/CreateProject";
import TagTypes from "@/helpers/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { IProfile } from "@/types/profile.type";
import React from "react";

const page = async () => {
    const res = await fetchWithAuth("/users/my-profile", {
        next: {
            tags: [TagTypes.profile],
        },
    });

    const data = await res.json();
    const myData: IProfile = data?.data;
    console.log(myData)
    return (
        <div>
            <CreateProject myData={myData} />
        </div>
    );
};

export default page;
