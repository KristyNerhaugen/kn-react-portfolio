import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  const { setActiveNav, pageList } = props;

  return (
    <header className="flex-row px-1">
      <h1>Kristy Nerhaugen</h1>
      <Navigation setActiveNav={setActiveNav} pageList={pageList} />
    </header>
  );
}

export default Header;
