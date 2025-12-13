"use client";
import JobCard from "@/components/shared/Cards/JobCard";
import AddNewJobModal from "@/components/shared/Modal/AddNewJobModal";
import DeleteModal from "@/components/shared/Modal/DeleteModal";
import EditJobModal from "@/components/shared/Modal/EditJobModal";
import PaginationSection from "@/components/shared/Modal/PaginationSection";
import ViewApplyJobModal from "@/components/shared/Modal/ViewApplyJobModal";
import ReuseButton from "@/components/ui/Button/ReuseButton";
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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentRecoard, setCurrentRecoard] = useState<IJob | null>(null);

  const openApplyModal = (job: IJob) => {
    setCurrentRecoard(job);
    setIsApplyModalOpen(true);
  };

  const openAddModal = () => setIsAddModalOpen(true);
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
    setIsAddModalOpen(false);
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
    <div className="mt-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-color mb-8">
        Job Requirement
      </h1>
      <div className="flex items-center justify-between gap-4">
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

        <ReuseButton
          variant="secondary"
          className="!w-fit"
          onClick={openAddModal}
        >
          Add New Job Post
        </ReuseButton>
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
        <PaginationSection page={page} totalData={totalData} limit={limit} />
      </div>

      <ViewApplyJobModal
        isModalVisible={isApplyModalOpen}
        handleCancel={handleCancel}
        currentRecord={currentRecoard as IJob}
        variant="detailed"
        applyJob={() => {}}
      />

      <AddNewJobModal
        isModalVisible={isAddModalOpen}
        handleCancel={handleCancel}
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
