import Banner from "@/components/home/Banner";
import FeatureTutors from './../../components/home/FeatureTutors/index';
import BenefitsSection from "@/components/home/BeniftSection";
import HowItWorks from "@/components/home/HowItWorks";
import PersonalizedLearning from "@/components/home/PersonalizedLearning";
import Testimonial from "@/components/home/Testimonial";
import InstructorSlider from "@/components/home/InstructorSlider";
import FeaturesSection from "@/components/home/FeaturesSection";
import Parallax from "@/components/home/paralax";

const HomePage = () => {

  return (
    <div>
      <Banner></Banner>
      <FeaturesSection></FeaturesSection>
      <BenefitsSection></BenefitsSection>
      <FeatureTutors></FeatureTutors>
      <PersonalizedLearning></PersonalizedLearning>
      <Parallax></Parallax>
      <HowItWorks></HowItWorks>
      <InstructorSlider></InstructorSlider>
      <Testimonial></Testimonial>
    </div>
  );
};

export default HomePage;
