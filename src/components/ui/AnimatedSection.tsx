import { motion } from "framer-motion";
import type { AnimatedSectionProps } from "../../types/AnimatedSectionProp";

const AnimatedSection = ({
  children,
  className,
  initialX = 0,
  initialY = 0,
  duration = 0.7,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{ duration }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
