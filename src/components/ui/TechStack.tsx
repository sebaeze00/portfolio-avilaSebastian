import type { TechStackProps } from "../../types/TechStacke";


export default function TechStack({
  technologies,
  className = "",
}: TechStackProps) {
  return (
    <div
      className={`flex flex-wrap gap-2 ${className}`}
      aria-label="Tecnologías utilizadas"
    >
      {technologies.map((tech) => (
        <span
          key={tech}
          className="
            px-3 py-1
            rounded-full
            text-sm
            font-medium
            bg-slate-800/80
            border border-slate-700/50
            text-slate-200
            transition-all duration-300
            hover:border-cyan-400/40
            hover:text-cyan-300
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
}