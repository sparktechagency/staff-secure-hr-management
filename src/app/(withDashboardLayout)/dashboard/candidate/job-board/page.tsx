import JobBoardPage from "@/components/Dashboard/JobBoard/JobBoardPage";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;

  const searchText = params?.search || "";
  const locationText = params?.location || "";
  console.log({ searchText, locationText });

  return (
    <div>
      <JobBoardPage />
    </div>
  );
};

export default page;
