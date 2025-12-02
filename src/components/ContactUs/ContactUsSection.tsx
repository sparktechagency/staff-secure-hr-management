import React from "react";
import SectionHeader from "../shared/SectionHeader";
import ContactUsForm from "./ContactUsForm";
import ContactInfoSection from "./ContactInfoSection";

const ContactUsSection = () => {
  return (
    <div className="py-20 mt-20">
      <SectionHeader
        title="Get In Touch"
        description="Have questions? We'd love to hear from you. Send us a message and we'll respond Within one working day."
      />
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-5 rounded-2xl border border-[#E1E1E1]">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary-color mb-5">
            Send us a message
          </h3>
          <ContactUsForm />
        </div>
        <div className="">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary-color mb-10">
            Contact Information
          </h3>
          <ContactInfoSection />
        </div>
      </div>

      <div className="mt-20">
        <SectionHeader title="Find Us" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988672637!2d-0.2664034848794909!3d51.528739805029666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a8880ebb3687%3A0x774e8a0a64b1a4b!2sLondon%20City%20Airport!5e0!3m2!1sen!2sbd!4v1764677790532!5m2!1sen!2sbd"
          loading="lazy"
          className="w-full h-[500px] -mt-10"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsSection;
