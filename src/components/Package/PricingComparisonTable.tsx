// components/PricingComparisonTable.tsx
import { cn } from "@/lib/utils";

import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import SectionHeader from "../shared/SectionHeader";
export default function PricingComparisonTable() {
  const features = [
    {
      name: "Monthly CVs",
      bronze: "3",
      platinum: "10",
      diamond: "Unlimited",
      highlight: false,
    },
    {
      name: "Support Response Time",
      bronze: "24-48 hours",
      platinum: "12-24 hours",
      diamond: "2 hours",
      highlight: true,
    },
    {
      name: "Support Channels",
      bronze: "X",
      platinum: "Email, Chat",
      diamond: "Email, Chat",
      highlight: false,
    },
    {
      name: "Dedicated Account Manager",
      bronze: <IoMdClose className="mx-auto size-5 text-gray-400" />,
      platinum: <IoMdClose className="mx-auto size-5 text-gray-400" />,
      diamond: <FaRegCircleCheck className="mx-auto size-5 text-green-500" />,
      highlight: true,
    },
    {
      name: "AI Pay Rate Assistant",
      bronze: <IoMdClose className="mx-auto size-5 text-gray-400" />,
      platinum: <IoMdClose className="mx-auto size-5 text-gray-400" />,
      diamond: <FaRegCircleCheck className="mx-auto size-5 text-green-500" />,
      highlight: false,
    },
    {
      name: "Extended Placement Tracking",
      bronze: <IoMdClose className="mx-auto size-5 text-gray-400" />,
      platinum: <FaRegCircleCheck className="mx-auto size-5 text-green-500" />,
      diamond: <FaRegCircleCheck className="mx-auto size-5 text-green-500" />,
      highlight: true,
    },
    {
      name: "Contract Management",
      bronze: <FaRegCircleCheck className="mx-auto size-5 text-green-500" />,
      platinum: <FaRegCircleCheck className="mx-auto size-5 text-green-500" />,
      diamond: <FaRegCircleCheck className="mx-auto size-5 text-green-500" />,
    },
  ];

  return (
    <div className="py-20">
      <SectionHeader title="Detailed Comparison" />
      <div className="overflow-x-auto border-b border-[#0000001A] -mt-10">
        <table className="w-full border-collapse bg-white ">
          {/* Header */}
          <thead>
            <tr>
              <th className="bg-blue-900 px-8 py-6 text-left text-lg font-semibold text-white rounded-tl-2xl">
                Feature
              </th>
              <th className="bg-blue-900 px-8 py-6 text-center text-lg font-bold text-white">
                Bronze
              </th>
              <th className="bg-blue-900 px-8 py-6 text-center text-lg font-bold text-white">
                Platinum
              </th>
              <th className="bg-blue-900 px-8 py-6 text-center text-lg font-bold text-white rounded-tr-2xl">
                Diamond
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <tr
                key={index}
                className={cn(
                  "transition-colors",
                  feature.highlight && "bg-[#F9FAFB]"
                )}
              >
                {/* Feature Name */}
                <td className="px-8 py-6 text-left font-medium text-gray-900">
                  {feature.name}
                </td>

                {/* Bronze */}
                <td className="px-8 py-6 text-center">
                  {typeof feature.bronze === "string" ? (
                    <span
                      className={cn(
                        "",
                        feature.highlight
                          ? "text-[#0A0A0A] text-lg"
                          : "text-[#0A0A0A]"
                      )}
                    >
                      {feature.bronze}
                    </span>
                  ) : (
                    feature.bronze
                  )}
                </td>

                {/* Platinum */}
                <td className="px-8 py-6 text-center">
                  {typeof feature.platinum === "string" ? (
                    <span
                      className={cn(
                        "",
                        feature.highlight
                          ? "text-[#0A0A0A] text-lg"
                          : "text-[#0A0A0A]"
                      )}
                    >
                      {feature.platinum}
                    </span>
                  ) : (
                    feature.platinum
                  )}
                </td>

                {/* Diamond */}
                <td className="px-8 py-6 text-center">
                  {typeof feature.diamond === "string" ? (
                    <span
                      className={cn(
                        "",
                        feature.highlight
                          ? "text-[#0A0A0A] text-xl"
                          : "text-[#0A0A0A]"
                      )}
                    >
                      {feature.diamond}
                    </span>
                  ) : (
                    feature.diamond
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
