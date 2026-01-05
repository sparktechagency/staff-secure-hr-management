"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// components/JobCard.tsx
import {
  MdLocationOn,
  MdAccessTime,
  MdOutlineModeEditOutline,
  MdDeleteOutline,
} from "react-icons/md";
import { cn } from "@/lib/utils";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Dropdown, MenuProps } from "antd";
import { FaRegEye } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { IJob } from "@/types/job.type";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { formatDate } from "@/utils/dateFormet";
import { useGetUserData } from "@/context/useGetUserData";

export default function JobCard({
  data,
  variant,
  viewApplyJob,
  openEditModal,
  openDeleteModal,
}: {
  data: IJob;
  variant?: "simple" | "detailed";
  viewApplyJob?: any;
  openEditModal?: any;
  openDeleteModal?: any;
}) {
  const userData = useGetUserData();
  const {
    title,
    description,
    salaryRange: { min, max },
    postalCode,
    experience,
    workType,
    status,
    lastApplyDate,
    jobReferralCode,
    jobType,
    lengthOfWork,
    paymentType,
    createdAt,
    isApplied,
    totalReceivedCv,
    reviewedCv,
    newCv
  } = data;

  console.log(userData)

  const detailed = variant === "detailed";

  const items: MenuProps["items"] = [
    // {
    //   key: "1",
    //   label:
    //     userData?.role === "candidate" ? (
    //       <Link href="/dashboard/candidate/overview">Candidate Dashboard</Link>
    //     ) : userData?.role === "employer" ? (
    //       <Link href="/dashboard/employer/overview">Employer Dashboard</Link>
    //     ) : (
    //       <></>
    //     ),
    //   icon: <MdOutlineDashboard className="text-secondary-color !text-base" />,
    // },
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            viewApplyJob(data);
          }}
        >
          View Details
        </div>
      ),
      icon: <FaRegEye className="text-secondary-color !text-base" />,
    },
    {
      key: "3",
      label: <div onClick={() => openEditModal(data)}>Edit</div>,
      icon: (
        <MdOutlineModeEditOutline className="text-secondary-color !text-base" />
      ),
    },
    {
      key: "2",
      label: <div onClick={() => openDeleteModal(data)}>Delete</div>,
      icon: <MdDeleteOutline className="text-secondary-color !text-base" />,
    },
  ];
  return (
    <div className="rounded-xl border border-[#E1E1E1] bg-primary-color transition hover:shadow-md p-5 flex flex-col justify-between gap-4">
      <div>
        <div className="flex justify-between items-center gap-2 mb-2">
          <h3
            className={cn(
              "font-bold text-base-color text-lg sm:text-xl lg:text-2xl"
            )}
          >
            {title}
          </h3>

          {!detailed ? (
            status === "New" ? (
              <span className="rounded-full px-3 py-1 text-xs font-bold text-secondary-color border-secondary-color border">
                New
              </span>
            ) : null
          ) : (
            <Dropdown
              menu={{ items }}
              trigger={["hover"]}
              // onOpenChange={(open: boolean) => {
              //   setOpen(open);
              // }}
              placement="bottomRight"
              className="cursor-pointer"
            >
              <HiOutlineDotsVertical className="w-6 h-6 text-black" />
            </Dropdown>
          )}
        </div>{" "}
        <div className="flex items-center gap-1">
          {" "}

          <span className="rounded-full bg-secondary-color px-3 py-1 text-xs lg:text-sm font-bold text-primary-color">
            {lengthOfWork && workType === "Temporary" ? workType + " - " + lengthOfWork : workType}
          </span>
          <span className="rounded-full bg-secondary-color px-3 py-1 text-xs lg:text-sm font-bold text-primary-color">
            {jobType}
          </span>
        </div>
        <p className={cn("text-xs sm:text-sm lg:text-base line-clamp-2 mt-3")}>
          {description?.slice(0, 50) +
            (description?.length > 50 ? "..." : "")}
        </p>
        <div className="mt-4 space-y-2 text-sm">
          {detailed && <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
            <MdLocationOn className="w-5 h-5 text-base-color" />
            Stree Address:  {data?.location}
          </div>}
          <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
            <MdLocationOn className="w-5 h-5 text-base-color" />
            County: {data?.county}
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
            <MdLocationOn className="w-5 h-5 text-base-color" />
            Postal Code:  {postalCode?.slice(0, 3)}
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
            {/* <TbCurrencyPound className="w-6 h-6 text-base-color" /> */}
            {paymentType !== "Monthly" ? "Hourly rate: " : "Monthly pay: "}
            £{min} - £{max}
          </div>

          <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
            <FiUsers className="w-5 h-5 text-base-color" />
            Vacancies : {1}
          </div>

          {/* <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
            <TbCurrencyPound className="w-6 h-6 text-base-color" />
            Annual Pay: {annualPay}
          </div>

          <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
            <MdAccessTime className="w-5 h-5 text-base-color" />
            Hourly Required: {hourlyRequired}
          </div> */}

          {experience && (
            <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
              <MdAccessTime className="w-5 h-5 text-base-color" />
              Years of experience: {experience} year
            </div>
          )}

          <div className="space-y-2">

            <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
              <IoCalendarOutline className="w-5 h-5 text-base-color" />
              Last Day to Apply for the position: {formatDate(lastApplyDate)}
            </div>
            {/* <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
              <IoCalendarOutline className="w-5 h-5 text-base-color" />
              Start Date: {formatDate(startDate)}
            </div> */}
          </div>
          {/* <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
              <IoCalendarOutline className="w-5 h-5 text-base-color" />
              Start Time: {startTime}
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
              <IoCalendarOutline className="w-5 h-5 text-base-color" />
              Finish Time: {finishTime}
            </div>
          </div> */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
              <IoCalendarOutline className="w-5 h-5 text-base-color" />
              Posted: {formatDate(createdAt)}
            </div>
            <div className="text-xs sm:text-sm lg:text-base font-medium text-base-color/70">
              Ref: {jobReferralCode}
            </div>
          </div>

          <div className="h-0.5 w-[95%] mx-auto bg-[#E1E1E1] my-5"></div>
          {detailed &&
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div className="space-y-2 p-4 rounded-lg bg-[#F3F3F5] border border-[#E1E1E1]">
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-base-color">CVs received</h3>
                <p className="text-base md:text-lg lg:text-xl font-bold text-base-color">{totalReceivedCv}</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-[#F3F3F5] border border-[#E1E1E1]">
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-base-color">CVs reviewed</h3>
                <p className="text-base md:text-lg lg:text-xl font-bold text-base-color">{reviewedCv}</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-[#F3F3F5] border border-[#E1E1E1]">
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-error">New CVs</h3>
                <p className="text-base md:text-lg lg:text-xl font-bold text-error">{newCv}</p>
              </div>
            </div>
          }

        </div>
      </div>
      {!detailed &&
        (userData?.isCvExist ? (
          <ReuseButton
            onClick={() => {
              viewApplyJob(data);
            }}
            variant="secondary"
            className={`w-full !rounded-lg ${isApplied && "!bg-transparent !border-secondary-color !text-secondary-color"}`}
          >
            {!isApplied ? "Apply" : "Already Applied"}
          </ReuseButton>
        ) : (
          <ReuseButton
            url="/dashboard/candidate/my-profile"
            variant="outline"
            className="w-full !rounded-lg"
          >
            Complete Your Profile
          </ReuseButton>
        ))}
    </div>
  );
}
