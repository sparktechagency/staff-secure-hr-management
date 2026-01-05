"use client";
import { usePathname, useRouter } from "next/navigation";
import Container from "../ui/Container";
import Image from "next/image";
import { Form, FormInstance } from "antd";
import Link from "next/link";
import { AllImages } from "../../../public/assets/AllImages";
import ReuseInput from "../ui/Form/ReuseInput";
import ReuseButton from "../ui/Button/ReuseButton";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { registerUser } from "@/services/AuthService";
import Cookies from "js-cookie";

interface SignUpValues {
  name: string;
  companyName?: string;
  location?: string;
  area?: string;
  postalCode?: string;
  county?: string;
  designation?: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const inputStructure = [
  {
    name: "name",
    type: "text",
    inputType: "normal",
    label: "Full Name",
    placeholder: "Enter your full name",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Full name is required" }],
  },
  {
    name: "companyName",
    type: "text",
    inputType: "normal",
    label: "Company Name",
    placeholder: "Enter your Company Name",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Company Name is required" }],
  },
  {
    name: "email",
    type: "email",
    inputType: "normal",
    label: "Email",
    placeholder: "Enter Email Name",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Email is required" }],
  },
  {
    name: "phone",
    type: "number",
    inputType: "normal",
    label: "Telephone Number",
    placeholder: "Enter Telephone Number",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Telephone Number is required" }],
  },
  {
    name: "designation",
    type: "text",
    inputType: "normal",
    label: "Occupation",
    placeholder: "Enter Occupation",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Occupation is required" }],
    showForCandidate: true,
  },
  {
    name: "location",
    type: "text",
    inputType: "normal",
    label: "Location",
    placeholder: "Enter Location",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Location is required" }],
    showForCandidate: true,
  },
  {
    name: "area",
    type: "text",
    inputType: "normal",
    label: "Town",
    placeholder: "Enter Town",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Town is required" }],
    showForCandidate: true,
  },
  {
    name: "county",
    type: "text",
    inputType: "normal",
    label: "County",
    placeholder: "Enter County",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "County is required" }],
    showForCandidate: true,
  },
  {
    name: "postalCode",
    type: "text",
    inputType: "normal",
    label: "Postal Code",
    placeholder: "Enter Postal Code",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Postal Code is required" }],
    showForCandidate: true,
  },
  {
    name: "password",
    type: "password",
    inputType: "password",
    label: "Password",
    placeholder: "Enter your password",
    labelClassName: "!font-semibold",
    rules: [{ required: true, message: "Password is required" }],
  },
  {
    name: "confirmPassword",
    type: "password",
    inputType: "password",
    label: "Confirm Password",
    placeholder: "Confirm your password",
    labelClassName: "!font-semibold",
    rules: [
      { required: true, message: "Confirm Password is required" },
      ({
        getFieldValue,
      }: {
        getFieldValue: FormInstance["getFieldValue"];
      }) => ({
        validator(_: unknown, value: string) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }
          return Promise.reject(new Error("Password does not match!"));
        },
      }),
    ],
  },
];

const SignUp = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const path = usePathname();

  const currentPath: string = path?.split("/")?.[2];
  console.log(currentPath);
  const onFinish = async (values: SignUpValues) => {
    const dataForEmployer = {
      name: values?.name,
      companyName: values?.companyName,
      role: currentPath,
      email: values?.email,
      phone: values?.phone,
      password: values?.confirmPassword,
    };

    const dataForCandidate = {
      name: values?.name,
      email: values?.email,
      location: values?.location,
      area: values?.area,
      postalCode: values?.postalCode,
      county: values?.county,
      designation: values?.designation,
      role: currentPath,
      phone: values?.phone,
      password: values?.confirmPassword,
    };

    const res = await tryCatchWrapper(
      registerUser,
      {
        body: currentPath === "candidate" ? dataForCandidate : dataForEmployer,
      },
      "Creating account...",
      "OTP sent To your email!"
    );
    if (res?.success) {
      if (currentPath === "employer") {
        Cookies.set("staffSecureEmployerIsSubscribedEmail", values?.email);
      }
      form.resetFields();

      router.push(`/join/${currentPath}/otp-verify`);
    }
  };
  return (
    <div className="text-base-color flex items-center justify-center">
      <Container>
        <div className=" min-h-screen flex justify-center items-center py-20">
          <div className="w-full md:w-[80%] lg:w-[670%] xl:w-[60%] mx-auto">
            <Image
              src={AllImages.logo}
              width={500}
              height={500}
              className="w-64 mx-auto"
              alt="logo"
            />
            {/* -------- Sign In Page Header ------------ */}
            <div className="flex flex-col justify-center items-center mb-10">
              <div className="text-center mt-5">
                <h1
                  className="text-2xl sm:text-3xl font-semibold 
               text-secondary-color mt-7 "
                >
                  Create an account
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-base-color my-2">
                  Enter the following details carefully to create your account
                </p>
              </div>
            </div>
            {/* -------- Form Start ------------ */}

            <Form
              form={form}
              layout="vertical"
              className="bg-transparent w-full"
              onFinish={onFinish}
            >
              <div
                className={`grid grid-cols-1 gap-5 ${currentPath === "candidate"
                  ? "lg:grid-cols-2"
                  : "lg:grid-cols-2"
                  }`}
              >
                {inputStructure
                  .filter((input) => {
                    // Hide companyName for candidate
                    if (
                      currentPath === "candidate" &&
                      input.name === "companyName"
                    ) {
                      return false;
                    }
                    // Hide location and designation for employer
                    if (
                      currentPath === "employer" &&
                      input.showForCandidate
                    ) {
                      return false;
                    }
                    return true;
                  })
                  .map((input, index) => (
                    <ReuseInput
                      key={index}
                      name={input.name}
                      Typolevel={5}
                      inputType={input.inputType}
                      type={input.type}
                      // prefix={input.prefix}
                      label={input.label}
                      placeholder={input.placeholder}
                      labelClassName={input.labelClassName}
                      inputClassName="!py-2.5"
                      rules={input.rules}
                    />
                  ))}
              </div>
              <Form.Item>
                <ReuseButton
                  htmlType="submit"
                  variant="secondary"
                  className="mt-5"
                >
                  Sign Up
                </ReuseButton>
              </Form.Item>
            </Form>

            <p className="text-center text-ellipsis mt-5">
              Already have an account?
              <span>
                <Link
                  href="/sign-in"
                  className="text-secondary-color font-semibold underline ml-2"
                >
                  Sign In
                </Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default SignUp;
