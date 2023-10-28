import React, { useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleContact() {
    navigate("/input");
    // navigate
  }

  return (
    <div className="contact-container">
      <h2>Contact us</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            className="contact_text"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4" 
            cols="50"
            required
          />
        </div>
        <button type="button" onClick={handleContact}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
