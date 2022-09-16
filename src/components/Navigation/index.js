import React from "react";

function Navigation(props) {
  // const [activeNav, setActiveNav] = useState("About");

  const { setActiveNav, pageList } = props;

  return (
    <nav>
      <ul className="flex-row">
        {pageList.map((page) => (
          <li key={page} className={`mx=2`}>
            <span onClick={() => setActiveNav(page)}>{page}</span>
          </li>
        ))}

        {/* <li className={`mx-2`}>
          <span onClick={() => setActiveNav("About")}>About</span>
        </li>
        <li className={`mx-2`}>
          <span onClick={() => setActiveNav("Portfolio")}>Portfolio</span>
        </li>
        <li className={`mx-2`}>
          <span onClick={() => setActiveNav("Contact")}>Contact</span>
        </li>
        <li className={`mx-2`}>
          <span onClick={() => setActiveNav("Resume")}>Resume</span>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navigation;
