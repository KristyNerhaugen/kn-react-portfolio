import React from "react";
import kristyPhoto from "../../assets/images/kristynerhaugen.png";

function About() {
  return (
    <section>
      <h1 id="aboutMe">About Kristy</h1>
      <img src={kristyPhoto} style={{ width: "20%" }} alt="kristy" />
      <p>
        Kristy Nerhaugen is a student in the University of Minnesota’s Coding
        Boot Camp. Kristy has worked in libraries for over ten years and is
        excited to pivot careers with all of the new skills she’s learning
        through the Boot Camp! She has a Master's degree in Library Science from
        the University of Indiana Bloomington and a Bachelor’s degree in English
        from Gustavus Adolphus College. Kristy has strong organization skills
        and excels in communication and customer service. If you would like to
        get in touch with Kristy, please use the contact form. Enjoy exploring
        the projects Kristy has developed!
      </p>
    </section>
  );
}

export default About;
