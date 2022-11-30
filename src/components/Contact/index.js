import React from "react";

function ContactForm() {
  return (
    <section>
      <h1 data-testid="h1tag">Connect with Kristy</h1>
      <div>
        <h4>
          {" "}
          Please reach out to Kristy at{" "}
          <a href="mailto:kristynerhaugen@gmail.com">kristynerhaugen@gmail</a>
        </h4>
      </div>
    </section>
  );
}

export default ContactForm;
