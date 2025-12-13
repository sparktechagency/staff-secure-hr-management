"use client";
import JobCard from "@/components/shared/Cards/JobCard";
import PaginationSection from "@/components/shared/Modal/PaginationSection";
import ViewApplyJobModal from "@/components/shared/Modal/ViewApplyJobModal";
import SearchInput from "@/components/ui/Form/ReuseSearchInput";
import { IJob } from "@/types";
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

  return (
    <div className="mt-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-color mb-8">
        Job Board
      </h1>
      <div className="flex items-center gap-4">
        <SearchInput
          placeholder="e,g. electrician, forklift, plumbing"
          className="lg:!w-lg gap-0 "
          label="Search Jobs"
          isPage={false}
          formClassName="lg:!w-lg !-mb-2 !h-fit"
          inputClassName="lg:!w-lg !bg-[#EFEFEF] text-base-color !py-3 !px-2 w-full !mb-0"
        />
        <SearchInput
          placeholder="e,g. London, Manchester, Leeds"
          className="lg:!w-lg gap-0 "
          label="Location"
          paramName="location"
          isPage={false}
          formClassName="lg:!w-lg !-mb-2 !h-fit"
          inputClassName="lg:!w-lg !bg-[#EFEFEF] text-base-color !py-3 !px-2 w-full !mb-0"
        />
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
        applyJob={() => {}}
      />
    </div>
  );
};

export default JobBoardPage;
