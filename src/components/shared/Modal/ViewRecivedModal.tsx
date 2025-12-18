"use client";
import React, { useEffect } from "react";
import { Form, Modal } from "antd";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { IApplication } from "@/types";
import {
  rejectCandidateByApplicationId,
  selectCandidateByApplicationId,
} from "@/services/JobBoardService/JobBoardServiceApi";
import tryCatchWrapper from "@/utils/tryCatchWrapper";

const ViewRecivedModal = ({
  isModalVisible,
  currentRecord,
  handleCancel,
}: {
  isModalVisible: boolean;
  currentRecord: IApplication | null;
  handleCancel: () => void;
}) => {
  const [form] = Form.useForm();

  console.log(currentRecord);

  useEffect(() => {
    if (currentRecord) {
      form.setFieldsValue({
        adminNote: currentRecord?.adminNotes,
        candidateBio: currentRecord?.candidateId?.bio,
      });
    }
  }, [currentRecord, form]);

  const handleSelect = async (record: IApplication) => {
    const res = await tryCatchWrapper(
      selectCandidateByApplicationId,
      { params: record?._id },
      "Selecting...",
      "Selected successfully!"
    );

    if (res?.success) {
      handleCancel();
    }
  };

  const handleReject = async (record: IApplication) => {
    const res = await tryCatchWrapper(
      rejectCandidateByApplicationId,
      { params: record?._id },
      "Rejecting...",
      "Rejected successfully!"
    );

    if (res?.success) {
      handleCancel();
    }
  };

  if (!currentRecord) {
    return null;
  }

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
        <div className="space-y-8">
          <Form form={form} layout="vertical">
            {/* Candidate BIO */}
            <ReuseInput
              disabled
              inputType="textarea"
              name="adminNote"
              label="Admin Note"
              placeholder=" Admin Note"
              type="number"
              rows={4}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3  disabled:!cursor-default"
            />

            {/* Location */}
            <ReuseInput
              disabled
              inputType="textarea"
              name="candidateBio"
              label="Candidate BIO"
              placeholder=" Candidate BIO"
              type="number"
              rows={4}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3 disabled:!cursor-default"
            />
          </Form>

          {/* Submit Button */}
          {currentRecord?.status === "forwarded" && (
            <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-5">
              <ReuseButton
                variant="secondary"
                className="px-12 py-3 text-lg font-medium !bg-success !border-success"
                onClick={() => handleSelect(currentRecord)}
              >
                Select Candidate
              </ReuseButton>
              <ReuseButton
                variant="error"
                className="px-12 py-3 text-lg font-medium"
                onClick={() => handleReject(currentRecord)}
              >
                Reject
              </ReuseButton>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ViewRecivedModal;
