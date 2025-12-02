import WeSpecialiseIn from "@/components/Home/WeSpecialiseIn";
import Container from "@/components/ui/Container";
import CommonUseCase from "@/components/WhoWeHelp/CommonUseCase";
import SolutionsEveryScale from "@/components/WhoWeHelp/SolutionsEveryScale";
import WhoWeHelp from "@/components/WhoWeHelp/WhoWeHelp";
import React from "react";

const page = () => {
  return (
    <div>
      <Container>
        <WhoWeHelp />
        <WeSpecialiseIn />
        <SolutionsEveryScale />
        <CommonUseCase />
      </Container>
    </div>
  );
};

export default page;
