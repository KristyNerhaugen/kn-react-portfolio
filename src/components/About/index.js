import React from "react";
import kristyPhoto from "../../assets/images/kristynerhaugen.png";

function About() {
  return (
    <section>
      <h1 id="aboutMe">About Kristy</h1>
      <img src={kristyPhoto} style={{ width: "10%" }} alt="kristy" />
    </section>
  );
}

export default About;
