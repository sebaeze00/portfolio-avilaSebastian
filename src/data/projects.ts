export type ValtechProjectId = "omint" | "prisma" | "gepp";

export type ArbustaProjectId = "arbusta";

export interface ProjectValtech {
  idValtech: ValtechProjectId;
  technologies: string[];
}

export interface ProjectArbusta {
  idArbusta: ArbustaProjectId;
  technologies: string[];
}

export const projectsValtech: ProjectValtech[] = [
  {
    idValtech: "omint",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Styled Components",
      "Formik",
      "Bitbucket",
      "Api",
    ],
  },

  {
    idValtech: "prisma",
    technologies: ["React", "Tailwind CSS", "Axios", "Api"],
  },

  {
    idValtech: "gepp",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Strapi CMS"],
  },
];

export const projectsArbusta: ProjectArbusta[] = [
  {
    idArbusta: "arbusta",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
];
