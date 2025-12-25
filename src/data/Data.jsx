import {
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaWordpress,
} from "react-icons/fa6";

import myImage from "@/assets/Logo.png";

export const myInfo = {
  name: "Raneem Kadour",
  jobTitle: [
    "Software Engineer",
    "Front-end Developer",
    "Programmer",
    "Freelancer",
  ],
  image: myImage,
  education: {
    date: "2014 - 2020",
    university: "Damascus University",
    country: "Syria",
    desc: `Bachelor’s degree in Information Engineering ( Software
engineering and information systems) with very good rating, and
general average of 75.26 as a result of the examinations of the
academic year 2020 - 2021.`,
  },
};

export const socialMedia = [
  {
    icon: <FaInstagram />,
    link: "www.instagram.com",
  },
  {
    icon: <FaXTwitter />,
    link: "www.instagram.com",
  },
  {
    icon: <FaGithub />,
    link: "www.instagram.com",
  },
  {
    icon: <FaLinkedin />,
    link: "www.instagram.com",
  },
  {
    icon: <FaWhatsapp />,
    link: "www.instagram.com",
  },
];

export const myServices = [
  {
    icon: <FaReact size={40} />,
    title: "Front-end",
    desc: "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    icon: <FaWordpress size={40} />,
    title: "WordPress Development",
    desc: "WordPress development services improve business websites.",
  },
];

export const about = [
  {
    title: "age",
    value: "29",
  },
  {
    title: "nationality",
    value: "Syria",
  },
  {
    title: "Residence",
    value: "Qatar",
  },
  {
    title: "Freelance ",
    value: "Available",
  },
];

export const experience = [
  {
    date: "2022 - Present",
    job: "Front-end Developer",
    company: "Freelance",
    desc: "Optimize website and apps performance using latest technology.",
  },
  {
    date: "2019 - 2022",
    job: "Full-stack Developer",
    company: "Mactech - Qatar",
    desc: `I worked as a Full Stack developer, handling front-end and back-end
development, designing websites, and implementing customized
software solutions to meet client needs. My responsibilities included
developing user interfaces, maintaining applications, and building
databases.`,
  },
  {
    date: "2017",
    job: "Web Application Developer",
    company: "APPA - Syria",
    desc: `I completed a long-term internship as a Web Application Developer,
focusing on building dynamic and responsive web apps, analyzing
requirements, and using modern web technologies.`,
  },
];

export const codingList = [
  {
    name: "HTML / CSS",
    number: 95,
  },
  {
    name: "HTML / CSS",
    number: 75,
  },
  {
    name: "HTML / CSS",
    number: 65,
  },
  {
    name: "HTML / CSS",
    number: 90,
  },
];
