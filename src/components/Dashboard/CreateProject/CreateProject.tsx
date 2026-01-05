/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Form, Input, Typography } from "antd";
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
import { BsCurrencyPound } from "react-icons/bs";
import { IProfile } from "@/types/profile.type";

const CreateProject = ({ myData }: { myData: IProfile }) => {
    const [form] = Form.useForm();
    const workType = Form.useWatch("workType", form);
    const paymentType = Form.useWatch("paymentType", form);

    const handleSubmit = async (values: any) => {
        console.log(values)
        const payload = {
            title: values.title,
            location: values.location,
            area: values.area,
            county: values.county,
            postalCode: values.postalcode,
            jobType: values.jobType,
            workType: values.workType,
            ...(values.lengthOfWorkInWeek ? { lengthOfWork: values.lengthOfWorkInNumber + " " + values.lengthOfWorkInWeek } : { lengthOfWork: "" }),
            paymentType: values.paymentType,
            salaryRange: {
                min: Number(values.minSalaryRange),
                max: Number(values.maxSalaryRange),
            },
            overtimePayRate: Number(values.overtimePayRate),
            hourlyRequired: Number(values.hourlyRequired),
            startDate: dayjs(values.startDate).format("YYYY-MM-DD"),
            startTime: dayjs(values.startTime).format("hh:mm:A"),
            finishTime: dayjs(values.finishTime).format("hh:mm:A"),
            daysOfWork: values.daysOfWork,
            experience: Number(values.experience),
            description: values.description,
            candidateDuties: values.candidateDuties,
            documentationCertificates: values.documentationCertificates,
            benefits: values.benefits,
            additionalInformation: values.additionalInformation,
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
        }
    };

    return (

        <div className="p-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary-color mb-8">
                Create New Project
            </h2>

            <ReusableForm form={form} handleFinish={handleSubmit}>
                <div className="space-y-8">
                    {/* Job Title */}
                    <ReuseInput
                        name="title"
                        label="Candidate Required"
                        placeholder="Enter Candidate Required"
                        rules={[{ required: true, message: "Candidate Required is required" }]}
                        Typolevel={4}
                        labelClassName="!font-medium text-sm"
                        inputClassName="!py-3"
                    />


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                        {/* Location */}
                        <ReuseInput
                            name="location"
                            label="Project Street Address"
                            placeholder="Enter Street Address"
                            rules={[{ required: true, message: "Street Address is required" }]}
                            Typolevel={4}
                            labelClassName="!font-medium text-sm"
                            inputClassName="!py-3"
                        />
                        <ReuseInput
                            name="area"
                            label="Town"
                            placeholder="Enter Town"
                            rules={[{ required: true, message: "Town is required" }]}
                            Typolevel={4}
                            labelClassName="!font-medium text-sm"
                            inputClassName="!py-3"
                        />
                        <ReuseInput
                            name="county"
                            label="County"
                            placeholder="Enter County"
                            rules={[{ required: true, message: "County is required" }]}
                            Typolevel={4}
                            labelClassName="!font-medium text-sm"
                            inputClassName="!py-3"
                        />
                        <ReuseInput
                            name="postalcode"
                            label="Postal Code"
                            placeholder="Enter Postal Code"
                            rules={[{ required: true, message: "Postal Code is required" }]}
                            Typolevel={4}
                            labelClassName="!font-medium text-sm"
                            inputClassName="!py-3"
                        />

                    </div>


                    {/* Job type - Work arrangement */}
                    <ReuseSelect
                        name="jobType"
                        label="Place of Work"
                        placeholder="Select Place of Work"
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
                        Typolevel={4}
                        rules={[{ required: true }]}
                        labelClassName="!font-medium text-sm"
                    />

                    {/* Type of Work / Employment Type */}
                    <ReuseSelect
                        name="workType"
                        label="Employment type"
                        placeholder="Select Employment type"
                        options={[
                            { value: "Full-Time", label: "Full Time" },
                            { value: "Part-Time", label: "Part Time" },
                            { value: "Temporary", label: "Temporary" },
                        ]}
                        Typolevel={4}
                        labelClassName="!font-medium text-sm"
                    />
                    {workType === "Temporary" && <Typography.Title level={4} className="!font-medium text-sm">
                        Length of Project
                    </Typography.Title>}
                    {/* Length of Work */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                        {workType === "Temporary" && <ReuseInput
                            name="lengthOfWorkInNumber"
                            type="number"
                            placeholder="ex: 1,2,3,4,5"
                            rules={[{ required: true, message: "Length of work (in number) is required" }]}
                            Typolevel={4}
                            labelClassName="!font-medium text-sm"
                            inputClassName="!py-3"
                        />}

                        {workType === "Temporary" && <ReuseSelect
                            name="lengthOfWorkInWeek"
                            rules={[{ required: true }]}
                            placeholder="Select Length of Project"
                            options={[
                                { value: "Day", label: "Days" },
                                { value: "Weeks", label: "Weeks" },
                                { value: "Months", label: "Months" },
                            ]}
                            Typolevel={4}
                            labelClassName="!font-medium text-sm"
                        />}
                    </div>



                    {/* Payment type */}
                    <ReuseSelect
                        name="paymentType"
                        label="Payment Period"
                        placeholder="Select Payment Period"
                        options={[
                            {
                                value: "Weekly",
                                label: "Weekly",
                            },
                            {
                                value: "Fortnightly",
                                label: "Fortnightly",
                            },
                            {
                                value: "Monthly",
                                label: "Monthly  ",
                            },
                        ]}
                        Typolevel={4}
                        rules={[{ required: true }]}
                        labelClassName="!font-medium text-sm"
                    />

                    {/* Salary Range */}
                    <Typography.Title level={4} className="!font-medium text-sm">
                        {paymentType !== "Monthly" ? "Hourly Pay rate" : "Monthly rate"}
                    </Typography.Title>
                    <div className="flex gap-4 !w-full ">
                        <ReuseInput
                            name="minSalaryRange"
                            type="number"
                            placeholder={`Min. Range`}
                            Typolevel={4}
                            labelClassName="!font-medium text-sm"
                            inputClassName="!py-3 "
                            wrapperClassName="!w-full"
                            rules={[{ required: true }]}
                            prefix={<BsCurrencyPound className="text-xl !text-base-color" />}
                        />

                        <ReuseInput
                            name="maxSalaryRange"
                            type="number"
                            placeholder={`Max. Range`}
                            Typolevel={4}
                            labelClassName="!font-medium text-sm"
                            inputClassName="!py-3 " wrapperClassName="!w-full"
                            rules={[{ required: true }]}
                            prefix={<BsCurrencyPound className="text-xl !text-base-color" />}

                        />
                    </div>

                    <ReuseInput
                        name="overtimePayRate"
                        label="Overtime Pay Rate"
                        type="number"
                        placeholder="Enter Overtime Pay Rate"
                        Typolevel={4}
                        labelClassName="!font-medium text-sm"
                        inputClassName="!py-3 " wrapperClassName="!w-full !-mt-5"
                        rules={[{ required: true }]}
                        prefix={<BsCurrencyPound className="text-xl !text-base-color" />}
                    />
                    {/* <ReuseInput
                        name="annualPay"
                        label="Annual Pay Rate (£)"
                        type="number"
                        placeholder="Enter Annual pay"
                        Typolevel={4}
                        labelClassName="!font-medium text-sm"
                        inputClassName="!py-3 " wrapperClassName="!w-full "
                        prefix={<BsCurrencyPound className="text-xl !text-base-color" />}
                    /> */}
                    <ReuseInput
                        name="hourlyRequired"
                        label="Hours required (per week)"
                        type="number"
                        placeholder="Enter Hours"
                        Typolevel={4}
                        labelClassName="!font-medium text-sm"
                        rules={[{ required: true }]}
                        inputClassName="!py-3 " wrapperClassName="!w-full"
                    />

                    <ReuseDatePicker
                        name="startDate"
                        label="Start date"
                        placeholder="Select Start date"
                        rules={[{ required: true }]}
                        labelClassName="!font-medium text-sm"
                    />

                    <ReuseTimePicker
                        name="startTime"
                        label="Start time"
                        placeholder="Select Start time"
                        rules={[{ required: true }]}
                        labelClassName="!font-medium text-sm"
                    />

                    <ReuseTimePicker
                        name="finishTime"
                        label="Finish time"
                        placeholder="Select Finish time"
                        rules={[{ required: true }]}
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
                        Typolevel={4}
                        labelClassName="!font-medium text-sm"
                        rules={[{ required: true }]}
                        selectClassName="!min-h-9 !h-fit"
                    />

                    {/* Workers Needed */}
                    {/* <ReuseInput
                        name="workersNeeded"
                        label="How many Candidate required"
                        placeholder="Enter How many Candidate required"
                        type="number"
                        Typolevel={4}
                        labelClassName="!font-medium text-sm"
                        inputClassName="!py-3"
                    /> */}

                    {/* Experience */}
                    <ReuseInput
                        name="experience"
                        label="Years of experience"
                        type="number"
                        placeholder="Enter Experience"
                        Typolevel={4}
                        labelClassName="!font-medium text-sm"
                        rules={[{ required: true }]}
                        inputClassName="!py-3"
                        wrapperClassName=""
                    />

                    {/* Project requirements */}
                    <ReuseInput
                        inputType="textarea"
                        name="description"
                        label="Project Description"
                        placeholder="Enter Project Description"
                        type="number"
                        Typolevel={4}
                        rules={[{ required: true }]}
                        labelClassName="!font-medium text-sm"
                        inputClassName="!py-3"
                    />
                    <Form.Item
                        label={<span className="font-medium text-base-color text-xl">Candidate Required Duties</span>}
                    >
                        <Form.List
                            name="candidateDuties"
                            initialValue={[""]}  // Ensuring it starts as an array of strings
                        >
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name }, index) => (
                                        <div key={key} className="flex items-center gap-3 mb-4">
                                            <Form.Item
                                                name={[name]}  // Avoid nesting and just refer directly to the string value
                                                className="flex-1 !mb-0"
                                                rules={[{ required: true, message: "Duty is required" }]}
                                            >
                                                <Input
                                                    placeholder={`Candidate Required Duties ${index + 1}`}
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
                                        onClick={() => add("")} // Adding an empty string to the array
                                        icon={<PlusOutlined />}
                                    >
                                        Add More
                                    </ReuseButton>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    <Form.Item
                        label={<span className="font-medium text-base-color text-xl">Documentation and Certificates</span>}
                    >
                        <Form.List
                            name="documentationCertificates"
                            initialValue={[""]}  // Ensuring it starts as an array of strings
                        >
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name }, index) => (
                                        <div key={key} className="flex items-center gap-3 mb-4">
                                            <Form.Item
                                                name={[name]}  // Avoid nesting and just refer directly to the string value
                                                className="flex-1 !mb-0"
                                                rules={[{ required: true, message: "Document/Certificate is required" }]}
                                            >
                                                <Input
                                                    placeholder={`Documentation and Certificates ${index + 1}`}
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
                                        onClick={() => add("")} // Adding an empty string to the array
                                        icon={<PlusOutlined />}
                                    >
                                        Add More
                                    </ReuseButton>
                                </>
                            )}
                        </Form.List>
                    </Form.Item>

                    {/* Benefits - Dynamic */}
                    <Form.Item
                        label={
                            <span className="font-medium text-base-color  text-xl">
                                Employee  Benefits
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

                    <ReuseInput
                        inputType="textarea"
                        name="additionalInformation"
                        label="Additional information"
                        placeholder="Enter Additional information"
                        Typolevel={4}
                        labelClassName="!font-medium text-sm"
                        rules={[{ required: true }]}
                        inputClassName="!py-3"
                    />

                    <ReuseDatePicker
                        name="lastApplyDate"
                        label="Closing Date of Project"
                        placeholder="Select Closing Date of Project"
                        rules={[{ required: true }]}
                        className="placeholder:!text-red-500"
                        labelClassName="!font-medium text-sm"
                    />

                    {/* Submit Button */}
                    {
                        myData?.mySubscriptionsId ? (

                            <ReuseButton
                                htmlType="submit"
                                variant="secondary"
                                className="px-12 py-3 text-lg font-medium"
                            >
                                Post this Project
                            </ReuseButton>
                        ) : <div className="flex justify-end mt-10">
                            <ReuseButton
                                url="/packages"
                                variant="secondary"
                                className="px-12 py-3 text-lg font-medium !bg-transparent !border-secondary-color !text-secondary-color"
                            >
                                Purchase a Subscription to Post a Project
                            </ReuseButton>
                        </div>
                    }

                </div>
            </ReusableForm>
        </div>
    );
};

export default CreateProject;
