import { myInfo } from "@/data/Data";
import SocialMedia from "./components/SocialMedia";
import { Typewriter } from "react-simple-typewriter";
import background1 from "@/assets/background1.png";
import background2 from "@/assets/background2.png";
import { FaLocationArrow } from "react-icons/fa6";

function MainCard() {
  return (
    <div
      className="text-white w-[95%] md:w-[80%] xl:w-[30%] overflow-hidden rounded-md
                    md:shadow-[-15px_-15px_0px] shadow-primary-purple/30"
    >
      {/* THE CARD */}
      <div className=" relative h-140 bg-primary-black flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className=" absolute top-0 left-0 w-full h-[66%] z-0">
          <img
            src={background1}
            alt="my image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Curve div */}
        <div className=" absolute bg-primary-black rounded-full w-[400%] aspect-square top-[55%]"></div>

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
              <Typewriter
                words={myInfo.jobTitle}
                loop
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
                className="mb-3"
              />
            </div>

            <SocialMedia />
          </div>
        </div>
      </div>
      {/* Contact Button */}
      <div className="relative z-1">
        <hr className="w-full border-white/20"></hr>
        <a
          className=" hover:text-primary-purple flex items-center justify-center gap-3 p-4 group"
          href="#"
        >
          <p className=" uppercase font-bold"> contact me</p>
          <FaLocationArrow className=" group-hover:mb-1.5 duration-300" />
        </a>
      </div>
    </div>
  );
}

export default MainCard;
