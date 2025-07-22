//assets
import jsLogo from '../assets/icons/javascript-logo.svg';
import reactLogo from '../assets/icons/react-logo.svg';
import figmaLogo from '../assets/icons/figma-logo.svg';
import gitLogo from '../assets/icons/git-logo.svg';
import mysqlLogo from '../assets/icons/mysql-logo.svg';
import nodeLogo from '../assets/icons/node-logo.svg';
import tailwindLogo from '../assets/icons/tailwind-logo.svg';
import awsLogo from '../assets/icons/aws-logo.svg';
import cssLogo from '../assets/icons/cssLogo.svg'
import htmlLogo from '../assets/icons/htmlLogo.svg'
import mongoDBLogo from '../assets/icons/mongodblogo.svg'
import socketioLogo from '../assets/icons/socketioLogo.svg'
import workoutThumbnail from '../assets/images/workout-program.png'
import chatThumbnail from '../assets/images/chat-app.png'
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaInstagram,
  FaGitAlt,
} from "react-icons/fa";

export const TECHNOLOGIES = [
  {
    icon: jsLogo,
    name: 'JavaScript',
    description: 'Programming Language',
    color: 'rgba(255, 255, 0, 0.2)'
  },
  {
    icon: reactLogo,
    name: 'React',
    description: 'JavaScript Library',
    color: 'rgba(0, 255, 255, 0.2)'
  },
  {
    icon: figmaLogo,
    name: 'Figma',
    description: 'Design Tool',
    color: 'rgba(160, 50, 255, 0.2)'
  },
  {
    icon: gitLogo,
    name: 'Git',
    description: 'Version Control',
    color: 'rgba(255, 30, 0, 0.2)'
  },
  {
    icon: mysqlLogo,
    name: 'MySQL',
    description: 'Relational Database',
    color: 'rgba(0, 128, 255, 0.2)'
  },
  {
    icon: nodeLogo,
    name: 'Node.js',
    description: 'Backend Runtime',
    color: 'rgba(68, 255, 0, 0.2)'
  },
  {
    icon: tailwindLogo,
    name: 'Tailwind CSS',
    description: 'CSS Framework',
    color: 'rgba(0, 200, 255, 0.2)'
  },
  {
    icon: awsLogo,
    name: 'AWS',
    description: 'Cloud Platform',
    color: 'rgba(255, 150, 0, 0.6)'
  },
  {
    icon: htmlLogo,
    name: 'HTML',
    description: 'Markup Language',
    color: 'rgba(228, 77, 38, 0.2)'
  },
  {
    icon: cssLogo,
    name: 'CSS',
    description: 'Styling',
    color: 'rgba(38, 77, 228, 0.2)'
  },
    {
    icon: mongoDBLogo,
    name: 'MongoDB',
    description: 'NoSQL database',
    color: 'rgba(68, 255, 0, 0.2)'
  },
  {
    icon: socketioLogo,
    name: 'Socket.IO',
    description: 'Real time connection',
    color: 'rgba(5, 5, 5, 0.8)'
  },
]

export const NAV_ITEMS = [
  { id: "about",       label: "About"       },
  { id: "projects",    label: "Projects"    },
  { id: "contact",     label: "Contact Me"  },
]

export const SOCIALS = [
  { href: "https://github.com/Ji-Kwon", Icon: FaGithub,    label: "GitHub"    },
  { href: "https://www.linkedin.com/in/jacob-jiwon-wilkinson/", Icon: FaLinkedin,  label: "LinkedIn"  },
];

export const ABOUT_TEXT = [
  "I’m a developer passionate about turning ideas into polished, user-friendly applications from the ground up. I thrive on collaboration, and nothing excites me more than working with a team that’s as passionate about the product as I am. My personal favorite project is a Pokémon battle simulator I built, which I still use every day.",

  " Currently, I am a student at Wilfrid Laurier University, where I founded and and serve as the president of the Korean Students' Association, overseeing everything from event planning to community outreach.",

  "When I'm not coding or leading KSA, you can catch me at the gym, spiking volleyballs, tearing up the ice playing hockey, rock climbing, catching fishing, or snowboarding down some rails."
]

export const PROJECTS = [
  {imageSrc: chatThumbnail,
    title: "Chat Application",
    href: "https://github.com/Ji-Kwon/chat-app",
    description: "A full stack chat application using MERN, Socket.io, TailwindCSS & Daisy UI",
    tags: [
      TECHNOLOGIES.find(t => t.name === "React"),
      TECHNOLOGIES.find(t => t.name === "Node.js"),
      TECHNOLOGIES.find(t => t.name === "MongoDB"),
      TECHNOLOGIES.find(t => t.name === "Socket.IO"),
    ]
  },
  {imageSrc: workoutThumbnail,
    title: "30 Day Workout Program",
    href: "https://30-day-fitness-program.netlify.app/",
    description: "A React-based 30-day fitness program tracker that helps users follow a structured workout plan and save their progress locally.",
    tags: [
      TECHNOLOGIES.find(t => t.name === "React"),
      TECHNOLOGIES.find(t => t.name === "HTML"),
      TECHNOLOGIES.find(t => t.name === "CSS")
    ]
  },
  
]