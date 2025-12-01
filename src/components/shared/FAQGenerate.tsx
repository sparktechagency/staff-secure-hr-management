"use client";
import React, { useState } from "react";
import Accordion from "../ui/Accordion";

const FAQGenerate = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionsData = [
    {
      title: "How does AI improve the hiring process?",
      content:
        "Staff Secure Ltd has developed a cutting-edge AI technology that introduces a new approach to direct interviewing and vetting. Our system conducts an in-depth analysis of every candidate we promote for your vacancies—ensuring you find the perfect person for each position.",
    },
    {
      title:
        "Can Staff Secure Ltd handle both temporary and full-time recruitment?",
      content:
        "Staff Secure Ltd has developed a cutting-edge AI technology that introduces a new approach to direct interviewing and vetting. Our system conducts an in-depth analysis of every candidate we promote for your vacancies—ensuring you find the perfect person for each position.",
    },
    {
      title: "Does Staff Secure Ltd work with small and private companies?",
      content:
        "Staff Secure Ltd has developed a cutting-edge AI technology that introduces a new approach to direct interviewing and vetting. Our system conducts an in-depth analysis of every candidate we promote for your vacancies—ensuring you find the perfect person for each position.",
    },
    {
      title:
        "How secure are my company and candidate details with Staff Secure Ltd?",
      content:
        "Staff Secure Ltd has developed a cutting-edge AI technology that introduces a new approach to direct interviewing and vetting. Our system conducts an in-depth analysis of every candidate we promote for your vacancies—ensuring you find the perfect person for each position.",
    },
  ];

  return (
    <div>
      {accordionsData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onToggle={() =>
            setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default FAQGenerate;
