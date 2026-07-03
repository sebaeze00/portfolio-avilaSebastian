import SearchUsers from "../components/practice/SearchUsers";
import AnimatedSection from "../components/ui/AnimatedSection";
import Button from "../components/ui/Button";
import Divisor from "../components/ui/Divisor";
import Text from "../components/ui/Text";
import { useLanguage } from "../context/LanguageContext";
import {
  PracticeSearch,
  PracticeText,
  TitleProject,
} from "../transations/GlobalTexts";

const Practice = () => {
  const { language } = useLanguage();
  return (
    <>
      <section className="w-full">
        <AnimatedSection initialY={-40}>
          <Text as="h1" className="sm:text-5xl text-4xl font-bold text-center">
            {PracticeText[language].title}
          </Text>
        </AnimatedSection>

        <SearchUsers />
      </section>

      <AnimatedSection className="mt-6 mb-8 flex justify-center " initialX={40}>
        <Button to="/" className="button-primary mt-6 ">
          {TitleProject[language].button}
        </Button>
      </AnimatedSection>
    </>
  );
};

export default Practice;
