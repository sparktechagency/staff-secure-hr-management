import MyAccountProfile from "@/components/Dashboard/Settings/MyAccountProfile";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const tab = (params?.tab as "profile" | "changePassword") || "profile";
  const myData = {
    name: "John Doe",
    email: "jU9Hg@example.com",
    profileImage: "",
  };
  return <MyAccountProfile activeTab={tab} myData={myData} />;
};

export default page;
