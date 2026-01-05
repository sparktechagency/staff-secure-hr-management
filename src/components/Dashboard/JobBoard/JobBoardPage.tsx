"use client";
import JobCard from "@/components/shared/Cards/JobCard";
import PaginationSection from "@/components/shared/Modal/PaginationSection";
import ViewApplyJobModal from "@/components/shared/Modal/ViewApplyJobModal";
import SearchInput from "@/components/ui/Form/ReuseSearchInput";
import { applyJobPost } from "@/services/JobBoardService/JobBoardServiceApi";
import { IJob } from "@/types";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { Select, Typography } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const JobBoardPage = ({
  page,
  limit,
  totalData,
  jobs,
}: {
  page: number;
  limit: number;
  totalData: number;
  jobs: IJob[];
}) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const { replace } = router;

  const handleWorkTypeChange = (workType: string) => {
    const text = workType;
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set("type", text); // Use the dynamic "type"
      params.set("page", "1");
    } else {
      params.delete("type"); // Remove the dynamic "type" if text is empty
    }
    replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [currentRecoard, setCurrentRecoard] = useState<IJob | null>(null);

  const openApplyModal = (job: IJob) => {
    setCurrentRecoard(job);
    setIsApplyModalOpen(true);
  };

  const handleCancle = () => {
    setCurrentRecoard(null);
    setIsApplyModalOpen(false);
  };

  const handleApply = async (record: IJob) => {
    const res = await tryCatchWrapper(
      applyJobPost,
      { params: record?._id },
      "Applying...",
      "Applied successfully!"
    );

    if (res?.success) {
      handleCancle();
    }
  };
  return (
    <div className="">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-color mb-8">
        Current Vacancies
      </h1>
      <div className="flex items-center gap-4">
        <SearchInput
          placeholder="e,g. electrician, forklift, plumbing"
          className="lg:!w-lg gap-0 "
          label="Search Occupation"
          isPage={false}
          formClassName="lg:!w-lg !-mb-2 !h-fit"
          inputClassName="lg:!w-lg !bg-[#EFEFEF] text-base-color !py-3 !px-2 w-full !mb-0"
        />
        <SearchInput
          placeholder="e,g. London, Manchester, Leeds"
          className="lg:!w-lg gap-0 "
          label="County"
          paramName="location"
          isPage={false}
          formClassName="lg:!w-lg !-mb-2 !h-fit"
          inputClassName="lg:!w-lg !bg-[#EFEFEF] text-base-color !py-3 !px-2 w-full !mb-0"
        />
        <div className="flex flex-col gap-2 -mt-4">
          <Typography.Text className="text-base-color">Work Type</Typography.Text>
          <Select
            value={searchParams?.get("type") || "All"}
            className="!h-12.5 !w-40 !border border-[#E1E1E1] rounded-md"
            onChange={(e) => {
              handleWorkTypeChange(e);
            }}
            options={
              [{
                value: "",
                label: "All",
              },
              {
                value: "Full-Time",
                label: "Full Time",
              },
              {
                value: "Part-Time",
                label: "Part Time",
              },
              {
                value: "Temporary",
                label: "Temporary",
              },
              ]
            }
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {jobs?.map((job) => (
          <JobCard
            key={job?._id}
            data={job}
            variant="simple"
            viewApplyJob={openApplyModal}
          />
        ))}
      </div>
      <div className="mt-10 flex justify-center items-center">
        <PaginationSection page={page} totalData={totalData} limit={limit} />
      </div>
      <ViewApplyJobModal
        isModalVisible={isApplyModalOpen}
        handleCancel={handleCancle}
        currentRecord={currentRecoard as IJob}
        variant="simple"
        applyJob={handleApply}
      />
    </div>
  );
};

export default JobBoardPage;
