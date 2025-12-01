import React from "react";
import Container from "../ui/Container";
import FAQGenerate from "./FAQGenerate";

const FAQ = () => {
  return (
    <section
      // id="faq"
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 0.1 }}
      className=" py-20"
    >
      <Container>
        <div className="space-y-5">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 text-secondary-color">
              Frequently asked questions
            </h3>
            <p className="mb-5 text-base lg:text-lg">
              Find quick answers about our HR packages, pay-rate assistant, and
              admin-managed recruitment <br /> all you need to hire smarter and
              faster
            </p>
          </div>
          <div className="">
            <FAQGenerate />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
