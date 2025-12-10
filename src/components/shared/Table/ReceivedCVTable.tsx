/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, Space, Tag, Tooltip } from "antd";
import { GoEye } from "react-icons/go";
import ReuseTable from "@/utils/ReuseTable";

// Define the type for the props
interface ReceivedCVTableProps {
  data: any[]; // Replace `unknown` with the actual type of your data array
  loading: boolean;
  showViewModal: (record: any) => void; // Function to handle viewing a user
  page: number;
  total: number;
  limit: number;
}

const ReceivedCVTable: React.FC<ReceivedCVTableProps> = ({
  data,
  loading,
  showViewModal,
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
      title: "Candidate name",
      dataIndex: "candidateName",
      key: "candidateName",
      render: (text: string) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email: string) => (
        <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
          {email}
        </a>
      ),
    },
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
      align: "center" as const,
    },
    {
      title: "Applied Date",
      dataIndex: "appliedDate",
      key: "appliedDate",
      align: "center" as const,
      render: (date: string) => <span className="text-gray-600">{date}</span>,
    },
    {
      title: "CV",
      key: "cv",
      align: "center" as const,
      render: (_: any, record: any) => (
        <Button
          type="primary"
          size="small"
          onClick={() => window.open(record.cvUrl, "_blank")}
          className="bg-blue-600 hover:bg-blue-700"
        >
          View CV
        </Button>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center" as const,
      render: (status: string) => {
        let color = "orange";
        if (status === "Selected") color = "green";
        if (status === "Rejected") color = "red";

        return (
          <Tag color={color} className="font-medium">
            {status}
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
