import { motion } from "framer-motion";
import Text from "../components/Text";
import Button from "../components/Button";

const Home = () => {
  return (
    <section>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text as="h1" className="text-5xl font-bold">
            Hola, soy <span className="accent">Sebastián</span>
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text as="p" className="text-secondary mt-4 max-w-xl">
            Front-end Developer especializado en React y TypeScript. Actualmente
            expandiendo mis conocimientos en backend para convertirme en Full
            Stack Developer.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6"
        >
          <Button to="/projects" className="button-primary mt-6">
            Ver proyectos link
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
