import React from "react";
import About from "./components/About";
// Error in terminal that "logo is defined but never used", but if the line below is removed, no images render on the page
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Kristy Nerhaugen's Portfolio</h1>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
