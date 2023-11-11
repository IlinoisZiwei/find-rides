import React, { useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";
import Header from "./header";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleContact(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // fetch('/some-api', { method: form.method, body: formData });
    navigate("/input");
    // navigate
  }

  return (
    <div className="contact-container">
      <Header />
    
      <div className="contact-window">
        <h1 className="contact-title">CONTACT US</h1>

        <form className="contact-form" method="post" onSubmit={handleContact}>
          <div className="info-line">
          <label className="nameLabel">
            <input id="contact-input" name="nameInput" placeholder="Name:" />
          </label>
          <label className="emailLabel">
            <input id="contact-input" name="emailInput" placeholder="Email:" />
          </label>
          </div>
          <div>
          <label className="messageLabel">
            <textarea
              className="contact_text"
              type="text"
              rows="10" 
              cols="100"
              placeholder=" Message:"
              required
            />
          </label>
          </div>
          <div className="button_line">
            <button className="contact-button" type="reset">Reset</button>
            <button className="contact-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
