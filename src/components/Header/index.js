import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  const { Navigation } = props;
  return (
    <header className="flex-row px-1">
      <h1>Welcome to Kristy Nerhaugen's Portfolio</h1>
      <h2>{Navigation}</h2>
    </header>
  );
}

export default Header;
