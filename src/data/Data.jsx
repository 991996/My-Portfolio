import {
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaWordpress,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa6";

import myImage from "@/assets/Logo.png";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export const myInfo = {
  name: "Raneem Kadour",
  aboutMe:
    "I’m a Frontend Developer specializing in React and TypeScript, with a strong interest in building modern, responsive, and user-friendly web applications.\nI enjoy turning ideas and designs into clean, functional interfaces, with a focus on reusable components, responsive layouts, API integration, and a smooth user experience. I also have experience building and customizing WordPress websites and creating websites for different business needs.\nWith a background in Software Engineering and hands-on experience across web development projects, I’m continuously improving my skills and exploring better ways to build scalable and maintainable frontend applications.",
  jobTitle: [
    "Frontend Developer",
    "React Developer",
    "React & TypeScript Developer",
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
    title: "Frontend Development",
    desc: "Building modern, responsive, and user-friendly web applications using React, TypeScript, JavaScript, and Tailwind CSS, with a focus on clean UI and reusable components.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Responsive Web Design",
    desc: "Creating responsive websites that provide a consistent and smooth experience across desktop, tablet, and mobile devices.",
  },
  {
    icon: <FaWordpress size={40} />,
    title: "WordPress Development",
    desc: "Building and customizing WordPress websites with Elementor, focusing on modern design, responsiveness, performance, and easy content management.",
  },
  {
    icon: <FaCode size={40} />,
    title: "Website Development",
    desc: "Turning designs and ideas into functional, professional websites tailored to different business and project needs.",
  },
];

export const about = [
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
    date: "Project-based",
    job: "Front-end Developer",
    company: "Freelance",
    desc: [
      "Developed responsive and modern web interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS",
      "Built reusable and maintainable React components using modern component-based development practices.",
      "Developed responsive e-commerce interfaces including product catalogs, product details, shopping cart, and interactive UI elements.",
      "Used TypeScript with React to build structured, reliable, and maintainable applications.",
      "Integrated REST APIs and handled dynamic data within web applications.",
      "Created responsive layouts optimized for desktop, tablet, and mobile devices.",
      "Used Git and GitHub for version control, project management, and code collaboration.",
      "Developed and deployed web projects using modern tools such as Vite, with a focus on clean UI, usability, and performance.",
    ],
  },

  {
    date: "2017",
    job: "Web Application Developer",
    company: "APPA Company- Syria",
    desc: [
      "I  completed a long-term internship as a Web Application Developer, focusing on building dynamic and responsive web apps, analyzing requirements, and using modern web technologies.",
    ],
  },
];

export const codingList = [
  {
    name: "HTML5",
    icon: <FaHtml5 size={35} />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt size={35} />,
  },
  {
    name: "JavaScript",
    icon: <FaJs size={35} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={35} />,
  },
  {
    name: "React",
    icon: <FaReact size={35} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={35} />,
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

// export const frontEndList = [
//   {
//     name: "React",
//     value: 80,
//   },
//   {
//     name: "React",
//     value: 80,
//   },
//   {
//     name: "React",
//     value: 80,
//   },
//   {
//     name: "React",
//     value: 80,
//   },
// ];

export const languagesList = [
  { name: "Arabic (Native speaker)", value: 10 },
  { name: "English", value: 7 },
];

// WORKS
import landingPageImage from "@/assets/landingPage.PNG";
import storeImage from "@/assets/my-store.PNG";
import fastcomImage from "@/assets/fastcom.PNG";
import loungeImage from "@/assets/lounge.PNG";
import grandstreamImage from "@/assets/grandstream.PNG";
//import mactechImage from "@/assets/mactech.PNG";
import bookStoreImage from "@/assets/Book-house.PNG";
import architectsImage from "@/assets/architects.PNG";
import alhadhriImage from "@/assets/alhadhri.PNG";
import { FaMobileAlt } from "react-icons/fa";

export const works = [
  {
    id: 1,
    title: "RK Store",
    category: "web-app",
    img: storeImage,
    link: "https://rk-store-orcin.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    description:
      "A responsive e-commerce application built with React and TypeScript, featuring API integration, reusable components, product browsing, and interactive user features.",
    size: 2,
  },

  {
    id: 2,
    title: "RK Dashboard",
    category: "web-app",
    img: storeImage,
    link: "YOUR_DASHBOARD_LINK",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "A responsive dashboard application built with React and TypeScript, focusing on reusable components, organized data, and a clean user interface.",
    size: 2,
  },

  {
    id: 3,
    title: "Fastcom",
    category: "website",
    img: fastcomImage,
    link: "https://fastcom-website.vercel.app/",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    description:
      "A modern and responsive business website designed to present services and company information with a clean and professional user interface.",
    size: 1,
  },

  {
    id: 4,
    title: "Alhadhri Law Firm",
    category: "wordpress",
    img: alhadhriImage,
    link: "https://alhadhrilawfirm.com/",
    technologies: ["WordPress", "Elementor"],
    description:
      "A professional law firm website developed with WordPress and Elementor, with a focus on responsive design, usability, and professional presentation.",
    size: 1,
  },

  {
    id: 5,
    title: "Vision Architects",
    category: "website",
    img: architectsImage,
    link: "https://vision-architects.vercel.app/",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    description:
      "A modern architecture website featuring a responsive layout and visually focused design for showcasing architectural projects and services.",
    size: 2,
  },

  {
    id: 6,
    title: "Lounge",
    category: "landing-page",
    img: loungeImage,
    link: "https://cafe-website-lounge.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A modern landing page for a lounge and café, designed with a responsive layout and an engaging visual presentation.",
    size: 2,
  },

  {
    id: 7,
    title: "Book Store",
    category: "website",
    img: bookStoreImage,
    link: "https://book-house-woad.vercel.app/",
    technologies: ["React", "JavaScript", "CSS"],
    description:
      "A responsive bookstore website designed to provide a simple and user-friendly browsing experience.",
    size: 1,
  },

  {
    id: 8,
    title: "RK Code",
    category: "landing-page",
    img: landingPageImage,
    link: "https://landing-page-seven-red-25.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive landing page created with a clean layout and modern frontend techniques.",
    size: 1,
  },
  {
    id: 9,
    title: "GrandStream",
    category: "website",
    img: grandstreamImage,
    link: "https://mactech-grand-stream.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A product-focused website developed to showcase Grandstream products and provide users with a clear and responsive browsing experience.",
    size: 1,
  },
];
