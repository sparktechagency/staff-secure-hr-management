import AboutUsHome from "@/components/Home/AboutUsHome";
import Banner from "@/components/Home/Banner";
import Testimonial from "@/components/Home/Testimonial";
import WeSpecialiseIn from "@/components/Home/WeSpecialiseIn";
import Container from "@/components/ui/Container";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Container>
        <WeSpecialiseIn />
        <AboutUsHome />
        <Testimonial />
      </Container>
    </div>
  );
};

export default HomePage;
