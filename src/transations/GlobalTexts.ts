import type { ValtechProjectId, ArbustaProjectId } from "../data/projects";

type Language = "es" | "en";

interface ProjectTranslation {
  title: string;
  summary: string;
}

// Hero

export const HeroSecitonText = {
  es: {
    title: "Hola, soy ",
    titleSpan: "Sebastian",
    subTitle:
      "Bienvenido a mi portfolio personal. Este proyecto fue diseñado y desarrollado por mí con el objetivo de mostrar quién soy, las tecnologías con las que trabajo y algunos de mis proyectos destacados.",
  },

  en: {
    title: "Hi, I'm ",
    titleSpan: "Sebastian",
    subTitle:
      "Welcome to my personal portfolio. This project was designed and developed by me to showcase who I am, the technologies I work with, and some of my featured projects.",
  },
};

// Button

export const ButtonProjects = {
  es: {
    viewProject: "Ver proyectos",
  },

  en: {
    viewProject: "View projects",
  },
};

export const ButtonPractice = {
  es: {
    viewPractice: "Ver practicas",
  },

  en: {
    viewPractice: "View practice",
  },
};

//About me

export const AboutMeSectionText = {
  es: {
    aboutMe: "Sobre mí",
    description:
      "Desarrollador frontend enfocado en la creación de experiencias web modernas.",
    myExp:
      "Soy desarrollador front-end especializado en React y TypeScript, y me apasiona crear aplicaciones web responsivas y escalables. Actualmente, estoy ampliando mis conocimientos de backend para convertirme en desarrollador full stack.",
    react: "React",
    typescript: "Typescript",
    tailwind: "Tailwind",
    backend: "Backend",
    reactDescription: "Interfaces modernas y escalables",
    typescriptDescription: "Tipado fuerte y código limpio",
    tailwindDescription: "Diseño rápido y adaptable",
    backendDescription: "Aprendiendo Node.js y APIs",
  },

  en: {
    aboutMe: "About Me",
    description:
      "Frontend Developer focused on building modern web experiences",
    myExp:
      "I'm a Front-end Developer specialized in React and TypeScript, passionate about creating responsive and scalable web applications. Currently, I'm expanding my backend knowledge to become a Full Stack Developer.",
    react: "React",
    typescript: "Typescript",
    tailwind: "Tailwind",
    backend: "Backend",
    reactDescription: "Modern and scalable interfaces",
    typescriptDescription: "Strong typing and clean code",
    tailwindDescription: "Fast and responsive styling",
    backendDescription: "Learning Node.js and APIs",
  },
};

//Error page

export const ErrorPageText = {
  es: {
    title: "Ups... esta página no existe o fué eliminada",
    button: "Volver al inicio",
  },

  en: {
    title: "Oops... this page doesn't exist or it's been deleted",
    button: "Back to Home",
  },
};

//Projects

export const TitleProject = {
  es: {
    title: "Experiencia ",
    titleSpan: "Profesional",
    button: "Volver al inicio",
  },

  en: {
    title: "Professional ",
    titleSpan: "Experience",
    button: "Back to Home",
  },
};

export const ValtechProjectText: Record<
  Language,
  Record<ValtechProjectId, ProjectTranslation>
> = {
  es: {
    omint: {
      title: "Omint Digital",
      summary:
        "Durante mi experiencia en Omint Digital, desarrollé y mantuve aplicaciones de la plataforma web y del Backoffice utilizando React, TypeScript, JavaScript, CSS y Styled Components. Construí y refactoricé componentes reutilizables para mejorar la mantenibilidad, escalabilidad y experiencia de usuario en múltiples proyectos. Integré aplicaciones frontend con servicios backend mediante APIs, dando soporte a procesos de negocio y flujos de formularios complejos, mientras gestionaba datos sensibles de usuarios cumpliendo con los requisitos del proyecto y los estándares de calidad. Trabajando dentro de equipos Agile (Scrum), participé activamente en la planificación de sprints, estimación de tareas, reuniones diarias y retrospectivas. También contribuí a todo el ciclo de vida del desarrollo de software, incluyendo la implementación de funcionalidades, pruebas, documentación, revisiones de código y despliegues a producción. Además, gestioné el control de versiones utilizando Git y Bitbucket, colaborando mediante ramas, pull requests y procesos de integración, y participé en reuniones con clientes y actividades de liberación para validar despliegues y garantizar entregas exitosas en producción.",
    },

    prisma: {
      title: "Prisma",
      summary:
        "Durante mi experiencia en Prisma, mantuve y mejoré la plataforma web de la empresa mediante el desarrollo de nuevas funcionalidades y la optimización de componentes existentes utilizando React.js y Tailwind CSS. Construí interfaces responsivas y fáciles de usar, garantizando la consistencia visual y funcional de toda la aplicación. Trabajando en estrecha colaboración con desarrolladores Backend, integré y mantuve APIs REST utilizando Axios para asegurar una comunicación eficiente de los datos. Como parte de un equipo Agile (Scrum), participé en la planificación de sprints, reuniones diarias y seguimiento de tareas. Además, contribuí al mantenimiento del código, corrección de errores, pruebas y mejoras continuas para garantizar la confiabilidad, el rendimiento y la experiencia general de los usuarios en la plataforma.",
    },

    gepp: {
      title: "Gepp",
      summary:
        "Durante mi participación en el proyecto GEPP, contribuí al desarrollo de la aplicación desde cero, implementando nuevas funcionalidades y construyendo interfaces de usuario utilizando Next.js, Styled Components y Framer Motion. Creé experiencias de usuario responsivas e interactivas, integrando y gestionando contenido mediante Strapi CMS para permitir actualizaciones dinámicas y optimizar los procesos de administración de contenido. Trabajé en estrecha colaboración con diseñadores, desarrolladores para entregar soluciones alineadas con los objetivos del negocio y las necesidades de los usuarios. Dentro de un entorno Agile (Scrum), participé activamente en la planificación de sprints, reuniones diarias, revisiones y discusiones del equipo. Además, contribuí a todo el ciclo de vida del desarrollo de software, desde la implementación y las pruebas hasta el despliegue y las mejoras continuas.",
    },
  },

  en: {
    omint: {
      title: "Omint Digital",
      summary:
        "During my time at Omint Digital, I developed and maintained web platform and Backoffice applications using React, TypeScript, JavaScript, CSS, and Styled Components. I built and refactored reusable components to improve maintainability, scalability, and user experience across multiple projects. I integrated frontend applications with backend services through APIs, supporting complex business processes and form workflows, while handling sensitive user data in compliance with project requirements and quality standards. Working within Agile (Scrum) teams, I actively participated in sprint planning, task estimation, daily stand-ups, and retrospectives. I also contributed to the full software development lifecycle, including feature implementation, testing, documentation, code reviews, and production deployments. Additionally, I managed source control using Git and Bitbucket, collaborating through branches, pull requests, and merge processes, and participated in client meetings and release activities to validate deployments and ensure successful production deliveries.",
    },

    prisma: {
      title: "Prisma",
      summary:
        "During my time at Prisma, I maintained and enhanced the company's web platform by developing new features and improving existing components using React.js and Tailwind CSS. I built responsive and user-friendly interfaces while ensuring consistency across the application. Working closely with Backend developers, I integrated and maintained REST APIs using Axios to support seamless data communication. As part of an Agile (Scrum) team, I participated in sprint planning, daily stand-ups, and task tracking. I also contributed to code maintenance, bug fixing, testing, and continuous improvements to ensure the platform's reliability, performance, and overall user experience.",
    },

    gepp: {
      title: "Gepp",
      summary:
        "During my time working on the GEPP project, I contributed to the development of the application from the ground up, implementing new features and building user interfaces using Next.js, Styled Components, and Framer Motion. I created responsive and interactive user experiences while integrating and managing content through Strapi CMS, enabling dynamic content updates and improving content management workflows. I collaborated closely with designers, developers to deliver solutions aligned with business objectives and user needs. Working within an Agile (Scrum) environment, I actively participated in sprint planning, daily stand-ups, reviews, and team discussions. I also contributed throughout the entire software development lifecycle, from implementation and testing to deployment and continuous improvements.",
    },
  },
};

export const ArbustaProjectText: Record<
  Language,
  Record<ArbustaProjectId, ProjectTranslation>
> = {
  es: {
    arbusta: {
      title: "Bootcamp",
      summary:
        "Como Frontend Developer Trainee, completé un programa intensivo de formación enfocado en tecnologías modernas de desarrollo web, incluyendo HTML, CSS, JavaScript, TypeScript y React. A través de ejercicios prácticos y simulaciones de proyectos reales, desarrollé aplicaciones y funcionalidades frontend aplicando buenas prácticas de la industria y flujos de trabajo profesionales. Durante esta experiencia, fortalecí mis habilidades de resolución de problemas y depuración trabajando en tareas colaborativas y desafíos técnicos. También adquirí experiencia en metodologías Agile, trabajo en equipo y fundamentos del desarrollo de software dentro de un entorno profesional. Además, desarrollé habilidades blandas clave como inteligencia emocional, comunicación asertiva, estimación y gestión del tiempo, y colaboración efectiva.",
    },
  },

  en: {
    arbusta: {
      title: "Bootcamp",
      summary:
        "As a Frontend Developer Trainee, I completed an intensive training program focused on modern web development technologies, including HTML, CSS, JavaScript, TypeScript, and React. Through practical exercises and real-world project simulations, I developed frontend applications and features while applying industry best practices and development workflows. During this experience, I strengthened my problem-solving and debugging skills by working on collaborative tasks and technical challenges. I also gained hands-on experience with Agile methodologies, teamwork, and software development fundamentals in a professional environment. Additionally, I enhanced key soft skills such as emotional intelligence, assertive communication, time estimation, time management, and effective collaboration.",
    },
  },
};
