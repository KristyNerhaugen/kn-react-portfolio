import React from "react";

function Navigation(props) {
  // const [activeNav, setActiveNav] = useState("About");

  const {
    pageList = [],
    setActivePage,
    activePageSelected,
    setPageSelected,
    activePage,
  } = props;

  return (
    <nav>
      <ul className="flex-row">
        {pageList.map((page) => (
          <li
            key={page}
            className={`mx-2 ${
              activePage === page && activePageSelected && "highlight"
            }`}
          >
            <span
              onClick={() => {
                setActivePage(page);
                setPageSelected(true);
              }}
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
