import { myInfo } from "@/data/Data";
import SocialMedia from "./components/SocialMedia";
import { Typewriter } from "react-simple-typewriter";
import background1 from "@/assets/background1.png";
import background2 from "@/assets/background2.png";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import { useState, useEffect } from "react";

function MainCard() {
  const [background, setBackground] = useState(background1);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setBackground((prev) =>
          prev === background1 ? background2 : background1
        );
        setFade(true);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="overflow-hidden rounded-md mt-20 md:mt-10 xl:mt-0
                    md:shadow-[-15px_-15px_0px] shadow-primary-purple/30"
    >
      {/* THE CARD */}
      <div className=" relative h-140 bg-primary-black dark:bg-primary-light flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className=" absolute top-0 left-0 w-full h-[66%] z-0">
          <img
            src={background}
            alt="my image"
            className={`
              w-full h-full object-cover
              transition-opacity duration-500 ease-in-out
              ${fade ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        {/* Curve div */}
        <div className=" absolute bg-primary-black dark:bg-primary-light rounded-full w-[400%] aspect-square top-[55%]"></div>

        <div className=" relative z-1 flex flex-col items-center justify-center gap-6 pt-50">
          {/* Image RK Logo */}
          <div
            className="w-30 aspect-square rounded-full border-2 border-black
                        shadow-[-10px_10px_0px] shadow-primary-purple/40"
          >
            <img
              src={myInfo.image}
              alt="my image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Name and social links */}
          <div className="flex flex-col gap-3 text-center justify-center items-center">
            <h1 className="text-2xl font-bold">{myInfo.name}</h1>
            <div className="h-8">
              {/* <Typewriter
                words={myInfo.jobTitle}
                loop
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
                className="mb-3"
              /> */}
              <p>Frontend Developer</p>
            </div>

            <SocialMedia />
          </div>
        </div>
      </div>
      {/* Contact Button */}
      <div className="relative z-1">
        <hr className="w-full border-white/20 dark:border-black/20" />
        <div className="flex justify-around items-center px-6">
          <a
            className="hover:text-primary-purple flex items-center justify-center gap-3 p-4 group"
            href="/Resume.pdf"
            download
          >
            <p className="uppercase font-bold">Download CV</p>
            <IoMdCloudDownload className="group-hover:mb-1.5 duration-300" />
          </a>
          <div className="h-15 w-px from-white/20 dark:from-black/20 bg-linear-to-b"></div>
          <a
            className=" hover:text-primary-purple flex items-center justify-center gap-3 p-4 group"
            href="https://wa.me/97433820090"
          >
            <p className=" uppercase font-bold"> contact me</p>
            <FaLocationArrow className=" group-hover:mb-1.5 duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
