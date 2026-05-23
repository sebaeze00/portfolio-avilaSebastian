import Text from "../components/ui/Text";
import {
  AboutMeText,
  AppContentText,
  AppText,
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
              {AboutMeText[language].title}
            </Text>

            <Text as="h2" className="sm:text-4xl text-2xl font-bold mb-6">
              {AboutMeText[language].myWork}
            </Text>

            <Text as="p" className="text-secondary leading-8">
              {AboutMeText[language].myExp}
            </Text>
          </AnimatedSection>

          {/* Right */}

          <AnimatedSection
            className="grid grid-cols-1 xl:grid-cols-2 gap-4"
            initialX={40}
          >
            <Card
              title={AppText[language].react}
              content={AppContentText[language].react}
            />

            <Card
              title={AppText[language].typescript}
              content={AppContentText[language].typescript}
            />

            <Card
              title={AppText[language].tailwind}
              content={AppContentText[language].tailwind}
            />

            <Card
              title={AppText[language].backend}
              content={AppContentText[language].backend}
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
