import React from "react";

function Resume() {
  return (
    <div>
      <h1>Kristy's Resume</h1>
      <h3>
        {" "}
        <a href={require("../../assets/KristyNerhaugenResume.pdf")} download>
          Download Kristy's resume here.
        </a>
      </h3>
      <h2>Kristy's Skills Include:</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Git</li>
        <li>Javascript</li>
        <li>Express.js</li>
        <li>APIs</li>
        <li>Node.js</li>
        <li>SQL</li>
        <li>Object Relational Mapping</li>
        <li>NoSQL</li>
        <li>React</li>
      </ul>
    </div>
  );
}

export default Resume;
