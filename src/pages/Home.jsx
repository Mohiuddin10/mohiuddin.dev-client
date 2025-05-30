import bgImage from "../assets/bg.jpg";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        position: "relative",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content flex-row justify-start items-start text-neutral-content border-2 p-4">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
