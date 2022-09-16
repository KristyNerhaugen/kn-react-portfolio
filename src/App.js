import React from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Project from "./components/Project";
// Error in terminal that "logo is defined but never used", but if the line below is removed, no images render on the page
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Welcome to Kristy Nerhaugen's Portfolio</h1>
      <Navigation></Navigation>

      <main>
        <About></About>
        <Project></Project>
      </main>
    </div>
  );
}

export default App;
