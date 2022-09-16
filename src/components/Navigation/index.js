import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Navigation() {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#about">About Kristy</a>
        </li>
        <li className="mx-2">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="mx-2">
          <a href="#contact">Contact</a>
        </li>
        <li className="mx-2">
          <a href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
