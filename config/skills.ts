import {
  SiMongodb,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiShadcnui,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiReactquery,
  SiMongoose,
  SiClerk,
  SiReacthookform,
  SiGit,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
export interface ISkill {
   name: string;
   description: string;
   icon: React.ComponentType;
   rating: number; // Rating out of 5
}  

export const skills: ISkill[] = [
  {
    name: "Next.js",
    description:
      "Experienced in server-side rendering and static site generation using Next.js.",
    icon: SiNextdotjs,
    rating: 5,
  },
  {
    name: "TypeScript",
    description:
      "Proficient in TypeScript for developing robust and type-safe applications.",
    icon: SiTypescript,
    rating: 5,
  },
  {
    name: "React",
    description:
      "Skilled in building interactive user interfaces with React and its ecosystem.",
    icon: SiReact,
    rating: 5,
  },
  {
    name: "Tailwind CSS",
    description:
      "Proficient in using Tailwind CSS for rapid UI development with utility-first CSS framework.",
    icon: SiTailwindcss,
    rating: 5,
  },
  {
    name: "Node.js",
    description:
      "Proficient in building scalable backend services with Node.js and Express.",
    icon: SiNodedotjs,
    rating: 5,
  },
  {
    name: "MongoDB",
    description:
      "Experienced in designing and managing NoSQL databases using MongoDB.",
    icon: SiMongodb,
    rating: 5,
  },
  {
    name: "Shadcn UI",
    description:
      "Experienced in building responsive and accessible UIs using Shadcn UI components.",
    icon: SiShadcnui,
    rating: 5,
  },
  {
    name: "JavaScript",
    description:
      "Experienced in building dynamic web applications using JavaScript, including ES6+ features.",
    icon: SiJavascript,
    rating: 5,
  },

  {
    name: "Express.js",
    description:
      "Skilled in building RESTful APIs and web applications using Express.js framework.",
    icon: SiExpress,
    rating: 5,
  },

  {
    name: "Firebase",
    description:
      "Skilled in using Firebase services for real-time databases, authentication, and hosting.",
    icon: SiFirebase,
    rating: 4,
  },
  {
    name: "TanStack Query",
    description:
      "Proficient in managing server state and data fetching in React applications using TanStack Query.",
    icon: SiReactquery,
    rating: 4,
  },
  {
    name: "Mongoose",
    description:
      "Experienced in modeling and managing MongoDB data using Mongoose ODM.",
    icon: SiMongoose,
    rating: 5,
  },
  {
    name: "Clerk",
    description:
      "Experienced in implementing custom authentication flows and user management using Clerk.",
    icon: SiClerk,
    rating: 4,
  },
  {
    name: "Framer Motion",
    description:
      "Skilled in creating smooth animations and interactive UIs using Framer Motion.",
    icon: TbBrandFramerMotion,
    rating: 4,
  },
  {
    name: "React Form Hook",
    description:
      "Proficient in managing form state and validation in React applications using React Hook Form.",
    icon: SiReacthookform,
    rating: 4,
  },
  {
    name: "Git & GitHub",
    description:
      "Experienced in version control and collaborative development using Git and GitHub.",
    icon: SiGit,
    rating: 5,
  },
];
   