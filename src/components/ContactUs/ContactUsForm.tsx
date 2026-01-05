/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import ReusableForm from "../ui/Form/ReuseForm";
import ReuseInput from "../ui/Form/ReuseInput";
import ReuseButton from "../ui/Button/ReuseButton";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { sendMessage } from "@/services/ConversationService/ConversationServiceApi";
import { Form } from "antd";

const ContactUsForm = () => {
  const [form] = Form.useForm();
  const handleFinish = async (values: any) => {
    const res = await tryCatchWrapper(
      sendMessage,
      { body: values },
      "Sending message...",
      "Message sent successfully!"
    );

    if (res?.success) {
      form.resetFields();
    }
  };
  return (
    <ReusableForm
      form={form}
      handleFinish={handleFinish}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3"
    >
      <ReuseInput
        name="name"
        type="text"
        label="Name"
        placeholder="Enter your name"
        rules={[{ required: true, message: "Name is required!" }]}
      />
      <ReuseInput
        name="companyName"
        type="text"
        label="Company Name (Optional)"
        placeholder="Enter your company name"
        rules={[{ required: false, message: "company name is required!" }]}
      />
      <ReuseInput
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        rules={[{ required: true, message: "Email is required!" }]}
      />
      <ReuseInput
        name="phone"
        type="text"
        label="Phone"
        placeholder="Enter your phone"
        rules={[{ required: true, message: "Phone is required!" }]}
      />
      <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2">
        <ReuseInput
          name="message"
          inputType="textarea"
          label="Message"
          placeholder="Enter your message"
          rules={[{ required: true, message: "Message is required!" }]}
        />
      </div>
      <div className="col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2">
        <ReuseButton
          htmlType="submit"
          variant="secondary"
          className="w-fit !rounded-lg"
        >
          Submit
        </ReuseButton>
      </div>
    </ReusableForm>
  );
};

export default ContactUsForm;
