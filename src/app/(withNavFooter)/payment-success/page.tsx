import PaymentSuccess from "@/components/PaymentSuccess/PaymentSuccess";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;

  const encodedToken = params?.staff || "";

  const token = decodeURIComponent(encodedToken as string);
  return (
    <div>
      <PaymentSuccess token={token} />
    </div>
  );
};

export default page;
