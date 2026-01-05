/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ViewCVModal from "@/components/shared/Modal/ViewCVmodal";
import ViewRecivedModal from "@/components/shared/Modal/ViewRecivedModal";
import ReceivedCVTable from "@/components/shared/Table/ReceivedCVTable";
import SearchInput from "@/components/ui/Form/ReuseSearchInput";
import { IApplication } from "@/types";
import { useState } from "react";

const RecivedCvsPage = ({
  page,
  limit,
  totalData,
  allCV,
}: {
  page: number;
  limit: number;
  totalData: number;
  allCV: IApplication[];
}) => {
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isViewCVModalVisible, setIsViewCVModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<any | null>(null);

  const [url, setUrl] = useState(null);

  const handleCancel = () => {
    setIsViewModalVisible(false);
    setCurrentRecord(null);
    setIsViewCVModalVisible(false);
    setUrl(null);
  };

  const showViewUserModal = (record: IApplication) => {
    setCurrentRecord(record);
    setIsViewModalVisible(true);
  };

  const showViewCVModal = (record: any, doc: any) => {
    setCurrentRecord(record);
    setUrl(doc);
    setIsViewCVModalVisible(true);
  };

  return (
    <div>
      <div className=" min-h-[80vh] rounded-xl px-4">
        <div className=" w-full p-4   rounded-tl-xl rounded-tr-xl">
          <div className=" flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-5">
              Received CVs
            </h1>
            <SearchInput placeholder="Search ..." />
          </div>
        </div>

        <ReceivedCVTable
          data={allCV}
          loading={false}
          showViewModal={showViewUserModal}
          openViewCVModal={showViewCVModal}
          page={page}
          total={totalData}
          limit={limit}
        />
        <ViewRecivedModal
          isModalVisible={isViewModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
        />
        <ViewCVModal
          isViewCVModalVisible={isViewCVModalVisible}
          handleCancel={handleCancel}
          currentRecord={currentRecord}
          url={url}
        />
      </div>
    </div>
  );
};

export default RecivedCvsPage;
