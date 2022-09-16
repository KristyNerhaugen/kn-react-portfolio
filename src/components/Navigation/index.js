import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Navigation(props) {
  const handleClick = (item) => {
    return item;
  };

  const {
    contactSelected,
    setContactSelected,
    portfolioSelected,
    setPortfolioSelected,
    resumeSelected,
    setResumeSelected,
  } = props;

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a href="#about">About Kristy</a>
        </li>
        <li className={`mx-2 ${portfolioSelected && "navActive"}`}>
          <span onClick={() => setPortfolioSelected(true)}>Portfolio</span>
        </li>
        <li className={`mx-2 ${contactSelected && "navActive"}`}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
        </li>
        <li className={`mx-2 ${resumeSelected && "navActive"}`}>
          <span onClick={() => setResumeSelected(true)}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
