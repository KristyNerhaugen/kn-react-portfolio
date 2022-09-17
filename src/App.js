import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

import "./App.css";

function App() {
  const [pageList] = useState([
    "About Kristy",
    "Portfolio",
    "Contact",
    "Resume",
  ]);
  const [activePage, setActivePage] = useState(pageList[0]);

  const [activePageSelected, setPageSelected] = useState(false);

  return (
    <div>
      <Header
        setActivePage={setActivePage}
        pageList={pageList}
        activePageSelected={activePageSelected}
        setPageSelected={setPageSelected}
        activePage={activePage}
      />

      <main>
        <Page activePage={activePage} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
