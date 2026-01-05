import JobBoardPage from "@/components/Dashboard/JobBoard/JobBoardPage";
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
  const limit = 10;

  const searchText = params?.search || "";
  const locationText = params?.location || "";
  const workType = params?.type || "";
  console.log({ searchText, locationText, workType });

  const res = await fetchWithAuth(
    `/job/all?page=${page}&limit=${limit}&searchTerm=${searchText}&county=${locationText}&workType=${workType}`,
    {
      next: {
        tags: [TagTypes.job],
      },
    }
  );

  const data = await res.json();

  const jobList = data?.data?.result || [];
  const totalJobs = data?.data?.meta?.total || 0;

  console.log(data);

  return (
    <div>
      <JobBoardPage
        jobs={jobList}
        page={page}
        totalData={totalJobs || 0}
        limit={limit}
      />
    </div>
  );
};

export default page;
