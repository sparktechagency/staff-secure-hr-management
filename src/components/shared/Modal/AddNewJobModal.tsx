/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Form, Input, Modal, Typography } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReuseSelect from "@/components/ui/Form/ReuseSelect";
import ReuseDatePicker from "@/components/ui/Form/ReuseDatePicker";
import dayjs from "dayjs";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { addJobPost } from "@/services/JobBoardService/JobBoardServiceApi";
import ReuseTimePicker from "@/components/ui/Form/ReuseTimePicker";

const AddNewJobModal = ({
  isModalVisible,
  handleCancel,
}: {
  isModalVisible: boolean;
  handleCancel: () => void;
}) => {
  const [form] = Form.useForm();
  const workType = Form.useWatch("workType", form);
  const paymentType = Form.useWatch("paymentType", form);

  const handleSubmit = async (values: any) => {
    const payload = {
      title: values.title,
      location: values.location,
      workType: values.workType,
      ...(values.lengthOfWork ? { lengthOfWork: values.lengthOfWork } : { lengthOfWork: "" }),
      paymentType: values.paymentType,
      salaryRange: {
        min: Number(values.minSalaryRange),
        max: Number(values.maxSalaryRange),
      },
      annualPay: Number(values.annualPay),
      hourlyRequired: Number(values.hourlyRequired),
      startDate: dayjs(values.startDate).format("YYYY-MM-DD"),
      startTime: dayjs(values.startTime).format("hh:mm:A"),
      finishTime: dayjs(values.finishTime).format("hh:mm:A"),
      daysOfWork: values.daysOfWork,
      workersNeeded: Number(values.workersNeeded),
      experience: Number(values.experience),
      jobType: values.jobType,
      description: values.description,
      keyResponsibilities: values.keyResponsibilities,
      requirements: values.requirements,
      skillsRequired: values.skillsRequired,
      benefits: values.benefits,

      lastApplyDate: values.lastApplyDate
        ? dayjs(values.lastApplyDate).format("YYYY-MM-DD")
        : null,
    };

    console.log(payload);

    const res = await tryCatchWrapper(
      addJobPost,
      { body: payload },
      "Creating new project ...",
      "Project created successfully!",
      "Something went wrong! Please try again."
    );

    console.log(res);

    if (res?.success) {
      form.resetFields();
      handleCancel();
    }
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
          Add New Project
        </h2>

        <ReusableForm form={form} handleFinish={handleSubmit}>
          <div className="space-y-8">
            {/* Job Title */}
            <ReuseInput
              name="title"
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
            {/* Type of Work / Employment Type */}
            <ReuseSelect
              name="workType"
              label="Employment type"
              placeholder="Select Employment type"
              options={[
                { value: "Full-Time", label: "Full Time" },
                { value: "Temporary", label: "Temporary" },
              ]}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
            />
            {/* Length of Work */}
            {workType === "Temporary" && <ReuseSelect
              name="lengthOfWork"
              label="Length of work"
              placeholder="Select Length of work"
              options={[
                { value: "1 Month", label: "1 Month" },
                { value: "2 Month", label: "2 Month" },
                { value: "3 Month", label: "3 Month" },
                { value: "4 Month", label: "4 Month" },
                { value: "5 Month", label: "5 Month" },
                { value: "6 Month", label: "6 Month" },
                { value: "7 Month", label: "7 Month" },
                { value: "8 Month", label: "8 Month" },
                { value: "9 Month", label: "9 Month" },
                { value: "10 Month", label: "10 Month" },
                { value: "11 Month", label: "11 Month" },
                { value: "1 Year", label: "1 Year" },
                { value: "1 Year 3 Month", label: "1 Year 3 Month" },
                { value: "1 Year 6 Month", label: "1 Year 6 Month" },
                { value: "1 Year 9 Month", label: "1 Year 9 Month" },
                { value: "2 Year", label: "2 Year" },
              ]}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
            />}

            {/* Job type */}
            <ReuseSelect
              name="jobType"
              label="Location Type"
              placeholder="Select Location Type"
              options={[
                {
                  value: "Onsite",
                  label: "Onsite",
                },
                {
                  value: "Remote",
                  label: "Remote",
                },
                {
                  value: "Hybrid",
                  label: "Hybrid",
                },
              ]}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
            />

            {/* Payment type */}
            <ReuseSelect
              name="paymentType"
              label="Payment Type"
              placeholder="Select Payment Type"
              options={[
                {
                  value: "Hourly",
                  label: "Hourly",
                },
                {
                  value: "Monthly",
                  label: "Monthly  ",
                },
              ]}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
            />

            {/* Salary Range */}
            <Typography.Title level={5} className="!font-medium text-sm">
              {paymentType === "Hourly" ? "Hourly rate (£)" : "Monthly rate (£)"}
            </Typography.Title>
            <div className="flex gap-4 !w-full ">
              <ReuseInput
                name="minSalaryRange"
                type="number"
                placeholder={`Min. Range`}
                Typolevel={5}
                labelClassName="!font-medium text-sm"
                inputClassName="!py-3 "
                wrapperClassName="!w-full"
              />

              <ReuseInput
                name="maxSalaryRange"
                type="number"
                placeholder={`Max. Range`}
                Typolevel={5}
                labelClassName="!font-medium text-sm"
                inputClassName="!py-3 " wrapperClassName="!w-full"
              />
            </div>

            <ReuseInput
              name="annualPay"
              label="Annual pay (£)"
              type="number"
              placeholder="Enter Annual pay"
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3 " wrapperClassName="!w-full !-mt-5"
            />
            <ReuseInput
              name="hourlyRequired"
              label="Hours required"
              type="number"
              placeholder="Enter Hours"
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3 " wrapperClassName="!w-full !-mt-5"
            />

            <ReuseDatePicker
              name="startDate"
              label="Start date"
              placeholder="Select Start date"
              labelClassName="!font-medium text-sm"
            />

            <ReuseTimePicker
              name="startTime"
              label="Start time"
              placeholder="Select Start time"
              labelClassName="!font-medium text-sm"
            />

            <ReuseTimePicker
              name="finishTime"
              label="Finish time"
              placeholder="Select Finish time"
              labelClassName="!font-medium text-sm"
            />


            {/* Days of work */}
            <ReuseSelect
              name="daysOfWork"
              mode="multiple"
              label="Days of work"
              placeholder="Select Days of work"
              options={[
                {
                  value: "Sunday",
                  label: "Sunday",
                },
                {
                  value: "Monday",
                  label: "Monday",
                },
                {
                  value: "Tuesday",
                  label: "Tuesday",
                },
                {
                  value: "Wednesday",
                  label: "Wednesday",
                },
                {
                  value: "Thursday",
                  label: "Thursday",
                },
                {
                  value: "Friday",
                  label: "Friday",
                },
                {
                  value: "Saturday",
                  label: "Saturday",
                }
              ]}
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              selectClassName="!min-h-14 !h-fit"
            />

            {/* Workers Needed */}
            <ReuseInput
              name="workersNeeded"
              label="Candidate required"
              placeholder="Enter Candidate required"
              type="number"
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3"
            />

            {/* Experience */}
            <ReuseInput
              name="experience"
              label="Experience"
              type="number"
              placeholder="Enter Experience"
              Typolevel={5}
              labelClassName="!font-medium text-sm"
              inputClassName="!py-3"
              wrapperClassName=""
            />

            {/* Project requirements */}
            <ReuseInput
              inputType="textarea"
              name="description"
              label="Project requirements"
              placeholder="Enter Project requirements"
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
                          className="flex-1 !mb-0"
                          rules={[
                            {
                              required: true,
                              message: "Responsibility is required",
                            },
                          ]}
                        >
                          <Input
                            placeholder={`Responsibility ${index + 1}`}
                            className="!py-1.5 !px-3 !text-base !bg-[#F3F3F5] border !border-[#F3F3F5] outline-none !ring-0 !text-base-color rounded-lg"
                            size="large"
                          />
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined
                            className="!text-red-500 text-base hover:!text-red-700"
                            onClick={() => remove(name)}
                          />
                        )}
                      </div>
                    ))}
                    <ReuseButton
                      className="!py-0.5 !text-sm !border-dashed"
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
                          className="flex-1 !mb-0"
                          rules={[
                            {
                              required: true,
                              message: "Requirement is required",
                            },
                          ]}
                        >
                          <Input
                            placeholder={`Requirement ${index + 1}`}
                            className="!py-1.5 !px-3 !text-base !bg-[#F3F3F5] border !border-[#F3F3F5] outline-none !ring-0 !text-base-color rounded-lg"
                            size="large"
                          />
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined
                            className="!text-red-500 text-base hover:!text-red-700"
                            onClick={() => remove(name)}
                          />
                        )}
                      </div>
                    ))}
                    <ReuseButton
                      className="!py-0.5 !text-sm !border-dashed"
                      onClick={() => add("")}
                      icon={<PlusOutlined />}
                    >
                      Add Requirement
                    </ReuseButton>
                  </>
                )}
              </Form.List>
            </Form.Item>

            {/* Skill Requirements - Dynamic */}
            <Form.Item
              label={
                <span className="font-medium text-secondary-color text-sm">
                  Skill Requirements
                </span>
              }
            >
              <Form.List name="skillsRequired" initialValue={[""]}>
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name }, index) => (
                      <div key={key} className="flex items-center gap-3 mb-4">
                        <Form.Item
                          name={name}
                          className="flex-1 !mb-0"
                          rules={[
                            {
                              required: true,
                              message: "Skill is required",
                            },
                          ]}
                        >
                          <Input
                            placeholder={`Skill ${index + 1}`}
                            className="!py-1.5 !px-3 !text-base !bg-[#F3F3F5] border !border-[#F3F3F5] outline-none !ring-0 !text-base-color rounded-lg"
                            size="large"
                          />
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined
                            className="!text-red-500 text-base hover:!text-red-700"
                            onClick={() => remove(name)}
                          />
                        )}
                      </div>
                    ))}
                    <ReuseButton
                      className="!py-0.5 !text-sm !border-dashed"
                      onClick={() => add("")}
                      icon={<PlusOutlined />}
                    >
                      Add Skill
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
                          className="flex-1 !mb-0"
                          rules={[
                            { required: true, message: "Benefit is required" },
                          ]}
                        >
                          <Input
                            placeholder={`Benefit ${index + 1}`}
                            className="!py-1.5 !px-3 !text-base !bg-[#F3F3F5] border !border-[#F3F3F5] outline-none !ring-0 !text-base-color rounded-lg"
                            size="large"
                          />
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined
                            className="!text-red-500 text-base hover:!text-red-700"
                            onClick={() => remove(name)}
                          />
                        )}
                      </div>
                    ))}
                    <ReuseButton
                      className="!py-0.5 !text-sm !border-dashed"
                      onClick={() => add("")}
                      icon={<PlusOutlined />}
                    >
                      Add Benefit
                    </ReuseButton>
                  </>
                )}
              </Form.List>
            </Form.Item>

            <ReuseDatePicker
              name="lastApplyDate"
              label="Last Apply Date"
              placeholder="Select Last Apply Date"
              labelClassName="!font-medium text-sm"
            />

            {/* Submit Button */}
            <div className="flex justify-end mt-10">
              <ReuseButton
                htmlType="submit"
                variant="secondary"
                className="px-12 py-3 text-lg font-medium"
              >
                Post Project
              </ReuseButton>
            </div>
          </div>
        </ReusableForm>
      </div>
    </Modal>
  );
};

export default AddNewJobModal;
