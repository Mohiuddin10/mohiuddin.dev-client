import video from "../assets/light.mov";
import image from "../assets/picture.jpg";

const Hero = () => {
  return (
    <div className="gap-6 h-screen flex items-center justify-center bg-blue-100">
      <div className="text-left pl-4 w-2/3 text-black">
        <h2 className="animate-float text-4xl md:text-6xl font-bold text-blue-800 drop-shadow-lg bg-blue-200 px-6 py-4 rounded-full shadow-xl border border-blue-300">
          Mohammad Mohiuddin
        </h2>
        <h3 className="text-2xl">Full Stack Developer</h3>
        <p>
          I am a full stack developer with a passion for creating dynamic and
          responsive web applications. I have experience in both front-end and
          back-end development, and I am always eager to learn new technologies
          and improve my skills.
        </p>
      </div>
      <div className={`bg-[${image}]`}>
        <img className="" src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
