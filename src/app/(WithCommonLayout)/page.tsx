export const dynamic = "force-dynamic";
import Banner from "@/components/home/Banner";
import FeatureTutors from "./../../components/home/FeatureTutors/index";
import BenefitsSection from "@/components/home/BeniftSection";
import PersonalizedLearning from "@/components/home/PersonalizedLearning";
import Testimonial from "@/components/home/Testimonial";
import FeaturesSection from "@/components/home/FeaturesSection";
import Parallax from "@/components/home/paralax";
import BlogArticles from "@/components/home/BlogArticles";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturesSection></FeaturesSection>
      <BenefitsSection></BenefitsSection>
      <FeatureTutors></FeatureTutors>
      <Parallax></Parallax>
      <PersonalizedLearning></PersonalizedLearning>
      <BlogArticles></BlogArticles>
      <Testimonial></Testimonial>
    </div>
  );
};

export default HomePage;
