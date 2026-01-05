import Container from "@/components/ui/Container";
import { fetchWithAuth } from "@/lib/fetchWraper";
import React from "react";

const TermsOfService = async () => {
  const res = await fetchWithAuth(`/settings/cookiesPolicy`, {});
  const data = await res.json();
  return (
    <Container>
      <div className=" py-10 text-gray-800 min-h-[100vh] mt-20">
        <div dangerouslySetInnerHTML={{ __html: data?.data?.content }}></div>
      </div>
    </Container>
  );
};

export default TermsOfService;
