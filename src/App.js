import React from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Project from "./components/Project";
import Header from "./components/Header";
// Error in terminal that "logo is defined but never used", but if the line below is removed, no images render on the page
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>

      <main>
        <About></About>
        <Project></Project>
      </main>
    </div>
  );
}

export default App;
