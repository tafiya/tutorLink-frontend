export const dynamic = 'force-dynamic';
import Banner from '@/components/home/Banner';
import BenefitsSection from '@/components/home/BeniftSection';
import PersonalizedLearning from '@/components/home/PersonalizedLearning';
import Testimonial from '@/components/home/Testimonial';
import FeaturesSection from '@/components/home/FeaturesSection';
import Parallax from '@/components/home/paralax';
import BlogArticles from '@/components/home/BlogArticles';
import FeatureTutorsWrapper from '@/components/home/FeatureTutors/FeatureTutorsWrapper';

import Community from '@/components/home/Community';
import TutorWorking from '@/components/home/TutorWorking';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturesSection></FeaturesSection>
      <BenefitsSection></BenefitsSection>
      <FeatureTutorsWrapper></FeatureTutorsWrapper>
      <Parallax></Parallax>
      <PersonalizedLearning></PersonalizedLearning>
      <Community></Community>
      <TutorWorking></TutorWorking>
      <BlogArticles></BlogArticles>
      <Testimonial></Testimonial>
    </div>
  );
};

export default HomePage;
