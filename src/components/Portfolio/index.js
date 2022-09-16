import React, { useState } from "react";
import screenshot from "../../assets/images/BoozyBooks.png";

const Portfolio = () => {
  const [projects] = useState([
    {
      name: "BoozyBooks",
      description: "Group Project #1",
      link: "https://kristynerhaugen.github.io/Boozy-Books/",
      github: "https://github.com/KristyNerhaugen/Boozy-Books",
    },
    {
      name: "Example Two",
      description: "Group Project #2",
      link: "linkhere",
      github: "linkhere",
    },
  ]);

  return (
    <section>
      <h1 className="flex-row">Portfolio of Projects</h1>
      <div>
        {projects.map((project, i) => (
          <img
            src={require(`../../assets/images/${project.name}.png`).default}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={project.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
