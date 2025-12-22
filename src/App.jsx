import "./App.css";
import MainCard from "./sections/main/MainCard";

function App() {
  return (
    <>
      {/* <div className=" h-screen flex justify-center items-center bg-black">
        <MainCard />
      </div> */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* الفيديو */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>

        {/* طبقة تعتيم (اختياري) */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* المحتوى */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <MainCard />
        </div>
      </div>
    </>
  );
}

export default App;
