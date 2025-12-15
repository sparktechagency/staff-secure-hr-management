"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Form, Input } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import ReuseUpload from "@/components/ui/Form/ReuseUpload";
import ReuseDatePicker from "@/components/ui/Form/ReuseDatePicker";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { updateCandidateProfile } from "@/services/ProfileService/ProfileServiceApi";
import ReuseSelect from "@/components/ui/Form/ReuseSelect";
import { ICandidateProfile } from "@/types/profile.type";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import ViewCVModal from "@/components/shared/Modal/ViewCVmodal";
import Cookies from "js-cookie";

const MyProfile = ({ myProfileData }: { myProfileData: ICandidateProfile }) => {
  const [isViewCVModalVisible, setIsViewCVModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);

  const openViewCVModal = (record: any) => {
    setCurrentRecord(record);
    setIsViewCVModalVisible(true);
  };

  const handleCancel = () => {
    setIsViewCVModalVisible(false);
    setCurrentRecord(null);
  };

  const [form] = Form.useForm();

  useEffect(() => {
    if (myProfileData) {
      form.setFieldsValue({
        name: myProfileData?.candidateProfileId?.name
          ? myProfileData?.candidateProfileId?.name
          : myProfileData?.name,
        email: myProfileData?.candidateProfileId?.email
          ? myProfileData?.candidateProfileId?.email
          : myProfileData?.email,
        location: myProfileData?.candidateProfileId?.location,
        role: myProfileData?.candidateProfileId?.designation,
        dateOfBirth: myProfileData?.candidateProfileId?.dateOfBirth
          ? dayjs(myProfileData?.candidateProfileId?.dateOfBirth)
          : null,
        yearsOfExperience: myProfileData?.candidateProfileId?.yearsOfExperience,
        qualifications: myProfileData?.candidateProfileId?.qualifications,
        skills: myProfileData?.candidateProfileId?.skills,
        availability: myProfileData?.candidateProfileId?.availability,
        bio: myProfileData?.candidateProfileId?.bio,
      });
    }
  }, [form, myProfileData]);

  const onFinish = async (values: any) => {
    console.log("Raw values:", values);

    const formData = new FormData();

    const payload = {
      name: values.name,
      location: values.location,
      designation: values.role,
      dateOfBirth: values.dateOfBirth
        ? values.dateOfBirth.format("YYYY-MM-DD")
        : null,
      yearsOfExperience: Number(values.yearsOfExperience),
      qualifications: values.qualifications || [],
      skills: values.skills || [],
      availability: values.availability,
      bio: values.bio,
    };

    formData.append("data", JSON.stringify(payload));

    if (values?.cv?.[0]?.originFileObj) {
      formData.append("image", values.cv[0].originFileObj);
    }
    console.log({ payload, image: values?.cv?.[0]?.originFileObj });

    const res = await tryCatchWrapper(
      updateCandidateProfile,
      { body: formData },
      "Updating profile...",
      "Profile updated successfully!",
      "Something went wrong! Please try again."
    );
    console.log(res);
    if (res?.success) {
      form.resetFields();
      Cookies.set("secureStaffMainAccessToken", res?.data?.accessToken);
    }
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
            rules={[{ required: true, message: "Location is required" }]}
            placeholder="Enter location"
            Typolevel={5}
            labelClassName="!font-medium !text-secondary-color text-sm"
            inputClassName="!py-3"
          />

          {/* Date of Birth */}
          <ReuseDatePicker
            prevDatesDisabled={false}
            name="dateOfBirth"
            rules={[{ required: true, message: "Date of birth is required" }]}
            label="Date of Birth"
            placeholder="Select date of birth"
            labelClassName="!font-medium !text-secondary-color text-sm"
          />

          {/* Role */}
          <ReuseInput
            name="role"
            label="Role"
            rules={[{ required: true, message: "Role is required" }]}
            placeholder="Enter your role"
            Typolevel={5}
            labelClassName="!font-medium !text-secondary-color text-sm"
            inputClassName="!py-3"
          />

          {/* Years of Experience */}
          <ReuseInput
            name="yearsOfExperience"
            label="Years of Experience"
            rules={[
              { required: true, message: "Years of experience is required" },
            ]}
            placeholder="e.g., 5"
            type="number"
            Typolevel={5}
            labelClassName="!font-medium !text-secondary-color text-sm"
            inputClassName="!py-3"
          />
          <ReuseSelect
            name="availability"
            label="Availability"
            rules={[{ required: true, message: "Availability is required" }]}
            placeholder="Select availability"
            labelClassName="!font-medium !text-secondary-color text-sm"
            options={[
              { label: "Immediate", value: "Immediate" },
              { label: "One Week", value: "One Week" },
              { label: "One Month", value: "One Month" },
            ]}
          />

          <div></div>

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
          rules={[{ required: true, message: "Bio is required" }]}
          label="Bio"
          placeholder="Enter your bio"
          Typolevel={5}
          labelClassName="!font-medium !text-secondary-color text-sm"
          inputClassName="!py-3"
        />

        {/* ===================== CV UPLOAD (PDF Only) ===================== */}
        <div className="mt-10">
          {myProfileData?.candidateProfileId?.cv && (
            <div className="mb-5">
              <h2 className="text-lg font-semibold text-secondary-color">
                Your CV
              </h2>
              <ReuseButton
                variant="secondary"
                className="mt-3 !w-fit"
                onClick={() =>
                  openViewCVModal(myProfileData?.candidateProfileId)
                }
              >
                View CV
              </ReuseButton>
            </div>
          )}

          <ReuseUpload
            Typolevel={5}
            label={
              myProfileData?.candidateProfileId?.cv
                ? "Or Replace CV"
                : "Upload CV"
            }
            name="cv"
            accept=".pdf"
            maxCount={1}
            rules={[
              {
                required: !myProfileData?.candidateProfileId?.cv,
                message: "CV is required",
              },
            ]}
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

      <ViewCVModal
        isViewCVModalVisible={isViewCVModalVisible}
        handleCancel={handleCancel}
        currentRecord={currentRecord}
      />
    </div>
  );
};

export default MyProfile;
