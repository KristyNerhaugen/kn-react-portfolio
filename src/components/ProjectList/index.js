import React, { useState } from "react";
import screenshot from "../../assets/images/BoozyBooks.png";

const ProjectList = ({ name }) => {
  const [project] = useState([
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

  const currentProject = project.filter((project) => project.name === name);

  return (
    <div>
      <div className="flex-row">
        {currentProject.map((image, i) => (
          <img
            src={require(`../../assets/images/${name}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
