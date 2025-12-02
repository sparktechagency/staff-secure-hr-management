import React from "react";
import SectionHeader from "../shared/SectionHeader";
import FeaturedDetailCard, {
  FeaturedDetailCardData,
} from "../shared/Cards/FeaturedDetailCard";
import { ThunderboltOutlined, RiseOutlined } from "@ant-design/icons";
import { LuShield } from "react-icons/lu";

const data: FeaturedDetailCardData[] = [
  {
    variant: "white",
    icon: <ThunderboltOutlined />,
    title: "Small Businesses",
    subTitle: "Simple, smart HR — without the overhead.",
    description:
      " For start-ups and small teams, we remove the complexity of hiring and compliance. Our pay-as-you-grow packages give you professional HR support without the need for a dedicated department.",
  },
  {
    variant: "white",
    icon: <RiseOutlined />,
    title: "Medium Businesses",
    subTitle: "Scalable HR solutions to support your growth.",
    description:
      " Growing organisations need structure and visibility. Our AI platform automates repetitive HR work, ensures compliance, and helps you manage expanding teams with confidence.",
  },
  {
    variant: "white",
    icon: <LuShield />,
    title: "Large Enterprises",
    subTitle: "Enterprise-level control with complete transparency.",
    description:
      " For national and multi-site corporations, Staff Secure centralises every HR operation — from recruitment to retention — across branches and departments.",
  },
];

const SolutionsEveryScale = () => {
  return (
    <div className="py-20 ">
      <SectionHeader
        title="Solutions for Every Scale"
        description="From start-ups to enterprises, our platform grows with your business."
      />
      <div className="mt-10 space-y-5">
        {data.map((item, index) => (
          <FeaturedDetailCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SolutionsEveryScale;
