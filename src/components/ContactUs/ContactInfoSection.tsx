import { MdEmail, MdLocationOn, MdAccessTime, MdPhone } from "react-icons/md";
import ContactInfoCard from "../shared/Cards/ContactInfoCard";

const contactInfoList = [
  {
    icon: <MdEmail className="w-6 h-6" />,
    label: "Email",
    value: "karl.fairbrother@staffsecure.ai",
    href: "mailto:karl.fairbrother@staffsecure.ai",
  },
  {
    icon: <MdLocationOn className="w-6 h-6" />,
    label: "Address",
    value: "124–128 City Road, London, England, EC1V 2NX",
    href: "https://maps.google.com/?q=124-128+City+Road+London+EC1V+2NX",
  },
  {
    icon: <MdAccessTime className="w-6 h-6" />,
    label: "Operating Hours",
    value: "Monday – Friday | 9:00 AM – 6:00 PM EST",
  },
  {
    icon: <MdPhone className="w-6 h-6" />,
    label: "Book a meeting",
    value: "Schedule a call with us",
    href: "https://calendly.com/karl-fairbrother-staffsecure/30min",
    variant: "button" as const,
  },
];

export default function ContactInfoSection() {
  return (
    <div className="space-y-4">
      {contactInfoList.map((item, index) => (
        <ContactInfoCard key={index} data={item} />
      ))}
    </div>
  );
}
