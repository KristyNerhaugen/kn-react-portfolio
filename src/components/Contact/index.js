import React, { useState } from "react";

// connect to helper
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  return (
    <section>
      <h1 data-testid="h1tag">Connect with Kristy</h1>
      <div>
        <h4> Please reach out to Kristy at kristynerhaugen@gmail.com</h4>
      </div>
    </section>
  );
}

export default ContactForm;
