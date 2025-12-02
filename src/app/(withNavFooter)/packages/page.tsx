import PackageSection from "@/components/Package/PackageSection";
import PricingComparisonTable from "@/components/Package/PricingComparisonTable";
import Container from "@/components/ui/Container";
import React from "react";

const page = () => {
  return (
    <div>
      <Container>
        <PackageSection />
        <PricingComparisonTable />
      </Container>
    </div>
  );
};

export default page;
