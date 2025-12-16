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
import { TbCurrencyPound } from "react-icons/tb";
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
    location,
    experience,
    workType,
    workersNeeded,
    // status,
    lastApplyDate,
    jobReferralCode,
    jobType,
    createdAt,
  } = data;

  const detailed = variant === "detailed";
  const isNewWithin24Hours = (createdAt: string) => {
    const createdTime = new Date(createdAt).getTime();
    const now = Date.now();

    const diffInHours = (now - createdTime) / (1000 * 60 * 60);

    return diffInHours <= 24;
  };

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
            isNewWithin24Hours(createdAt) ? (
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
            {jobType}
          </span>
          <span className="rounded-full bg-secondary-color px-3 py-1 text-xs lg:text-sm font-bold text-primary-color">
            {workType}
          </span>
        </div>
        <p className={cn("text-xs sm:text-sm lg:text-base line-clamp-2 mt-3")}>
          {description?.slice(0, 100) +
            (description?.length > 100 ? "..." : "")}
        </p>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
            <MdLocationOn className="w-5 h-5 text-base-color" />
            {location}
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
            <TbCurrencyPound className="w-6 h-6 text-base-color" />
            {min} - {max}
          </div>
          {experience && (
            <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
              <MdAccessTime className="w-5 h-5 text-base-color" />
              Experience: {experience}
            </div>
          )}
          {workersNeeded && (
            <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
              <FiUsers className="w-5 h-5 text-base-color" />
              Position : {workersNeeded}
            </div>
          )}{" "}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
              <IoCalendarOutline className="w-5 h-5 text-base-color" />
              Posted: {formatDate(createdAt)}
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm lg:text-base font-medium">
              <IoCalendarOutline className="w-5 h-5 text-base-color" />
              Last Date: {formatDate(lastApplyDate)}
            </div>
          </div>
          <div className="text-xs sm:text-sm lg:text-base font-medium mt-5 text-base-color/70">
            Ref: {jobReferralCode}
          </div>
        </div>
      </div>
      {!detailed &&
        (userData?.candidateProfileId ? (
          <ReuseButton
            onClick={() => {
              viewApplyJob(data);
            }}
            variant="secondary"
            className="w-full !rounded-lg"
          >
            Apply
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
