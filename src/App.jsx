import "./App.css";
import Header from "./sections/header/Header";
import MainCard from "./sections/main/MainCard";

function App() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
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
        <div className="relative z-10 flex items-center justify-center h-full text-white dark:text-gray-800 duration-300">
          <Header />

          <MainCard />
        </div>
      </div>
    </>
  );
}

export default App;
