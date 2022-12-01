import React, { useState } from "react";
import boozyBooks from "../../assets/images/BoozyBooks.png";
import PARKOUR from "../../assets/images/PARKOUR.png";
import noteTaker from "../../assets/images/KNNoteTaker.png";
import techBlog from "../../assets/images/KNTechBlogNewStyle.png";
import textEditor from "../../assets/images/KNTextEditor.png";
import whereWereYouWhen from "../../assets/images/whereWereYouWhen.png";

const Portfolio = () => {
  const [projects] = useState([
    {
      name: "Where Were You When",
      description:
        "Where Were You When is a MERN stack, single page application that allows a user to record and save their memories. The user can view their own past memories and will be reminded of a memory on the same date that they are using the application.",
      link: "https://where-were-you-when.herokuapp.com/",
      github: "https://github.com/McAmy2001/Where-Were-You-When",
      image: whereWereYouWhen,
    },
    {
      name: "PARKOUR",
      description:
        "PARKOUR is an app designed to help parents and caregivers easily find and give reviews about parks and playgrounds. Once the user creates an account, they have the ability to write, edit and delete their own reviews. They can also comment on other reviews. If the user doesn’t want to make an account, they can still view park and playground reviews without the ability to comment or leave their own review.",
      link: "https://parkour-review.herokuapp.com/",
      github: "https://github.com/KristyNerhaugen/playground-rating-app",
      image: PARKOUR,
    },
    {
      name: "Boozy Books",
      description:
        "Boozy Books is an application for book and drink lovers. This application uses two server side APIs, Google Books API and the Cocktail DB API to allow users to search for books and to discover new drinks to pair with books. Users can also store book titles in the To Be Read list that saves to the page and persists using client-side storage. ",
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
