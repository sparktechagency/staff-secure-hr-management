/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ViewRecivedModal from "@/components/shared/Modal/ViewRecivedModal";
import ReceivedCVTable from "@/components/shared/Table/ReceivedCVTable";
import SearchInput from "@/components/ui/Form/ReuseSearchInput";
import { useState } from "react";

const mockData = [
  {
    _id: "1",
    candidateName: "Alex Mason",
    email: "amason@gmail.com",
    jobTitle: "Electrical Engineer",
    experience: "2 Year",
    appliedDate: "12/12/2024",
    cvUrl: "https://example.com/cv/alex-mason.pdf",
    status: "Pending",
  },
  {
    _id: "2",
    candidateName: "Alex Mason",
    email: "amason@gmail.com",
    jobTitle: "Electrical Engineer",
    experience: "2 Year",
    appliedDate: "12/12/2024",
    cvUrl: "https://example.com/cv/alex-mason-2.pdf",
    status: "Selected",
  },
  {
    _id: "3",
    candidateName: "Alex Mason",
    email: "amason@gmail.com",
    jobTitle: "Electrical Engineer",
    experience: "2 Year",
    appliedDate: "12/12/2024",
    cvUrl: "https://example.com/cv/alex-mason-3.pdf",
    status: "Rejected",
  },
  {
    _id: "4",
    candidateName: "Alex Mason",
    email: "amason@gmail.com",
    jobTitle: "Electrical Engineer",
    experience: "2 Year",
    appliedDate: "12/12/2024",
    cvUrl: "https://example.com/cv/alex-mason-4.pdf",
    status: "Pending",
  },
  {
    _id: "5",
    candidateName: "Alex Mason",
    email: "amason@gmail.com",
    jobTitle: "Electrical Engineer",
    experience: "2 Year",
    appliedDate: "12/12/2024",
    cvUrl: "https://example.com/cv/alex-mason-5.pdf",
    status: "Pending",
  },
  {
    _id: "6",
    candidateName: "Alex Mason",
    email: "amason@gmail.com",
    jobTitle: "Electrical Engineer",
    experience: "2 Year",
    appliedDate: "12/12/2024",
    cvUrl: "https://example.com/cv/alex-mason-6.pdf",
    status: "Pending",
  },
  {
    _id: "7",
    candidateName: "Alex Mason",
    email: "amason@gmail.com",
    jobTitle: "Electrical Engineer",
    experience: "2 Year",
    appliedDate: "12/12/2024",
    cvUrl: "https://example.com/cv/alex-mason-7.pdf",
    status: "Selected",
  },
  {
    _id: "8",
    candidateName: "Alex Mason",
    email: "amason@gmail.com",
    jobTitle: "Electrical Engineer",
    experience: "2 Year",
    appliedDate: "12/12/2024",
    cvUrl: "https://example.com/cv/alex-mason-8.pdf",
    status: "Pending",
  },
];

const RecivedCvsPage = ({ page, limit }: { page: number; limit: number }) => {
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<any | null>(null);

  const handleCancel = () => {
    setIsViewModalVisible(false);
    setCurrentRecord(null);
  };

  const showViewUserModal = (record: any) => {
    setCurrentRecord(record);
    setIsViewModalVisible(true);
  };

  return (
    <div>
      <div className=" min-h-[80vh] rounded-xl px-4">
        <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
          <div className=" flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-5">
              Recived Cvs
            </h1>
            <SearchInput placeholder="Search ..." />
          </div>
        </div>

        <ReceivedCVTable
          data={mockData}
          loading={false}
          showViewModal={showViewUserModal}
          page={page}
          total={mockData?.length}
          limit={limit}
        />
        <ViewRecivedModal
          isModalVisible={isViewModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
        />
      </div>
    </div>
  );
};

export default RecivedCvsPage;
