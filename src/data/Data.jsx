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
