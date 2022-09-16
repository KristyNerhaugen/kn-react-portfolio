import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>

      <main>
        <About></About>
        <Contact></Contact>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
