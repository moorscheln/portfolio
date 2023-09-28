import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
  SiC,
  SiIos,
  SiMacos,
  SiWindows,
  SiLinux,
  SiKalilinux,
  SiGit,
  SiArduino,
  SiKicad,
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
  FaHtml5,
  FaCss3,
  FaApple,
  FaTerminal,
  FaBrain,
} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";
import themeattempt from "../styles/themeattempt";
import { SiCplusplus } from "react-icons/si";
import { Icon, IconProps, OmitCommonProps, createIcon } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { SVGProps } from "react";

// const OrcadIcon = (props: JSX.IntrinsicAttributes & OmitCommonProps<SVGProps<SVGSVGElement>, keyof IconProps> & IconProps & { as?: "svg" | undefined; }) => {
//   return (
//     <div>
//       <Icon {...props} >
//         <Image src="../../public/orcad.svg"></Image>
//       </Icon>
//     </div>
//   )
// }



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
      // {
      //   url: "https://www.instagram.com/michael_orscheln/",
      //   icon: <FaInstagram />,
      //   name: "Instagram",
      //   type: "gray"
      // },
      // {
      //   url: "https://twitter.com/MichaelOrscheln",
      //   icon: <FaTwitter />,
      //   name: "Twitter",
      //   type: "twitter",
      // },
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
  url: "./Michael_Orscheln_Resume_IEEE.pdf",
  icon: <CgAlbum />,
  name: "Resume",
};

const softwareStack = [
  {
    name: "C++",
    icon: <SiCplusplus />,
    url: "https://cplusplus.com/",
  },
  {
    name: "C",
    icon: <SiC />,
    url: "https://www.cprogramming.com/",
  },
  {
    name: "Java",
    icon: <FaJava />,
    url: "https://www.java.com/en/",
  },
  {
    name: "Javascript",
    icon: <FaJs />,
    url: "https://www.javascript.com/",
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    url: "https://html.com/",
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
    url: "https://www.w3.org/Style/CSS/",
  },
  {
    name: "React",
    icon: <FaReact />,
    url: "https://reactnative.dev/",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs />,
    url: "https://nextjs.org/",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Git",
    icon: <SiGit />,
    url: "https://git-scm.com/",
  },


];

// const frameworkLibraryStack = [

//   {
//     name: "React",
//     icon: <FaReact  />,
//     url: "https://reactnative.dev/",
//   },
//   {
//     name: "NextJS",
//     icon: <TbBrandNextjs  />,
//     url: "https://nextjs.org/",
//   },
//   {
//     name: "TailwindCSS",
//     icon: <SiTailwindcss  />,
//     url: "https://tailwindcss.com/",
//   },

// ];

const operatingSystemStack = [

  {
    name: "macOS",
    icon: <FaApple />,
    url: "https://www.apple.com/macos/",
  },
  {
    name: "iOS",
    icon: <SiIos />,
    url: "https://www.apple.com/ios/",
  },
  {
    name: "Windows",
    icon: <SiWindows />,
    url: "https://www.microsoft.com/en-us/windows",
  },
  {
    name: "Linux",
    icon: <SiLinux />,
    url: "https://www.linux.org/",
  },
  {
    name: "Unix",
    icon: <FaTerminal />,
    url: "https://unix.org/",
  },
  {
    name: "Kali Linux",
    icon: <SiKalilinux />,
    url: "https://www.kali.org/",
  },


];

const hardwareStack = [

  // {
  //   name: "OrCAD",
  //   icon: <Icon></Icon>,
  //   url: "https://www.orcad.com/",
  // },
  {
    name: "KiCad",
    icon: <SiKicad />,
    url: "https://www.kicad.org/",
  },
  {
    name: "Arduino",
    icon: <SiArduino />,
    url: "https://www.arduino.cc/",
  },
  {
    name: "openBCI",
    icon: <FaBrain />,
    url: "https://openbci.com/",
  },

];

const dataStack = [

  {
    name: "React Native",
    icon: <FaReact />,
    url: "https://cplusplus.com/",
  },

];

const mobileTechStacks = [

  {
    name: "React Native",
    icon: <FaReact />,
    url: "https://cplusplus.com/",
  },

];

const webTechStacks = [
  {
    name: "C++",
    icon: <SiCplusplus />,
    url: "https://cplusplus.com/",
  },
  {
    name: "React",
    icon: <FaReact />,
    url: "https://reactnative.dev/",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs />,
    url: "https://nextjs.org/",
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Javascript",
    icon: <FaJs />,
    url: "https://www.javascript.com/",
  },

  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    url: "https://tailwindcss.com/",
  },

];

const otherTechStacks = [
  // {
  //   name: "CI/CD - Fastlane",
  //   icon: <SiFastlane  />,
  //   url: "https://fastlane.tools/",
  // },
  // {
  //   name: "Firebase",
  //   icon: <SiFirebase  />,
  //   url: "https://firebase.google.com/",
  // },
  {
    name: "Github & GitLab",
    icon: <FaGitAlt />,
    url: "https://www.gitlab.com/",
  },
];

const companies = [
  {
    title: "Repario",
    alt: "Repario Image",
    url: "https://repariodata.com/",
    role: "Digital Forensic Intern",
    skills: ["Forensic Analysis", "Data Recovery", "Documentation", "Reporting", "Cellebrite", "Magnet AXIOM", "EnCase", "Digital Forensics", "Evidence Collection", "Legal Compliance"],
    period: "May 2023 - Aug 2023",
    logo: "/ReparioLogo.png",
  },
  {
    title: "SALTO Systems",
    alt: "salto image",
    url: "https://saltosystems.com/en/",
    role: "Business Development Intern",
    skills: ["Electronic Locks", "Legal", "Manufacturing", "Photoshop", "Rise360", "Spanish"],
    period: "Jun 2022 - Aug 2022",
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
    link: "https://github.com/moorscheln/CS101/tree/main/project3",
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
    // link: "https://github.com/moorscheln/CS101/tree/main/project4",

  },
];

export {
  menuLinks,
  softwareStack,
  operatingSystemStack,
  hardwareStack,
  dataStack,
  webTechStacks,
  mobileTechStacks,
  otherTechStacks,
  siteConfig,
  resume,
  companies,
  educations,
  sideProjects,
};
