import { motion } from "framer-motion";

type typeDivisor = {
  title: string;
};

const Divisor = ({ title }: typeDivisor) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-6 mt-6 flex items-center gap-3"
    >
      <span
        className="h-px flex-1"
        style={{
          background: "linear-gradient(to right, transparent, var(--accent))",
        }}
      />
      <span className="text-sm font-semibold tracking-widest uppercase accent">
        {title}
      </span>
      <span
        className="h-px flex-1"
        style={{
          background: "linear-gradient(to left, transparent, var(--accent))",
        }}
      />
    </motion.div>
  );
};

export default Divisor;
