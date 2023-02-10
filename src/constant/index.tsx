import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAndroid,
  FaJava,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaSass,
  FaInstagram,
} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";
import themeattempt from "../styles/themeattempt";

const menuLinks = [
  { name: "About", route: "/about" },
  { name: "Experience", route: "/experience" },
  { name: "Projects", route: "/projects" },
  { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Michael Orscheln. All Rights Reserved.`,
  author: {
    name: "Michael Orscheln",
    accounts: [
      {
        url: "https://www.instagram.com/michael_orscheln/",
        icon: <FaInstagram />,
        name: "Instagram",
        type: "gray"
      },
      {
        url: "https://twitter.com/MichaelOrscheln",
        icon: <FaTwitter />,
        name: "Twitter",
        type: "twitter",
      },
      {
        url: "https://github.com/moorscheln",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/michaelorscheln/",
        icon: <FaLinkedin />,
        name: "LinkedIn",
        type: "linkedin",
      },
      {
        url: "mailto:michaelorscheln@gmail.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  url: "./Michael_Orscheln_Resume.pdf",
  icon: <CgAlbum />,
  name: "Resume",
};

const mobileTechStacks = [

  {
    name: "React Native",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
  },

];

const webTechStacks = [
  {
    name: "React",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactnative.dev/",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs fontSize="20px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "Typescript",
    icon: <SiTypescript fontSize="20px" />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.com/",
  },

  {
    name: "TailwindCSS",
    icon: <SiTailwindcss fontSize="20px" />,
    url: "https://tailwindcss.com/",
  },

];

const otherTechStacks = [
  // {
  //   name: "CI/CD - Fastlane",
  //   icon: <SiFastlane fontSize="20px" />,
  //   url: "https://fastlane.tools/",
  // },
  // {
  //   name: "Firebase",
  //   icon: <SiFirebase fontSize="20px" />,
  //   url: "https://firebase.google.com/",
  // },
  {
    name: "Github & GitLab",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://www.gitlab.com/",
  },
];

const companies = [
  {
    title: "SALTO Systems",
    alt: "salto image",
    url: "https://saltosystems.com/en/",
    role: "Business Development Intern",
    skills: ["Electronic Locks", "Legal", "Manufacturing", "Photoshop", "Rise360", "Spanish"],
    period: "Oct 2022 - Present",
    logo: "/salto.png",
  },
  {
    title: "Charter Capital Management, Inc,",
    alt: "CCM image",
    url: "https://chartercm.com/",
    role: "Associate Intern",
    skills: [
      "Real Estate",
      "Web Development",
      "Investment Banking",
    ],
    period: "May 2021 - June 2021",
    logo: "/ccm.png",
  },

];

const educations = [
  {
    title: "University of Alabama",
    alt: "UA Image",
    url: "https://www.ua.edu",
    role: "Bachelor's Degree in Computer Engineering",
    skills: ["Computer Science", "Mathematics", "Spanish", "STEM Path to MBA"],
    period: "August 2020 - May 2024",
    logo: "/ua.png",
  },

];

const sideProjects = [
  {
    name: "Contact Book",
    imageUrl: "/filehandling.png",
    alt: "Contact Book",
    summary:
      "Contact book made in C",
    link: "https://nextjs-3commasclub-frontend.vercel.app/",
    tech: [
      'C++',
    ]
  },
  {
    name: "Huffman Compression Encoder",
    imageUrl: "/huff.png",
    alt: "huffmancompression",
    summary: "This project is about encoding data using a Huffman Compression algorithm",
    tech: [
      "C++",
      "Data Structures",
      "Algorithms"
    ],
    link: "https://github.com/moorscheln/CS101/tree/main/project5"
  },
  {
    name: "Hash Table — Data Retrieval",
    imageUrl: "/hashtable.png",
    alt: "hashtable",
    summary: "Storing data in a queryable hash table using closed addressing and separate chaining",
    tech: [
      "C++",
      "Data Structures",
      "Algorithms"
    ],
    link: "https://github.com/moorscheln/CS101/tree/main/project4",
  },
  {
    name: "Analog-to-Digital & Digital-to-Analog Conversion using SPI and photocell",
    imageUrl: "/lab8circuit.png",
    alt: "hashtable",
    summary: "This lab introduces a basic analog to digital data conversion using an ADC module on the PIC24 and digital to analog conversion using the SPI-based MAXIM 548 DAC.",
    tech: [
      "PIC24",
      "MAXIM 548 DAC",
      "Serial Peripheral Interface (SPI)"
    ],
    link: "https://github.com/moorscheln/CS101/tree/main/project4",

  },
];

export {
  menuLinks,
  webTechStacks,
  mobileTechStacks,
  otherTechStacks,
  siteConfig,
  resume,
  companies,
  educations,
  sideProjects,
};
