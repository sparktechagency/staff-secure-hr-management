import RecivedCvsPage from "@/components/Dashboard/RecivedCvs/RecivedCvsPage";
import TagTypes from "@/helpers/TagTypes";
import { fetchWithAuth } from "@/lib/fetchWraper";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;

  const page = Number(params?.page) || 1;
  const search = params?.search || "";
  const limit = 12;

  const res = await fetchWithAuth(
    `/application/received-cvs?page=${page}&limit=${limit}&searchTerm=${search}`,
    {
      next: {
        tags: [TagTypes.job],
      },
    }
  );

  const data = await res.json();

  const cvList = data?.data?.result || [];
  const totalcvs = data?.data?.meta?.total || 0;

  console.log(cvList);
  return (
    <div>
      <RecivedCvsPage
        page={page}
        limit={limit}
        totalData={totalcvs}
        allCV={cvList}
      />
    </div>
  );
};

export default page;
