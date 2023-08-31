import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../..//public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../..//public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Completed a course in js",
    description:
      "I Completed course after 2 months of studying. Started doing pet projects ",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Freelance Front-End Developer",
    description:
      "I worked as a front-end developer in freelance for 3 months. Made a lot of interesting projects",
    icon: React.createElement(CgWorkAlt),
    date: "2023 spring",
  },
  {
    title: "Frontend",
    description:
      "I'm now a Frontend developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 summer - present",
  },
] as const;

export const projectsData = [
  {
    title: "Invest Base",
    description:
      "Whether you’re building your first portfolio or you’ve been in crypto for years, Path aims to give you a simpler, smarter way to invest in digital assets.",
    tags: ["React", "GSAP", "Web 3.0", "Styled components"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Coffee Shop",
    description:
      "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. ",
    tags: ["React", "Styled components", "React Transition"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Mood Calendar",
    description:
      "A calendar is a powerful tool for organizing your schedule, events, and tasks.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Zustand",
  "Framer Motion",
] as const;
