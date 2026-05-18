import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="text-black">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sm:text-red-400 text-5xl"
      >
        {" "}
        Página Inicial.
      </motion.h1>
    </div>
  );


 {/* Hero - Sobre mi - Skills - Proyectos - Experiencia - Contacto */}

};

export default Home;
