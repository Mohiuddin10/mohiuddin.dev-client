import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [theme, setTheme] = useState("cupcake");
  const handleThemeChange = (e) => {
    e.target.checked ? setTheme("symthwave") : setTheme("cupcake");
    document.documentElement.setAttribute("data-theme", theme);
  };
  console.log(theme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const nav = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-primary font-bold" : "font-bold"
        }
      >
        <a>Home</a>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-primary font-bold" : "font-bold"
        }
      >
        <a>About</a>
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "text-primary font-bold" : "font-bold"
        }
      >
        <a>Projects</a>
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          isActive ? "text-primary font-bold" : "font-bold"
        }
      >
        <a>Resume</a>
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? "text-primary font-bold" : "font-bold"
        }
      >
        <a>Contacts</a>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl gap-0">
          <img src={logo} className="w-9 h-9" alt="" />
          .dev
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{nav}</ul>
      </div>
      <div className="navbar-end">
        <label className="toggle text-base-content">
          <input
            onChange={handleThemeChange}
            type="checkbox"
            value="synthwave"
            className="theme-controller"
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
