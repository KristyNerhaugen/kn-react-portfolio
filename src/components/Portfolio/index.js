import React, { useState } from "react";
import boozyBooks from "../../assets/images/BoozyBooks.png";
import PARKOUR from "../../assets/images/PARKOUR.png";
import noteTaker from "../../assets/images/KNNoteTaker.png";
import techBlog from "../../assets/images/KNTechBlog.png";
import textEditor from "../../assets/images/KNTextEditor.png";
import passwordGenerator from "../../assets/images/PasswordGenerator.png";

const Portfolio = () => {
  const [projects] = useState([
    {
      name: "PARKOUR",
      description: "Group Project #2",
      link: "https://parkour-review.herokuapp.com/",
      github: "https://github.com/KristyNerhaugen/playground-rating-app",
      image: PARKOUR,
    },
    {
      name: "Boozy Books",
      description: "Group Project #1",
      link: "https://kristynerhaugen.github.io/Boozy-Books/",
      github: "https://github.com/KristyNerhaugen/Boozy-Books",
      image: boozyBooks,
    },
    {
      name: "KN Note Taker",
      description: "A note taking application.",
      link: "https://kn-note-taker.herokuapp.com/",
      github: "https://github.com/KristyNerhaugen/kn-note-taker",
      image: noteTaker,
    },
    {
      name: "KN Tech Blog",
      description: "A blog site for technology enthusiast.",
      link: "https://kn-tech-blog.herokuapp.com/",
      github: "https://github.com/KristyNerhaugen/kn-tech-blog",
      image: techBlog,
    },
    {
      name: "KN Text Editor",
      description:
        "Create notes or code snippets with or without an internet connection.",
      link: "https://hidden-gorge-32319.herokuapp.com/",
      github: "https://github.com/KristyNerhaugen/kn-text-editor",
      image: textEditor,
    },
    {
      name: "Password Generator",
      description: "Generate a random password.",
      link: "https://kristynerhaugen.github.io/password-generator/",
      github: "https://github.com/KristyNerhaugen/password-generator",
      image: passwordGenerator,
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
            <img src={project.image} alt={project.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
