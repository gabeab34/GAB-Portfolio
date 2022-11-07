import React, { useState } from 'react';
import validateEmail from '../../helpers/validation';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function handleChange(form) {
    console.log("data: ", form)
    if (form.name === "email") {
      const isValid = validateEmail(form.value);
      if (!isValid) {
        alert("Please enter a valid email address.");
      }
    } else {
      if (form.name === "name") {
        const value = name.length
        if (value.length = 0) {
          alert("Please enter your name.");
        }
      } else {
        if (form.name === "message") {
          const value = message.length
          if (value.length = 0) {
            alert("Please enter your message.");
          }
        }
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("data: ", document.getElementsByName('name').value)
    handleChange(e);
    setFormState({
      name: "",
      email: "",
      message: "",
    });
    return;
  }


  return (
    <div id='bg'> 
        <div id= "resume">
          <h3>Proficiencies:</h3>
          <ul id= "skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>noSQL</li>
          <li>Mongo</li>
          <li>Express</li>
          <li>React</li>
          <li>Node</li>
          <p id="resumeDl">Download Resume <a href="https://github.com/gabeab34/gab-portfolio/blob/main/docs/ResumePDF.pdf">Here</a></p>
      </ul>
    </div>
      <div id="contact">
        <form id="form">
          <h3>Send me an email!</h3>
          <p><a href = "mailto: gabeab34@gmail.com">gabeab34@gmail</a></p>
          <input type="hidden" name="contact" />
          <label>Subject</label>
          <input type="text" name="subject" />
          <label> Your Email</label>
          <input type="email" name="email" defaultValue={email} />
          <label>Message</label>
          <textarea name="message" rows="15" cols="50" defaultValue={message}></textarea>
          <button
            data-testid="button"
            className="btn btn-outline-dark"
            type="submit"
            onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
