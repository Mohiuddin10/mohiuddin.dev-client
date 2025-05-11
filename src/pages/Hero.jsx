import video from "../assets/light.mov";
import image from "../assets/picture.jpg";

const Hero = () => {
  return (
    // start
    <div className="relative w-full min-h-[calc(100vh-133px)] overflow-hidden ">
      {/* Background Video */}
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

      {/* Content over video */}
      <div className="flex">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4 bg-black/30 backdrop-blur-sm">
          <h1 className="text-4xl font-bold drop-shadow-lg">Welcome</h1>
          <p className="text-lg mt-2">Tailwind + DaisyUI Video Background</p>
        </div>
        <div className="">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
