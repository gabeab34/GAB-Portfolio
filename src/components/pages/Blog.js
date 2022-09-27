import React from 'react';

export default function Blog() {
  return (
    <div id = 'bg'>
      <h2>Contact Me</h2>
      <div id= "contact">
        <form id="contact-form">
          <input type="hidden" name="contact_number"/>
          <label>Name</label>
          <input type="text" name="user_name"/>
          <label>Email</label>
          <input type="email" name="user_email"/>
          <label>Message</label>
          <textarea name="message"></textarea>
          <input type="submit" value="Send"/>
        </form>
      </div>
    </div>
  );
}
