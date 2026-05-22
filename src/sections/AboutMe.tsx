import Text from "../components/ui/Text";
import { motion } from "framer-motion";
import {
  AboutMeText,
  AppContentText,
  AppText,
} from "../transations/GlobalTexts";
import { useLanguage } from "../context/LanguageContext";

const AboutMe = () => {
  const { language } = useLanguage();

  return (
    <>
      <section className="py-12">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Text as="p" className="accent font-semibold mb-2">
              {AboutMeText[language].title}
            </Text>

            <Text as="h2" className="sm:text-4xl text-2xl font-bold mb-6">
              {AboutMeText[language].myWork}
            </Text>

            <Text as="p" className="text-secondary leading-8">
              {AboutMeText[language].myExp}
            </Text>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          >
            <div className="card">
              <Text
                as="h3"
                className="font-bold text-xl sm:text-2xl break-words"
              >
                {AppText[language].react}
              </Text>

              <Text
                as="p"
                className="text-secondary mt-2 text-sm sm:text-base leading-relaxed break-words"
              >
                {AppContentText[language].react}
              </Text>
            </div>

            <div className="card">
              <Text
                as="h3"
                className="font-bold text-xl sm:text-2xl break-words"
              >
                {AppText[language].typescript}
              </Text>

              <Text
                as="p"
                className="text-secondary mt-2 text-sm sm:text-base leading-relaxed break-words"
              >
                {AppContentText[language].typescript}
              </Text>
            </div>

            <div className="card">
              <Text
                as="h3"
                className="font-bold text-xl sm:text-2xl break-words"
              >
                {AppText[language].tailwind}
              </Text>

              <Text
                as="p"
                className="text-secondary mt-2 text-sm sm:text-base leading-relaxed break-words"
              >
                {AppContentText[language].tailwind}
              </Text>
            </div>

            <div className="card">
              <Text
                as="h3"
                className="font-bold text-xl sm:text-2xl break-words"
              >
                {AppText[language].backend}
              </Text>

              <Text
                as="p"
                className="text-secondary mt-2 text-sm sm:text-base leading-relaxed break-words"
              >
                {AppContentText[language].backend}
              </Text>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
