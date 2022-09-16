import React, { useState } from "react";
import screenshot from "../../assets/images/BoozyBooks.png";

const Portfolio = () => {
  const [projects] = useState([
    {
      name: "PARKOUR",
      description: "Group Project #2",
      link: "https://parkour-review.herokuapp.com/",
      github: "https://github.com/KristyNerhaugen/playground-rating-app",
    },
    {
      name: "Boozy Books",
      description: "Group Project #1",
      link: "https://kristynerhaugen.github.io/Boozy-Books/",
      github: "https://github.com/KristyNerhaugen/Boozy-Books",
    },
    {
      name: "KN Note Taker",
      description: "A note taking application.",
      link: "https://kn-note-taker.herokuapp.com/",
      github: "https://github.com/KristyNerhaugen/kn-note-taker",
    },
    {
      name: "KN Tech Blog",
      description: "A blog site for technology enthusiast.",
      link: "https://kn-tech-blog.herokuapp.com/",
      github: "https://github.com/KristyNerhaugen/kn-tech-blog",
    },
    {
      name: "KN Text Editor",
      description:
        "Create notes or code snippets with or without an internet connection.",
      link: "https://hidden-gorge-32319.herokuapp.com/",
      github: "https://github.com/KristyNerhaugen/kn-text-editor",
    },
    {
      name: "Password Generator",
      description: "Generate a random password.",
      link: "https://kristynerhaugen.github.io/password-generator/",
      github: "https://github.com/KristyNerhaugen/password-generator",
    },
  ]);

  return (
    <section>
      <h1 className="flex-row">Portfolio of Projects</h1>
      <div>
        {projects.map((project, i) => (
          <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>{project.name}</a>
            <a href={project.github}>Github Repository</a>
            <img
              src={require(`../../assets/images/${project.name}.png`).default}
              alt={project.name}
              className="img-thumbnail mx-1"
              key={project.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
