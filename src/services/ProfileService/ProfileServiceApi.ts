/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import TagTypes from "@/helpers/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import { revalidateTag } from "next/cache";

export const updateProfile = async (
  req = {
    body: FormData,
    params: {},
  }
) => {
  try {
    const res = await fetchWithAuth(`/users/update-my-profile`, {
      method: "PATCH",
      body: req.body as any,
    });
    const result = await res.json();
    revalidateTag(TagTypes.profile);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateCandidateProfile = async (
  req = {
    body: FormData,
    params: {},
  }
) => {
  try {
    const res = await fetchWithAuth(`/users/update-candidate-profile`, {
      method: "PATCH",
      body: req.body as any,
    });
    const result = await res.json();
    revalidateTag(TagTypes.profile);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
