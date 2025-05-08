import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);
