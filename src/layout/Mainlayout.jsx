import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-133px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
