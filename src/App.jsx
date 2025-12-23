import "./App.css";
import AboutMe from "./sections/aboutMe/AboutMe";
import Header from "./sections/header/Header";
import MainCard from "./sections/main/MainCard";

function App() {
  return (
    <>
      <div className="relative xl:h-screen w-full overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>

        {/* Layout dark*/}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* content */}
        <div className="relative z-10 flex flex-col xl:flex-row gap-5 xl:gap-0 items-center justify-center h-full text-white dark:text-gray-800 duration-300">
          <div
            className=" relative w-[97%] md:w-[80%] xl:w-[30%]
          xl:shadow-[5px_15px_10px] shadow-black/30"
          >
            <MainCard />
            <Header />
          </div>
          <div className="w-[97%] md:w-[80%] xl:w-[45%] relative -z-1">
            <AboutMe />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
