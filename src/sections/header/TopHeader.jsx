import { myInfo } from "@/data/Data";
import { Typewriter } from "react-simple-typewriter";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

function TopHeader() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="flex justify-between md:justify-center items-center py-2 md:py-4 px-4 md:px-2 
    bg-primary-black dark:bg-primary-light md:shadow-2xl md:rounded-sm"
    >
      <div className="flex items-center gap-2 md:hidden">
        {/* Image RK Logo */}
        <div className="w-12 aspect-square rounded-full border-2 border-black">
          <img
            src={myInfo.image}
            alt="my image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {/* Name and social links */}
        <div className="flex flex-col gap-0 text-start">
          <h1 className="font-bold">{myInfo.name}</h1>
          <div className="h-4 text-primary-purple text-sm">
            <Typewriter
              words={myInfo.jobTitle}
              loop
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>
      </div>
      {/* Dark mood Button */}
      <button
        type="button"
        className="text-gray-300 cursor-pointer duration-300 hover:text-primary-purple
          dark:text-gray-600 dark:hover:text-primary-purple "
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}

export default TopHeader;
