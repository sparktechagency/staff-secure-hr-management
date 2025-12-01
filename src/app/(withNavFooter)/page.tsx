import AboutUsHome from "@/components/Home/AboutUsHome";
import Banner from "@/components/Home/Banner";
import IndustriesWeServe from "@/components/Home/IndustriesWeServe";
import Testimonial from "@/components/Home/Testimonial";
import TransformYourHiring from "@/components/Home/TransformYourHiring";
import WeSpecialiseIn from "@/components/Home/WeSpecialiseIn";
import FAQ from "@/components/shared/FAQ";
import Container from "@/components/ui/Container";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Container>
        <WeSpecialiseIn />
        <AboutUsHome />
        <Testimonial />
        <IndustriesWeServe />
        <FAQ />
        <TransformYourHiring />
      </Container>
    </div>
  );
};

export default HomePage;
