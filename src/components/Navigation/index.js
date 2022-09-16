import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Navigation(props) {
  const handleClick = (item) => {
    return item;
  };

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#about">About Kristy</a>
        </li>
        <li className="mx-2">
          <span onClick={() => handleClick("Portfolio")}>Portfolio</span>
        </li>
        <li className="mx-2">
          <span onClick={() => handleClick("Contact")}>Contact</span>
        </li>
        <li className="mx-2">
          <span onClick={() => handleClick("Resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
