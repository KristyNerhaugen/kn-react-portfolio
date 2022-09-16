import React, { useState } from "react";

function Navigation() {
  return (
    <header>
      <nav>
        <ul className="flex-row">
          <li>
            <a href="#about">About Kristy</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
