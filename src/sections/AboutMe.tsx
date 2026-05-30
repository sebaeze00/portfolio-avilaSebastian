import Text from "../components/ui/Text";
import {
  AboutMeSectionText,
} from "../transations/GlobalTexts";
import { useLanguage } from "../context/LanguageContext";
import Card from "../components/ui/Card";
import AnimatedSection from "../components/ui/AnimatedSection";

const AboutMe = () => {
  const { language } = useLanguage();

  return (
    <>
      <section className="py-12">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Left */}

          <AnimatedSection initialX={-40}>
            <Text as="p" className="accent font-semibold mb-2">
              {AboutMeSectionText[language].aboutMe}
            </Text>

            <Text as="h2" className="sm:text-4xl text-2xl font-bold mb-6">
              {AboutMeSectionText[language].description}
            </Text>

            <Text as="p" className="text-secondary leading-8">
              {AboutMeSectionText[language].myExp}
            </Text>
          </AnimatedSection>

          {/* Right */}

          <AnimatedSection
            className="grid grid-cols-1 xl:grid-cols-2 gap-4"
            initialX={40}
          >
            <Card
              title={AboutMeSectionText[language].react}
              content={AboutMeSectionText[language].reactDescription}
            />

            <Card
              title={AboutMeSectionText[language].typescript}
              content={AboutMeSectionText[language].typescriptDescription}
            />

            <Card
              title={AboutMeSectionText[language].tailwind}
              content={AboutMeSectionText[language].tailwindDescription}
            />

            <Card
              title={AboutMeSectionText[language].backend}
              content={AboutMeSectionText[language].backendDescription}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
