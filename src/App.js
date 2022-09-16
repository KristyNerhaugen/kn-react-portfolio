import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

import "./App.css";

function App() {
  const [pageList] = useState(["About", "Portfolio", "Contact", "Resume"]);
  const [activePage, setActivePage] = useState(pageList[0]);

  return (
    <div>
      <Header setActiveNav={setActivePage} pageList={pageList} />

      <main>
        <Page activePage={activePage} />
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
