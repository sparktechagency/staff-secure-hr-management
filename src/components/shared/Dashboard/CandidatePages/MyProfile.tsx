"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form, Input } from "antd";
import { IoMdMail } from "react-icons/io";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReuseUpload from "@/components/ui/Form/ReuseUpload";
import ReuseDatePicker from "@/components/ui/Form/ReuseDatePicker";

const MyProfile = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Final Submitted Data:", values);
    // Send to API here
  };

  return (
    <div className="mt-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-color mb-8">
        My Profile
      </h1>

      <ReusableForm form={form} handleFinish={onFinish}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Full Name */}
          <ReuseInput
            name="name"
            label="Full name"
            placeholder="Candidate name"
            rules={[{ required: true, message: "Full name is required" }]}
            Typolevel={5}
            labelClassName="!font-medium !text-secondary-color text-sm"
            inputClassName="!py-3"
          />
          {/* Email Address */}
          <ReuseInput
            name="email"
            label="Email Address"
            placeholder="Enter Email Address"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Invalid email format" },
            ]}
            Typolevel={5}
            labelClassName="!font-medium !text-secondary-color text-sm"
            inputClassName="!py-3"
          />
          {/* Location */}
          <ReuseInput
            name="location"
            label="Location"
            placeholder="Enter location"
            Typolevel={5}
            labelClassName="!font-medium !text-secondary-color text-sm"
            inputClassName="!py-3"
          />

          {/* Date of Birth */}
          <ReuseDatePicker
            name="dateOfBirth"
            label="Date of Birth"
            placeholder="Select date of birth"
            labelClassName="!font-medium !text-secondary-color text-sm"
          />

          {/* Role */}
          <ReuseInput
            name="role"
            label="Role"
            placeholder="Enter your role"
            Typolevel={5}
            labelClassName="!font-medium !text-secondary-color text-sm"
            inputClassName="!py-3"
          />

          {/* Years of Experience */}
          <ReuseInput
            name="yearsOfExperience"
            label="Years of Experience"
            placeholder="e.g., 5"
            type="number"
            Typolevel={5}
            labelClassName="!font-medium !text-secondary-color text-sm"
            inputClassName="!py-3"
          />

          {/* ========= DYNAMIC SKILLS (Using Raw Input) ========= */}
          <Form.Item
            label={
              <span className="font-medium text-secondary-color text-sm">
                Skills
              </span>
            }
          >
            <Form.List name="skills" initialValue={[""]}>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name }, index) => (
                    <div key={key} className="flex items-center gap-3 mb-4">
                      <Form.Item
                        name={name}
                        className="flex-1 mb-0"
                        rules={[
                          { required: true, message: "Skill is required" },
                        ]}
                      >
                        <Input
                          placeholder={`Skill ${
                            index + 1
                          } (e.g., React, TypeScript)`}
                          className="!py-2 !px-3 !text-base !bg-[#F3F3F5] border !border-[#F3F3F5] outline-none !ring-0 !text-base-color rounded-lg"
                          size="large"
                        />
                      </Form.Item>

                      {fields.length > 1 && (
                        <MinusCircleOutlined
                          className="!text-red-500 text-xl !hover:text-red-700 transition-colors -mt-7"
                          onClick={() => remove(name)}
                        />
                      )}
                    </div>
                  ))}

                  <ReuseButton
                    variant="outline"
                    onClick={() => add("")}
                    icon={<PlusOutlined />}
                    className="mt-2 !py-2"
                  >
                    Add Skill
                  </ReuseButton>
                </>
              )}
            </Form.List>
          </Form.Item>

          {/* ========= DYNAMIC QUALIFICATIONS (Using Raw Input) ========= */}
          <Form.Item
            label={
              <span className="font-medium text-secondary-color text-sm">
                Qualification
              </span>
            }
          >
            <Form.List name="qualifications" initialValue={[""]}>
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
                            message: "Qualification is required",
                          },
                        ]}
                      >
                        <Input
                          placeholder={`Qualification ${
                            index + 1
                          } (e.g., BSc Computer Science)`}
                          className="!py-2 !px-3 !text-base !bg-[#F3F3F5] border !border-[#F3F3F5] outline-none !ring-0 !text-base-color rounded-lg"
                          size="large"
                        />
                      </Form.Item>

                      {fields.length > 1 && (
                        <MinusCircleOutlined
                          className="!text-red-500 text-xl !hover:text-red-700 transition-colors -mt-7"
                          onClick={() => remove(name)}
                        />
                      )}
                    </div>
                  ))}

                  <ReuseButton
                    variant="outline"
                    onClick={() => add("")}
                    icon={<PlusOutlined />}
                    className="mt-2 !py-2"
                  >
                    Add Qualification
                  </ReuseButton>
                </>
              )}
            </Form.List>
          </Form.Item>
        </div>

        <ReuseInput
          inputType="textarea"
          name="bio"
          label="Bio"
          placeholder="Enter your bio"
          Typolevel={5}
          labelClassName="!font-medium !text-secondary-color text-sm"
          inputClassName="!py-3"
        />

        {/* ===================== CV UPLOAD (PDF Only) ===================== */}
        <div className="mt-10">
          <ReuseUpload
            Typolevel={5}
            label="Your CV"
            name="cv"
            accept=".pdf"
            maxCount={1}
          />
        </div>

        {/* ===================== SUBMIT BUTTON ===================== */}
        <div className="mt-12 flex justify-center lg:justify-start">
          <ReuseButton
            htmlType="submit"
            variant="secondary"
            className="w-full px-16 py-3 text-lg font-medium"
          >
            Update Profile
          </ReuseButton>
        </div>
      </ReusableForm>
    </div>
  );
};

export default MyProfile;
