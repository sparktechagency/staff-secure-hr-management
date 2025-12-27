/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Upload } from "antd";
import { useEffect, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { AllImages } from "../../../../public/assets/AllImages";
import ReusableForm from "@/components/ui/Form/ReuseForm";
import ReuseInput from "@/components/ui/Form/ReuseInput";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { updateProfile } from "@/services/ProfileService/ProfileServiceApi";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { IProfile } from "@/types/profile.type";
import { getServerUrl } from "@/helpers/envConfig";

const inputStructure = [
  {
    name: "name",
    type: "text",
    inputType: "text",
    label: "Full name",
    placeholder: "Enter your full name",
    labelClassName: "!font-medium  !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    rules: [{ required: true, message: "Full name is required" }],
    disable: false,
  },
  {
    name: "email",
    type: "email",
    inputType: "normal",
    label: "Email",
    placeholder: "Enter Email Name",
    labelClassName: "!font-semibold !text-secondary-color",
    inputClassName: "!py-2 !w-full",
    disable: true,
    prefix: <IoMdMail className="mr-1 !text-secondary-color" />,
    rules: [{ required: true, message: "Email is required" }],
  },
  {
    name: "phone",
    type: "number",
    inputType: "normal",
    label: "Telephone Number",
    placeholder: "Enter Telephone Number",
    labelClassName: "!font-semibold",
    prefix: <IoMdMail className="mr-1 !text-secondary-color" />,
    disable: false,
    rules: [{ required: true, message: "Telephone Number is required" }],
  },
];

const EditProfile = ({ myData }: { myData: IProfile }) => {
  const [form] = Form.useForm();
  const serverUrl = getServerUrl();
  const [imageUrl, setImageUrl] = useState<string>(AllImages.dummyProfile?.src);

  const handleImageUpload = (info: any) => {
    if (info.file.status === "removed") {
      setImageUrl(AllImages.dummyProfile?.src); // Reset to null or fallback image
    } else {
      const file = info.file.originFileObj || info.file; // Handle the file object safely
      if (file) {
        setImageUrl(URL.createObjectURL(file)); // Set the preview URL of the selected image
      } else {
      }
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      email: myData?.email,
      name: myData?.name,
      phone: myData?.phone,
    });

    if (myData?.profileImage?.length > 0) {
      setImageUrl(serverUrl + myData?.profileImage);
    } else {
      setImageUrl(AllImages.dummyProfile.src);
    }
  }, [form, myData, serverUrl]);

  const onFinish = async (values: any) => {
    console.log(values);
    const formData = new FormData();

    formData.append(
      "data",
      JSON.stringify({
        name: values?.name,
        phone: values?.phone,
      })
    );

    if (values?.image?.file?.originFileObj) {
      formData.append("image", values?.image?.file?.originFileObj);
    }

    const res = await tryCatchWrapper(
      updateProfile,
      { body: formData },
      "Updating profile...",
      "Profile updated successfully!",
      "Something went wrong! Please try again."
    );

    if (res?.success) {
      form.resetFields();
    }
  };

  return (
    <div className=" mt-10  rounded-xl">
      <div className=" flex justify-start items-center">
        <ReusableForm
          form={form}
          handleFinish={onFinish}
          className="p-10 w-full lg:w-[70%]"
        >
          <div className="mt-5 flex flex-col justify-center items-start gap-x-4">
            <div className=" relative">
              <Image
                width={1000}
                height={1000}
                className="h-40 w-40 relative rounded-full border border-secondary-color object-contain "
                src={imageUrl}
                alt=""
              />
              <Form.Item name="image">
                <Upload
                  customRequest={(options) => {
                    setTimeout(() => {
                      if (options.onSuccess) {
                        options.onSuccess("ok");
                      }
                    }, 1000);
                  }}
                  onChange={handleImageUpload}
                  maxCount={1}
                  accept="image/*"
                  className=" text-start"
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                  listType="picture"
                >
                  <button
                    type="button"
                    style={{
                      zIndex: 1,
                    }}
                    className="bg-primary-color p-2 w-fit h-fit !border-none absolute -top-12 left-[115px] rounded-full cursor-pointer shadow-inner"
                  >
                    <IoCameraOutline className="w-6 h-6 text-secondary-color" />
                  </button>
                </Upload>
              </Form.Item>
            </div>
          </div>

          {inputStructure?.map((input, index) => (
            <ReuseInput
              key={index}
              name={input.name}
              Typolevel={5}
              inputType={input.inputType}
              type={input.type}
              label={input.label}
              placeholder={input.placeholder}
              labelClassName={input.labelClassName}
              inputClassName={input.inputClassName}
              rules={input.rules}
              disabled={input.disable}
            />
          ))}

          <ReuseButton
            htmlType="submit"
            variant="secondary"
            className="w-full mt-4"
          >
            Submit
          </ReuseButton>

          <div className=" text-white mt-5"></div>
        </ReusableForm>
      </div>
    </div>
  );
};
export default EditProfile;
