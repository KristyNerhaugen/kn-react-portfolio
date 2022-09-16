import React, { useState } from "react";

function Navigation() {
  return (
    <header className="flex-row px-1">
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
    </header>
  );
}

export default Navigation;
