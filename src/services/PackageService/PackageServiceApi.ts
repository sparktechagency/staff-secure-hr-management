"use server";
import TagTypes from "@/helpers/TagTypes";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchWithAuth } from "@/lib/fetchWraper";
import { revalidateTag } from "next/cache";

export const purchasePackage = async (req: { body: any; params: any }) => {
  try {
    console.log(req?.body);
    const res = await fetchWithAuth(`/payment/create-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const result = await res.json();
    console.log(result);
    revalidateTag(TagTypes.package);

    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const turnOffAutoRenew = async () => {
  try {
    const res = await fetchWithAuth(`/payment/cancel-auto-renewal`, {
      method: "POST",
    });
    const result = await res.json();
    revalidateTag(TagTypes.package);
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
