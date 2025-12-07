import JobCard from "@/components/shared/Cards/JobCard";
import SearchInput from "@/components/ui/Form/ReuseSearchInput";
import { IJob } from "@/types";
import React from "react";

const jobListings: IJob[] = [
  {
    _id: "JOB-0001",
    employerId: "EMP-001",

    title: "Frontend React Developer",
    location: "Dhaka, Bangladesh",
    salaryRange: { min: 45000, max: 90000 },
    experience: 1.5,
    lengthOfWork: "Full-Time",
    workersNeeded: 3,

    description:
      "We are looking for a skilled Frontend Developer experienced with React and modern UI frameworks.",
    keyResponsibilities: [
      "Develop responsive UI using React.js",
      "Implement reusable components",
      "Collaborate with designers and backend team",
      "Optimize performance and maintain code quality",
    ],
    requirements: [
      "1+ years of experience with React.js",
      "Knowledge of Redux or RTK Query",
      "Understanding of REST APIs",
    ],
    benefits: [
      "Competitive salary",
      "Lunch & snacks",
      "Yearly bonuses",
      "Flexible working hours",
    ],
    skillsRequired: [
      "React.js",
      "Redux",
      "TypeScript",
      "Tailwind",
      "REST API integration",
    ],

    expireDate: new Date("2026-04-15"),
    status: "active",

    isDeleted: false,
    jobReferralCode: "RC-FE-9832",
    jobType: "Hybrid",
  },

  {
    _id: "JOB-0002",
    employerId: "EMP-002",

    title: "Backend Node.js Engineer",
    location: "Chittagong, Bangladesh",
    salaryRange: { min: 60000, max: 120000 },
    experience: 2,
    lengthOfWork: "Full-Time",
    workersNeeded: 2,

    description:
      "We are hiring a Node.js Backend Engineer to build scalable server-side applications.",
    keyResponsibilities: [
      "Develop secure REST APIs",
      "Integrate databases and cloud services",
      "Write unit tests and maintain code quality",
      "Collaborate with frontend and DevOps team",
    ],
    requirements: [
      "2+ years of experience with Node.js",
      "Experience with Express.js",
      "Knowledge of MongoDB or PostgreSQL",
    ],
    benefits: ["Health insurance", "Yearly tour", "Festival bonus"],
    skillsRequired: ["Node.js", "Express.js", "MongoDB", "JWT", "API Security"],

    expireDate: new Date("2026-05-01"),
    status: "active",

    isDeleted: false,
    jobReferralCode: "RC-NODE-1245",
    jobType: "Remote",
  },

  {
    _id: "JOB-0003",
    employerId: "EMP-003",

    title: "UI/UX Designer",
    location: "Remote",
    salaryRange: { min: 35000, max: 80000 },
    experience: 1,
    lengthOfWork: "Contract",
    workersNeeded: 1,

    description:
      "We are searching for a UI/UX Designer with strong visual sense and prototyping skills.",
    keyResponsibilities: [
      "Design wireframes and mockups",
      "Collaborate with frontend team",
      "Conduct usability testing",
      "Create design systems",
    ],
    requirements: [
      "Strong knowledge of Figma/Adobe XD",
      "Portfolio required",
      "Understanding of UX principles",
    ],
    benefits: ["Remote work", "Project-based bonus"],
    skillsRequired: ["Figma", "UX Research", "Prototyping", "Design Systems"],

    expireDate: new Date("2026-03-20"),
    status: "active",

    isDeleted: false,
    jobReferralCode: "RC-UIUX-9920",
    jobType: "Remote",
  },

  {
    _id: "JOB-0004",
    employerId: "EMP-004",

    title: "Digital Marketing Specialist",
    location: "Sylhet, Bangladesh",
    salaryRange: { min: 30000, max: 70000 },
    experience: 0.5,
    lengthOfWork: "Full-Time",
    workersNeeded: 2,

    description:
      "A Digital Marketing Specialist who can run campaigns, manage ads, and analyze analytics.",
    keyResponsibilities: [
      "Run Facebook & Google Ads campaigns",
      "Research and analyze marketing trends",
      "Optimize conversion rates",
      "Create content strategies",
    ],
    requirements: [
      "Knowledge of Facebook Ads",
      "SEO basics",
      "Analytical mindset",
    ],
    benefits: ["Incentives based on performance", "Festival bonus", "Snacks"],
    skillsRequired: [
      "SEO",
      "Google Analytics",
      "Facebook Ads",
      "Content Strategy",
    ],

    expireDate: new Date("2026-04-10"),
    status: "active",

    isDeleted: false,
    jobReferralCode: "RC-DM-0523",
    jobType: "Onsite",
  },

  {
    _id: "JOB-0005",
    employerId: "EMP-005",

    title: "Mobile App Developer (Flutter)",
    location: "Dhaka, Bangladesh",
    salaryRange: { min: 55000, max: 110000 },
    experience: 2,
    lengthOfWork: "Full-Time",
    workersNeeded: 1,

    description:
      "We are hiring an experienced Flutter developer to build cross-platform mobile applications.",
    keyResponsibilities: [
      "Develop high-performance apps with Flutter",
      "Integrate REST APIs",
      "Maintain and improve existing apps",
      "Collaborate with design and backend teams",
    ],
    requirements: [
      "2+ years experience with Flutter",
      "Experience with Firebase",
    ],
    benefits: ["Health insurance", "Performance bonus", "Yearly tour"],
    skillsRequired: ["Flutter", "Firebase", "Dart", "REST APIs"],

    expireDate: new Date("2026-06-30"),
    status: "active",

    isDeleted: false,
    jobReferralCode: "RC-FLT-7712",
    jobType: "Hybrid",
  },
];

const JobBoardPage = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-base-color mb-8">
        Job Board
      </h1>
      <div className="flex items-center gap-4">
        <SearchInput
          placeholder="e,g. electrician, forklift, plumbing"
          className="lg:!w-lg gap-0 "
          label="Search Jobs"
          isPage={false}
          formClassName="lg:!w-lg !-mb-2 !h-fit"
          inputClassName="lg:!w-lg !bg-[#EFEFEF] text-base-color !py-3 !px-2 w-full !mb-0"
        />
        <SearchInput
          placeholder="e,g. London, Manchester, Leeds"
          className="lg:!w-lg gap-0 "
          label="Location"
          paramName="location"
          isPage={false}
          formClassName="lg:!w-lg !-mb-2 !h-fit"
          inputClassName="lg:!w-lg !bg-[#EFEFEF] text-base-color !py-3 !px-2 w-full !mb-0"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {jobListings.map((job) => (
          <JobCard key={job?._id} data={job} variant="simple" />
        ))}
      </div>
    </div>
  );
};

export default JobBoardPage;
