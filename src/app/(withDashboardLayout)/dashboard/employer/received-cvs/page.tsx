import RecivedCvsPage from "@/components/Dashboard/RecivedCvs/RecivedCvsPage";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;

  const page = Number(params?.page) || 1;
  const limit = 12;
  return (
    <div>
      <RecivedCvsPage page={page} limit={limit} />
    </div>
  );
};

export default page;
