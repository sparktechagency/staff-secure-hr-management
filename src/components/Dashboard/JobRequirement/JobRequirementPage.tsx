"use client";
import JobCard from "@/components/shared/Cards/JobCard";
import DeleteModal from "@/components/shared/Modal/DeleteModal";
import EditJobModal from "@/components/shared/Modal/EditJobModal";
import PaginationSection from "@/components/shared/Modal/PaginationSection";
import ViewApplyJobModal from "@/components/shared/Modal/ViewApplyJobModal";
import SearchInput from "@/components/ui/Form/ReuseSearchInput";
import { deleteJobPost } from "@/services/JobBoardService/JobBoardServiceApi";
import { IJob } from "@/types";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import React, { Suspense, useState } from "react";

const JobRequirementPage = ({
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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentRecoard, setCurrentRecoard] = useState<IJob | null>(null);

  const openApplyModal = (job: IJob) => {
    setCurrentRecoard(job);
    setIsApplyModalOpen(true);
  };

  const openEditModal = (job: IJob) => {
    setCurrentRecoard(job);
    setIsEditModalOpen(true);
  };
  const openDeleteModal = (job: IJob) => {
    setCurrentRecoard(job);
    setIsDeleteModalOpen(true);
  };

  const handleCancel = () => {
    setIsApplyModalOpen(false);
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setCurrentRecoard(null);
  };
  const handleDelete = async (record: IJob) => {
    // Implement delete functionality here
    if (record) {
      const res = await tryCatchWrapper(
        deleteJobPost,
        { params: record?._id },
        "Deleting Job Post...",
        "Job Post deleted successfully!",
        "Something went wrong! Please try again."
      );

      if (res?.success) {
        handleCancel();
      }
    }
  };
  return (
    <div className="">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-color mb-8">
        Current Project
      </h1>
      <div className="flex items-center justify-between gap-4">
        {
          jobs?.length > 0 ? (
            <Suspense fallback={<div>Loading...</div>}>
              {" "}
              <SearchInput
                placeholder="Search "
                className="lg:!w-lg gap-0 "
                label="Search"
                isPage={false}
                formClassName="lg:!w-lg !-mb-2 !h-fit"
                inputClassName="lg:!w-lg !bg-[#EFEFEF] text-base-color !py-3 !px-2 w-full !mb-0"
              />
            </Suspense>
          ) : <div></div>
        }
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {jobs?.map((job) => (
          <JobCard
            key={job?._id}
            data={job}
            variant="detailed"
            viewApplyJob={openApplyModal}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
          />
        ))}
      </div>
      <div className="mt-10 flex justify-center items-center">
        {jobs?.length > 0 && <PaginationSection page={page} totalData={totalData} limit={limit} />}
      </div>

      <ViewApplyJobModal
        isModalVisible={isApplyModalOpen}
        handleCancel={handleCancel}
        currentRecord={currentRecoard as IJob}
        variant="detailed"
        applyJob={() => { }}
      />

      <EditJobModal
        isModalVisible={isEditModalOpen}
        handleCancel={handleCancel}
        currentRecord={currentRecoard}
      />
      <DeleteModal
        isDeleteModalVisible={isDeleteModalOpen}
        handleCancel={handleCancel}
        currentRecord={currentRecoard}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default JobRequirementPage;
