// components/PricingCard.tsx
import { cn } from "@/lib/utils";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Image, { StaticImageData } from "next/image";
import PricingCardButton from "./PricingCardButton";
import { formatDate } from "@/utils/dateFormet";
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { useGetUserData } from "@/context/useGetUserData";

export interface IPricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  badge?: string; // e.g. "Most Popular"
  icon: StaticImageData | string;
  popular?: boolean;
}

interface PricingCardProps {
  plan: IPricingPlan;
  myPackage?: boolean;
  autoRenewal?: boolean;
  expired?: string;
  purchased?: string;
  openModal?: (plan: IPricingPlan) => void;
  openCancelModal?: () => void;
}

export default function PricingCard({
  plan,
  myPackage = false,
  autoRenewal = false,
  // expired = "",
  purchased = "",
  openModal = () => { },
  openCancelModal = () => { },
}: PricingCardProps) {
  const {
    name,
    price,
    description,
    features,
    badge,
    icon,
    popular = false,
  } = plan;
  const user = useGetUserData();

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl border-2 bg-white transition-all duration-300 px-4 sm:px-6 lg:px-8 ",
        popular
          ? "border-secondary-color shadow-2xl -mt-10 "
          : "border-[#0000001A] "
      )}
    >
      {/* Most Popular Badge */}
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-[#1C398E] px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
            {badge}
          </span>
        </div>
      )}
      {/* Icon + Plan Name */}
      <div className="pt-10">
        <Image
          src={icon}
          alt={name}
          width={100}
          height={100}
          className="w-auto h-32 mx-auto"
        />

        <div className="mt-5">
          {" "}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#162456]">
            {name}
          </h3>
          <div className="mt-4 flex items-baseline text-[#162456]">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black ">
              £{price}<span className="text-sm sm:text-base lg:text-lg">{" "}per month</span>
            </span>
          </div>
          <p className="mt-3 text-xs sm:text-sm lg:text-base text-[#162456]">

          </p>
          <p className="mt-3 text-base sm:text-lg lg:text-xl text-[#162456]">
            {description}
          </p>
        </div>
      </div>
      {myPackage && (
        <div className="mt-2 ">
          <p className="text-xs sm:text-sm lg:text-base">
            <span className="font-medium text-success">Purchased:</span>{" "}
            {formatDate(purchased)}
          </p>
          {/* <p className="text-xs sm:text-sm lg:text-base">
            <span className="font-medium text-error">Expired:</span>{" "}
            {formatDate(expired)}
          </p>{" "} */}
        </div>
      )}

      {/* Features List */}
      <ul className="mt-8 flex-1 space-y-4 pb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            {feature.included ? (
              <FaRegCircleCheck className="mt-0.5 size-6 shrink-0 text-green-500" />
            ) : (
              <IoMdClose className="mt-0.5 size-6 shrink-0 text-gray-300" />
            )}
            <span
              className={cn(
                "text-base leading-relaxed",
                feature.included ? "text-[#364153]" : "text-[#99A1AF]"
              )}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      {!user ? <ReuseButton url="/join/employer" variant="secondary" className="mb-5! w-full! rounded-xl! px-8! py-6! font-semibold! text-white!">Subscribe →</ReuseButton> :
        user?.role === "employer" &&
        <div className="pb-10">
          {myPackage ? <div>{autoRenewal ? <ReuseButton onClick={() => openCancelModal()} variant="secondary">Turn Off Auto Renew</ReuseButton> : <ReuseButton className="cursor-default!">Auto Renew Off</ReuseButton>}</div> : <PricingCardButton plan={plan} openModal={openModal} />}
        </div>
      }

    </div>
  );
}
