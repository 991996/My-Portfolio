import TopHeader from "./TopHeader";
import { FaRegUser, FaEye, FaLocationArrow } from "react-icons/fa";
import { CgMenuBoxed } from "react-icons/cg";

const navMenu = [
  {
    icon: <FaRegUser size={20} />,
    title: "about",
    href: "#about",
  },
  {
    icon: <CgMenuBoxed size={20} />,
    title: "resume",
    href: "#resume",
  },
  {
    icon: <FaEye size={20} />,
    title: "works",
    href: "#works",
  },
  {
    icon: <FaLocationArrow size={18} />,
    title: "contact",
    href: "#contact",
  },
];

function Header() {
  return (
    <div
      className="fixed md:absolute top-0 left-0 md:top-30 md:-left-18 lg:-left-21 w-screen 
    md:w-fit z-200 shadow-2xl bg-primary-black dark:bg-primary-light md:bg-transparent md:dark:bg-transparent"
    >
      <TopHeader />
      <hr className="w-full border-white/20 dark:border-black/20 md:hidden" />
      {/* NAV MENU */}
      <div
        className="grid grid-cols-4 md:grid-cols-1 text-center px-4 md:px-2 lg:px-3 py-3
      bg-primary-black dark:bg-primary-light md:shadow-2xl md:rounded-sm md:mt-3"
      >
        {navMenu.map((nav, index) => {
          return (
            <a
              key={index}
              href={nav.href}
              className={` uppercase text-sm tracking-wider flex flex-col items-center gap-1 md:gap-2 hover:text-primary-purple duration-300 md:py-3 
              ${
                index === navMenu.length - 1
                  ? ""
                  : "border-r md:border-b md:border-r-0"
              } border-white/20 dark:border-black/10`}
            >
              {nav.icon}
              <p>{nav.title}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
