import { useState, useEffect } from "react";
import "./App.css";
import AboutMe from "./sections/aboutMe/AboutMe";
import Header from "./sections/header/Header";
import MainCard from "./sections/main/MainCard";
import Resume from "./sections/resume/Resume";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import Works from "./sections/works/Works";
import ContactMe from "./sections/contact/ContactMe";

function App() {
  const [active, setActive] = useState("about");

  const content = {
    about: <AboutMe />,
    resume: <Resume />,
    works: <Works />,
    contact: <ContactMe />,
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-primary-black z-50">
        <span class="loader"></span>
      </div>
    );
  }
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
            <Header active={active} setActive={setActive} />
          </div>
          <div
            className="h-screen overflow-hidden hidden xl:block
          w-[97%] md:w-[80%] xl:w-[45%] relative -z-1"
          >
            <AnimatePresence mode="sync">
              <motion.div
                key={active}
                initial={{ y: [60, 580], opacity: 0 }}
                animate={{ y: [580, 60], opacity: 1 }}
                exit={{ y: [580, 0], opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {content[active]}
              </motion.div>
            </AnimatePresence>
          </div>
          <div
            className="xl:hidden flex flex-col gap-3
          w-[97%] md:w-[80%] relative -z-1"
          >
            <AboutMe />
            <Resume />
            <Works />
            <ContactMe />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
