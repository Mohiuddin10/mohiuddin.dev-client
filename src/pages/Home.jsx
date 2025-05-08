import video from "../assets/large.mp4";
const Home = () => {
  return (
    <div className="video-background-container hero-overlay min-h-[calc(100vh-133px)]">
      <video
        className="video-background absolute top-0 left-0 w-full h-80vh object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>Enjoy the experience with a cyberpunk video background.</p>
      </div>
    </div>
  );
};

export default Home;
