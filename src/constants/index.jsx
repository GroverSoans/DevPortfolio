import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Robert Butcher",
  info: "Full-stack developer with a flair for graphic design.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Robert Butcher, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "E-commerce Platform",
    subtitle:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: image1,
  },
  {
    title: "Social Media App",
    subtitle:
      "A social media application developed using Next.js and Firebase.",
    image: image2,
  },
  {
    title: "Project Management Tool",
    subtitle: "A project management tool built with Django and PostgreSQL.",
    image: image3,
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image4,
  },
  {
    title: "Weather Dashboard",
    subtitle:
      "A weather dashboard application built with Vue.js and Express.js.",
    image: image5,
  },
  {
    title: "Blog Platform",
    subtitle:
      "A blogging platform developed with Ruby on Rails and PostgreSQL.",
    image: image6,
  },
  {
    title: "Fitness Tracker",
    subtitle: "A fitness tracking app created using Flutter and Firebase.",
    image: image7,
  },
  {
    title: "Recipe Finder",
    subtitle: "A recipe finder application developed with Angular and Node.js.",
    image: image8,
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
