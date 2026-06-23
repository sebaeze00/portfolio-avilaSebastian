import Text from "../components/ui/Text";
import { useLanguage } from "../context/LanguageContext";
import {
  ButtonProjects,
  ButtonPractice,
  HeroSecitonText,
} from "../transations/GlobalTexts";
import Button from "../components/ui/Button";
import AnimatedSection from "../components/ui/AnimatedSection";

const Hero = () => {
  const { language } = useLanguage();
  return (
    <section>
      <div className="container-custom">
        <AnimatedSection initialY={-40}>
          <Text as="h1" className="sm:text-5xl text-4xl font-bold">
            {HeroSecitonText[language].title}
            <span className="accent">
              {HeroSecitonText[language].titleSpan}
            </span>
          </Text>
        </AnimatedSection>

        <AnimatedSection initialX={40}>
          <Text as="p" className="text-secondary mt-4 max-w-xl">
            {HeroSecitonText[language].subTitle}
          </Text>
        </AnimatedSection>

        <div className="content-button">
          <AnimatedSection className="mt-6" initialX={40}>
            <Button to="/practice" className="button-primary mt-6">
              {ButtonPractice[language].viewPractice}
            </Button>
          </AnimatedSection>

          <AnimatedSection className="mt-6" initialX={40}>
            <Button to="/projects" className="button-primary mt-6">
              {ButtonProjects[language].viewProject}
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
