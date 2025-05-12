import video from "../assets/light.mov";
import Hero from "./Hero";
const Home = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-133px)] overflow-hidden opacity-80">
      <video
        className="absolute left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-full h-full">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
