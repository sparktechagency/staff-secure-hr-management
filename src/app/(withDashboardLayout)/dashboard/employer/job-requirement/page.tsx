import JobRequirementPage from "@/components/Dashboard/JobRequirement/JobRequirementPage";
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
  const search = params?.search || "";

  const res = await fetchWithAuth(
    `/job/my?page=${page}&limit=${limit}&searchTerm=${search}`,
    {
      next: {
        tags: [TagTypes.job],
      },
    }
  );

  const data = await res.json();

  const jobList = data?.data?.result || [];
  const totalJobs = data?.data?.meta?.total || 0;

  console.log(jobList);
  return (
    <div>
      <JobRequirementPage
        jobs={jobList}
        page={page}
        limit={limit}
        totalData={totalJobs}
      />
    </div>
  );
};

export default page;
