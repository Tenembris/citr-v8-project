import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./useTheme";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav>
      <ul>
        <li className="mainLogo">
          <Link to="/">
            <img
              src="http://static.frontendmasters.com/resources/2019-05-02-complete-intro-react-v5/image-logo.png"
              alt="Adopt Me! Logo"
            />
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <button onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
