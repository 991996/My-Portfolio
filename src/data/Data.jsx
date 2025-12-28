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
  aboutMe: `I am a Front-End Developer who enjoys turning ideas into beautiful and functional web interfaces.
I enjoy working with React and Tailwind CSS, and I care deeply about user experience and the small details that make a big difference.`,
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
  address: "Qatar,AL-Doha",
  email: "raneemkador@gmail.com",
  phone: "+97433820090",
};

export const socialMedia = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/rkcode99/",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/991996",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://wa.me/97433820090",
  },
];
// ABOUT
export const myServices = [
  {
    icon: <FaReact size={40} />,
    title: "Front-end",
    desc: "Modern, responsive, and mobile-ready websites designed to help you achieve your marketing goals.",
  },
  {
    icon: <FaWordpress size={40} />,
    title: "WordPress Development",
    desc: "Developing and customizing WordPress websites with a focus on clean design, responsiveness, and ease of use.",
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

// RESUME
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
    name: "Tailwind CSS",
    number: 90,
  },
  {
    name: "Javascript",
    number: 75,
  },
  {
    name: "React",
    number: 80,
  },
];

export const knowledgeList = [
  "Website hosting & domain management",
  "WordPress development",
  "Hosting installation & setup",
  "SEO optimization",
  "Responsive & mobile-ready websites",
  "Client communication & support",
];

export const frontEndList = [
  {
    name: "React",
    value: 80,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "React",
    value: 80,
  },
];

export const languagesList = [
  { name: "Arabic", value: 10 },
  { name: "English", value: 7 },
];

// WORKS
import landingPageImage from "@/assets/landingPage.PNG";
import storeImage from "@/assets/my-store.PNG";
import fastcomImage from "@/assets/fastcom.PNG";
import loungeImage from "@/assets/lounge.PNG";
export const works = [
  {
    id: 1,
    title: "RK Store",
    category: "store",
    img: storeImage,
    link: "https://rk-store-hrzckseq8-rkcodes-projects-64607a7f.vercel.app/",
    size: 2,
  },
  {
    id: 2,
    title: "Fastcom",
    category: "website",
    img: fastcomImage,
    link: "https://fastcom-website.vercel.app/",
    size: 1,
  },
  {
    id: 3,
    title: "Lounge",
    category: "landingPage",
    img: loungeImage,
    link: "https://cafe-website-lounge.vercel.app/",
    size: 3,
  },
  {
    id: 4,
    title: "RK Code",
    category: "landingPage",
    img: landingPageImage,
    link: "https://landing-page-seven-red-25.vercel.app/",
    size: 1,
  },
];
