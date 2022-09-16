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
    } else if (arg === "Contact") {
      return <Contact />;
    } else if (arg === "Resume") {
      return <Resume />;
    } else {
      return <About />;
    }
  };

  return <div>{renderPage(activePage)}</div>;
}

export default Page;
