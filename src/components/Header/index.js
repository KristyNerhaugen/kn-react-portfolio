import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  const {
    setActivePage,
    pageList,
    activePageSelected,
    setPageSelected,
    activePage,
  } = props;

  return (
    <header className="flex-row px-1">
      <h1>Kristy Nerhaugen</h1>
      <Navigation
        setActivePage={setActivePage}
        pageList={pageList}
        activePageSelected={activePageSelected}
        setPageSelected={setPageSelected}
        activePage={activePage}
      />
    </header>
  );
}

export default Header;
