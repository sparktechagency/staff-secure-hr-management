"use server";
import TagTypes from "@/helpers/TagTypes";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchWithAuth } from "@/lib/fetchWraper";
import { revalidateTag } from "next/cache";

export const addJobPost = async (req: { body: any; params: any }) => {
  try {
    console.log(req?.body);
    const res = await fetchWithAuth(`/job/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const result = await res.json();
    console.log(result);
    revalidateTag(TagTypes.job);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateJobPost = async (req: { body: any; params: any }) => {
  try {
    const res = await fetchWithAuth(`/job/update/${req.params}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const result = await res.json();
    revalidateTag(TagTypes.job);
    console.log(result);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const updateStatusJobPost = async (req: { body: any; params: any }) => {
  try {
    const res = await fetchWithAuth(`/job/update/status/${req.params}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const result = await res.json();
    revalidateTag(TagTypes.job);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteJobPost = async (req: { body: any; params: any }) => {
  try {
    const res = await fetchWithAuth(`/job/${req.params}`, {
      method: "DELETE",
    });
    const result = await res.json();
    revalidateTag(TagTypes.job);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const applyJobPost = async (req: { body: any; params: any }) => {
  try {
    const res = await fetchWithAuth(`/application/apply/${req.params}`, {
      method: "POST",
    });
    const result = await res.json();
    revalidateTag(TagTypes.job);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const selectCandidateByApplicationId = async (req: {
  body: any;
  params: any;
}) => {
  try {
    const res = await fetchWithAuth(
      `/application/select-candidate/${req.params}`,
      {
        method: "PATCH",
      }
    );
    const result = await res.json();
    revalidateTag(TagTypes.job);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const rejectCandidateByApplicationId = async (req: {
  body: any;
  params: any;
}) => {
  try {
    const res = await fetchWithAuth(
      `/application/reject-candidate/${req.params}`,
      {
        method: "PATCH",
      }
    );
    const result = await res.json();
    revalidateTag(TagTypes.job);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};
