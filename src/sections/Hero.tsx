import Text from "../components/ui/Text";
import { useLanguage } from "../context/LanguageContext";
import {
  ProjectTexts,
  SubTitleTexts,
  TitleTexts,
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
            {TitleTexts[language].title}
            <span className="accent">{TitleTexts[language].titleSpan}</span>
          </Text>
        </AnimatedSection>

        <AnimatedSection initialX={40}>
          <Text as="p" className="text-secondary mt-4 max-w-xl">
            {SubTitleTexts[language].title}
          </Text>
        </AnimatedSection>

        <AnimatedSection className="mt-6" initialX={40}>
          <Button to="/projects" className="button-primary mt-6">
            {ProjectTexts[language].title}
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
