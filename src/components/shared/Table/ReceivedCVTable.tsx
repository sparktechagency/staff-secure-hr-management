/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, Space, Tag, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import ReuseTable from "@/utils/ReuseTable";
import { IApplication } from "@/types";
import { formatDate } from "@/utils/dateFormet";
import ReuseButton from "@/components/ui/Button/ReuseButton";

// Define the type for the props
interface ReceivedCVTableProps {
  data: IApplication[]; // Replace `unknown` with the actual type of your data array
  loading: boolean;
  showViewModal: (record: IApplication) => void; // Function to handle viewing a user
  openViewCVModal: (record: any, url: any) => void;
  page: number;
  total: number;
  limit: number;
}

const ReceivedCVTable: React.FC<ReceivedCVTableProps> = ({
  data,
  loading,
  showViewModal,
  openViewCVModal,
  page,
  total,
  limit,
}) => {
  const columns = [
    {
      title: "ID",
      key: "id",
      render: (_: any, __: any, index: number) => (
        <span className="font-medium">{(page - 1) * limit + index + 1}</span>
      ),
      width: 80,
    },
    {
      title: "Candidate",
      dataIndex: "candidateId",
      key: "candidateId",
      render: (candidateId: any) => (
        <div>
          <p>{candidateId.name}</p>
          <p className="text-sm text-gray-500">{candidateId.email}</p>
        </div>
      ),
    },
    {
      title: "Job Title",
      dataIndex: ["jobId", "title"],
      key: "jobId",
    },
    {
      title: "Experience",
      dataIndex: ["candidateId", "yearsOfExperience"],
      key: ["candidateId", "yearsOfExperience"],
      align: "center" as const,
      render: (yearsOfExperience: number) => (
        <span className="text-gray-600">{yearsOfExperience} years</span>
      ),
    },
    {
      title: "Applied Date",
      dataIndex: "appliedAt",
      key: "appliedAt",
      align: "center" as const,
      render: (date: string) => (
        <span className="text-gray-600">{formatDate(date)}</span>
      ),
    },
    {
      title: "CV",
      key: "candidateProfileId",
      align: "center" as const,
      render: (_: any, record: any) => (
        <Button
          type="primary"
          size="small"
          onClick={() => openViewCVModal(record?.candidateId, record?.candidateId?.cv)}
          className="!bg-secondary-color hover:!bg-secondary-color"
        >
          View CV
        </Button>
      ),
    },
    {
      title: "Document And Certifications",
      dataIndex: "candidateId",
      key: "candidateId",
      render: (_: any, record: any) => (
        <div className="flex gap-2 flex-wrap justify-center items-center">
          {record?.candidateId?.documentAndCertifications?.length > 0 ? record?.candidateId?.documentAndCertifications?.map(
            (doc: string) => (
              <ReuseButton
                key={doc}
                variant="outline"
                onClick={() => openViewCVModal(record?.candidateId, doc)}
                className="mt-3 !w-fit !py-2 !px-4"
              >
                View
              </ReuseButton>
            )
          ) : <p className="text-center">N/A</p>}
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center" as const,
      render: (status: string) => {
        let color = "green";
        if (status === "forwarded") color = "orange";
        if (status === "selected") color = "green";
        if (status === "rejected") color = "red";

        return (
          <Tag color={color} className="font-medium">
            {status === "forwarded"
              ? "Pending"
              : status === "selected"
                ? "Selected"
                : status === "rejected" && "Rejected"}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: any) => (
        <Space size="middle">
          <Tooltip placement="right" title="View Details">
            <button
              className="!p-0 !bg-transparent !border-none !text-base-color cursor-pointer"
              onClick={() => showViewModal(record)}
            >
              <GoEye style={{ fontSize: "24px" }} />
            </button>
          </Tooltip>
        </Space>
      ),
      align: "center",
    },
  ];

  return (
    <ReuseTable
      columns={columns}
      data={data}
      loading={loading}
      total={total}
      limit={limit}
      page={page}
      keyValue={"_id"}
    />
  );
};

export default ReceivedCVTable;
