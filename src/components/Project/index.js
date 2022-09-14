import React from "react";
import screenshot from "../../assets/images/BoozyBooks.png";

function Project(props) {
  const currentProj = {
    name: "Boozy Books",
    description: "Group Project #1",
  };
  return (
    <section>
      <h1>{currentProj.name}</h1>
      <p>{currentProj.description}</p>
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
