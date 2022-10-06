import React, { useState } from "react";
import boozyBooks from "../../assets/images/BoozyBooks.png";
import PARKOUR from "../../assets/images/PARKOUR.png";
import noteTaker from "../../assets/images/KNNoteTaker.png";
import techBlog from "../../assets/images/KNTechBlog.png";
import textEditor from "../../assets/images/KNTextEditor.png";
import whereWereYouWhen from "../../assets/images/whereWereYouWhen.png";

const Portfolio = () => {
  const [projects] = useState([
    {
      name: "Where Were You When",
      description: "Group Project #3",
      link: "https://where-were-you-when.herokuapp.com/",
      github: "https://github.com/McAmy2001/Where-Were-You-When",
      image: whereWereYouWhen,
    },
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
  ]);

  return (
    <section className="flex-row">
      <h1 className="flex-row">Portfolio of Projects</h1>
      <div>
        {projects.map((project, i) => (
          <div key={i}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <a href={project.link}>{project.name}</a>
            </p>
            <p>
              <a href={project.github}>Github Repository</a>
            </p>
            <img src={project.image} alt={project.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
