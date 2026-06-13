import AnimatedSection from "../components/ui/AnimatedSection";
import Button from "../components/ui/Button";
import Divisor from "../components/ui/Divisor";
import TechStack from "../components/ui/TechStack";
import Text from "../components/ui/Text";
import { useLanguage } from "../context/LanguageContext";
import { projectsArbusta, projectsValtech } from "../data/projects";
import {
  ArbustaProjectText,
  TitleProject,
  ValtechProjectText,
} from "../transations/GlobalTexts";

const ProjectPage = () => {
  const { language } = useLanguage();

  return (
    <section>
      <AnimatedSection initialY={-40}>
        <Text
          as="h1"
          className="text-3xl sm:text-5xl text-4xl font-bold text-center"
        >
          {TitleProject[language].title}
          <span className="accent">{TitleProject[language].titleSpan}</span>
        </Text>
      </AnimatedSection>

      <AnimatedSection className="mt-6 mb-8 flex justify-center" initialX={40}>
        <Button to="/" className="button-primary mt-6">
          {TitleProject[language].button}
        </Button>
      </AnimatedSection>

      <Divisor title="Valtech S.A 03/2023 - 05/2025 " />

      {projectsValtech.map((projectsValtech) => {
        const text = ValtechProjectText[language][projectsValtech.idValtech];

        return (
          <div key={projectsValtech.idValtech} className="card mb-8">
            <h3 className="text-xl font-semibold mb-2">{text.title}</h3>

            <p className="text-secondary mb-4">{text.summary}</p>

            <TechStack technologies={projectsValtech.technologies} />
          </div>
        );
      })}

      <Divisor title="Arbusta S.R.L 02/2022 - 03/2023" />

      {projectsArbusta.map((projectsArbusta) => {
        const text = ArbustaProjectText[language][projectsArbusta.idArbusta];

        return (
          <div key={projectsArbusta.idArbusta} className="card mb-8">
            <h3 className="text-xl font-semibold mb-2">{text.title}</h3>

            <p className="text-secondary mb-4">{text.summary}</p>

            <TechStack technologies={projectsArbusta.technologies} />
          </div>
        );
      })}

      <AnimatedSection className="mt-6 mb-8" initialX={40}>
        <Button to="/" className="button-primary mt-6">
          {TitleProject[language].button}
        </Button>
      </AnimatedSection>
    </section>
  );
};

export default ProjectPage;
