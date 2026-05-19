import { motion } from "framer-motion";
import Text from "../components/Text";
import Button from "../components/Button";

import { useLanguage } from "../context/LanguageContext";
import {
  ProjectTexts,
  SubTitleTexts,
  TitleTexts,
} from "../transations/GlobalTexts";
import LanguageSwitcher from "../components/ButtonLanguage";

const Home = () => {
  const { language } = useLanguage();

  return (
    <section>
      <LanguageSwitcher />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text as="h1" className="text-5xl font-bold">
            {TitleTexts[language].title}
            <span className="accent">{TitleTexts[language].titleSpan}</span>
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text as="p" className="text-secondary mt-4 max-w-xl">
            {SubTitleTexts[language].title}
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6"
        >
          <Button to="/projects" className="button-primary mt-6">
            {ProjectTexts[language].title}
          </Button>
        </motion.div>
      </div>
    </section>
  );

  {
    /* Hero - Sobre mi - Skills - Proyectos - Experiencia - Contacto */
  }
};

export default Home;
