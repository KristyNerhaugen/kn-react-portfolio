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
      </ul>
    </nav>
  );
}

export default Navigation;
