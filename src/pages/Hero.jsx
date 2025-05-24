import video from "../assets/light.mov";
import image from "../assets/picture.jpg";

const Hero = () => {
  return (
    <div className="gap-6 h-screen flex mx-auto justify-center items-center">
      <div className="text-left pl-4 w-2/3 text-black border">
        <h2 className="animate-float text-4xl md:text-6xl font-bold drop-shadow-lg py-4 rounded-full shadow-xl">
          Mohammad Mohiuddin
        </h2>
        <h3 className="text-2xl">Full Stack Developer</h3>
        <p>
          I am a full stack developer with a passion for creating dynamic and
          responsive web applications. I have experience in both front-end and
          back-end development, and I am always eager to learn new technologies
          and improve my skills.
        </p>
        <button className="btn">Resume</button>
      </div>
      <div className="border-green-500 flex-1">
        <img className="w-1/2 h-1/2" src={image} alt="image" />
      </div>
    </div>
  );
};

export default Hero;
