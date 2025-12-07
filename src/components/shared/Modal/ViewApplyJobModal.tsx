/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import React from "react";

const ViewApplyJobModal = ({
  isModalVisible,
  handleCancel,
  applyJob,
}: {
  isModalVisible: boolean;
  handleCancel: () => void;
  applyJob: any;
}) => {
  return (
    <Modal
      open={isModalVisible}
      onCancel={() => {
        handleCancel();
      }}
      footer={null}
      centered
      className="lg:!w-[900px]"
    ></Modal>
  );
};

export default ViewApplyJobModal;
