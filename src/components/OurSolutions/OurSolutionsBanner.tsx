import React from "react";
import SectionHeader from "../shared/SectionHeader";
import OurSolutionsAnimatedStates from "./OurSolutionsAnimatedStates";

const OurSolutionsBanner = () => {
  return (
    <div className="pt-40">
      <SectionHeader
        title="Our Solution"
        description="Our HR management platform connects companies with verified employers efficiently and securely, streamlining every step of the recruitment process."
      />
      <OurSolutionsAnimatedStates />
    </div>
  );
};

export default OurSolutionsBanner;
