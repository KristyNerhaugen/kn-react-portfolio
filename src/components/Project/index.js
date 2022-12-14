import React from "react";
import screenshot from "../../assets/images/BoozyBooks.png";
import Portfolio from "../Portfolio";

function Project(props) {
  const currentProject = props;
  return (
    <section>
      <h1>{currentProject.name}</h1>
      <p>{currentProject.description}</p>
      <a href={currentProject.link}>View deployed {currentProject.name}!</a>
      <a href={currentProject.github}>
        View GitHub repositiory for {currentProject.name}.
      </a>
      <div className="flex-row">
        <img
          src={screenshot}
          alt="Boozy Books Project 1"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}
export default Project;
