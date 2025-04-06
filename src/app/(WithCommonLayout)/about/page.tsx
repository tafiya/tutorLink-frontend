import AboutBanner from "@/components/about/AboutBanner";
import EduAllSection from "@/components/about/EduAllSection";
import InstructorsSection from "@/components/about/InstructorsSection";
import StatsSection from "@/components/about/StatsSection";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonial from "@/components/home/Testimonial";

const AboutPage = () => {
  return (
    <div className="">
      <AboutBanner></AboutBanner>
      <EduAllSection></EduAllSection>
      <StatsSection></StatsSection>
      <InstructorsSection></InstructorsSection>
      <HowItWorks></HowItWorks>
      <Testimonial></Testimonial>
    </div>
  );
};

export default AboutPage;
