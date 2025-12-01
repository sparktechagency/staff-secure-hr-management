import WeSpecialiseIn from "@/components/Home/WeSpecialiseIn";
import Container from "@/components/ui/Container";
import WhoWeHelp from "@/components/WhoWeHelp/WhoWeHelp";
import React from "react";

const page = () => {
  return (
    <div>
      <Container>
        <WhoWeHelp />
        <WeSpecialiseIn />
      </Container>
    </div>
  );
};

export default page;
