import React from "react";
import Navigation from "../Navigation";

function Header() {
  return (
    <header className="flex-row px-1">
      <h1>Welcome to Kristy Nerhaugen's Portfolio</h1>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
