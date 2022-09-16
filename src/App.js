import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>

      <main>
        <About></About>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
