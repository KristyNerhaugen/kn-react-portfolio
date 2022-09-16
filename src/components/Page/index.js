import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Page(props) {
  const { activePage } = props;

  const renderPage = (arg) => {
    if (arg === "Portfolio") {
      return <Portfolio />;
    }
    //add additonal if else statements
    //end with an else statment to return the About
  };

  return <div>{renderPage(activePage)}</div>;
}

export default Page;
