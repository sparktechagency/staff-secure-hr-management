/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Form, Input, Modal } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReuseSelect from "@/components/ui/Form/ReuseSelect";

const EditJobModal = ({
  isModalVisible,
  currentRecord,
  handleCancel,
}: {
  isModalVisible: boolean;
  currentRecord: any;
  handleCancel: () => void;
}) => {
  console.log(currentRecord);
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Job Post Data:", values);
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
        <h2 className="text-2xl lg:text-3xl font-bold text-secondary-color mb-8">
          Edit Job Post
        </h2>

        <ReusableForm form={form} handleFinish={handleSubmit}>
          <div className="space-y-8">
            {/* Job Title */}
            <ReuseInput
              name="jobTitle"
              label="Job Title"
              placeholder="Enter Job Title"
              rules={[{ required: true, message: "Job title is required" }]}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3"
            />

            {/* Location */}
            <ReuseInput
              name="location"
              label="Location"
              placeholder="Enter Location"
              rules={[{ required: true, message: "Location is required" }]}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3"
            />

            {/* Salary Range */}
            <ReuseInput
              name="minSalaryRange"
              label="Min Salary Range"
              placeholder="Enter Min Salary Range"
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3"
            />

            <ReuseInput
              name="maxSalaryRange"
              label="Max Salary Range"
              placeholder="Enter Max Salary Range"
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3"
            />

            {/* Experience */}
            <ReuseInput
              name="experience"
              label="Experience"
              placeholder="Enter Experience"
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3"
            />

            {/* Length of Work */}
            <ReuseSelect
              name="lengthOfWork"
              label="Length of Work"
              placeholder="Select Length of Work"
              options={[
                { value: "Full Time", label: "Full Time" },
                { value: "Part Time", label: "Part Time" },
                { value: "Contract", label: "Contract" },
              ]}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
            />
            {/* Job type */}
            <ReuseSelect
              name="jobType"
              label="Job Type"
              placeholder="Select Job Type"
              options={[
                {
                  value: "onsite",
                  label: "Onsite",
                },
                {
                  value: "remote",
                  label: "Remote",
                },
                {
                  value: "hybrid",
                  label: "Hybrid",
                },
              ]}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
            />

            {/* Workers Needed */}
            <ReuseInput
              name="workersNeeded"
              label="Workers Needed"
              placeholder="Enter workers needed"
              type="number"
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3"
            />

            {/* Job Description */}
            <ReuseInput
              inputType="textarea"
              name="jobDescription"
              label="Job Description"
              placeholder="Enter Job Description"
              type="number"
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3"
            />

            {/* Key Responsibilities - Dynamic */}
            <Form.Item
              label={
                <span className="font-medium text-secondary-color text-sm">
                  Key Responsibilities
                </span>
              }
            >
              <Form.List name="keyResponsibilities" initialValue={[""]}>
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name }, index) => (
                      <div key={key} className="flex items-center gap-3 mb-4">
                        <Form.Item
                          name={name}
                          className="flex-1 mb-0"
                          rules={[
                            {
                              required: true,
                              message: "Responsibility is required",
                            },
                          ]}
                        >
                          <Input
                            placeholder={`Responsibility ${index + 1}`}
                            className="py-3 text-base"
                            size="large"
                          />
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined
                            className="text-red-500 text-xl hover:text-red-700"
                            onClick={() => remove(name)}
                          />
                        )}
                      </div>
                    ))}
                    <ReuseButton
                      onClick={() => add("")}
                      icon={<PlusOutlined />}
                    >
                      Add Responsibility
                    </ReuseButton>
                  </>
                )}
              </Form.List>
            </Form.Item>

            {/* Requirements - Dynamic */}
            <Form.Item
              label={
                <span className="font-medium text-secondary-color text-sm">
                  Requirements
                </span>
              }
            >
              <Form.List name="requirements" initialValue={[""]}>
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name }, index) => (
                      <div key={key} className="flex items-center gap-3 mb-4">
                        <Form.Item
                          name={name}
                          className="flex-1 mb-0"
                          rules={[
                            {
                              required: true,
                              message: "Requirement is required",
                            },
                          ]}
                        >
                          <Input
                            placeholder={`Requirement ${index + 1}`}
                            className="py-3 text-base"
                            size="large"
                          />
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined
                            className="text-red-500 text-xl hover:text-red-700"
                            onClick={() => remove(name)}
                          />
                        )}
                      </div>
                    ))}
                    <ReuseButton
                      onClick={() => add("")}
                      icon={<PlusOutlined />}
                    >
                      Add Requirement
                    </ReuseButton>
                  </>
                )}
              </Form.List>
            </Form.Item>

            {/* Benefits - Dynamic */}
            <Form.Item
              label={
                <span className="font-medium text-secondary-color text-sm">
                  Benefits
                </span>
              }
            >
              <Form.List name="benefits" initialValue={[""]}>
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name }, index) => (
                      <div key={key} className="flex items-center gap-3 mb-4">
                        <Form.Item
                          name={name}
                          className="flex-1 mb-0"
                          rules={[
                            { required: true, message: "Benefit is required" },
                          ]}
                        >
                          <Input
                            placeholder={`Benefit ${index + 1}`}
                            className="py-3 text-base"
                            size="large"
                          />
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined
                            className="text-red-500 text-xl hover:text-red-700"
                            onClick={() => remove(name)}
                          />
                        )}
                      </div>
                    ))}
                    <ReuseButton
                      onClick={() => add("")}
                      icon={<PlusOutlined />}
                    >
                      Add Benefit
                    </ReuseButton>
                  </>
                )}
              </Form.List>
            </Form.Item>

            {/* Submit Button */}
            <div className="flex justify-end mt-10">
              <ReuseButton
                htmlType="submit"
                variant="secondary"
                className="px-12 py-3 text-lg font-medium"
              >
                Post Job
              </ReuseButton>
            </div>
          </div>
        </ReusableForm>
      </div>
    </Modal>
  );
};

export default EditJobModal;
