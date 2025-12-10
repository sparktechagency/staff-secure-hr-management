/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Form, Modal } from "antd";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseButton from "@/components/ui/Button/ReuseButton";

const ViewRecivedModal = ({
  isModalVisible,
  currentRecord,
  handleCancel,
}: {
  isModalVisible: boolean;
  currentRecord: any;
  handleCancel: () => void;
}) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Job Post Data:", values, currentRecord);
    // Handle API call here
    handleCancel(); // Close modal after submit
    form.resetFields();
  };

  return (
    <Modal
      open={isModalVisible}
      onCancel={() => {
        handleCancel();
        form.resetFields();
      }}
      footer={null}
      centered
      width={900}
      className="z-[9999]"
      title={null}
    >
      <div className="p-6">
        <ReusableForm form={form} handleFinish={handleSubmit}>
          <div className="space-y-8">
            {/* Candidate BIO */}
            <ReuseInput
              inputType="textarea"
              name="candidateBio"
              label="Candidate BIO"
              placeholder="Enter Candidate BIO"
              type="number"
              rows={4}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3"
            />

            {/* Location */}
            <ReuseInput
              inputType="textarea"
              name="candidateBio"
              label="Candidate BIO"
              placeholder="Enter Candidate BIO"
              type="number"
              rows={4}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3"
            />

            {/* Submit Button */}
            <div className="flex justify-between items-center mt-10">
              <ReuseButton
                htmlType="submit"
                variant="secondary"
                className="px-12 py-3 text-lg font-medium !bg-success !border-success"
              >
                Select Candidate
              </ReuseButton>
              <ReuseButton
                htmlType="submit"
                variant="error"
                className="px-12 py-3 text-lg font-medium"
              >
                Reject
              </ReuseButton>
            </div>
          </div>
        </ReusableForm>
      </div>
    </Modal>
  );
};

export default ViewRecivedModal;
