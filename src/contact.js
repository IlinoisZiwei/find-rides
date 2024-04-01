import React, { useState } from "react";
import "./contact.css";
import { useNavigate } from "react-router-dom";
import Header from "./header";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // function handleContact(e) {
  //   e.preventDefault();
  //   const form = e.target;
  //   const formData = { name, email, message };
  //   fetch('http://localhost:3001/contact', { // Replace with your backend server URL
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log('Success:', data);
  //     navigate("/input"); // Navigate to the desired route on success
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //     // Handle error here, possibly with a user notification
  //   });
  // }
  function handleReset() {
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <div className="contact-container">
      <Header id="contact-header"/>
    
      <div className="contact-window">
        <h1 className="contact-title">CONTACT US</h1>

        <form className="contact-form" action="https://formsubmit.co/jiangshangong0118@gmail.com" method="POST">
          <div className="info-line">
          <label className="nameLabel">
            <input id="contact-input" name="nameInput" placeholder="Name:" value={name} 
                onChange={e => setName(e.target.value)} />
          </label>
          <label className="emailLabel">
            <input id="contact-input" name="emailInput" placeholder="Email:" value={email} 
                onChange={e => setEmail(e.target.value)} />
          </label>
          </div>
          <div>
          <label className="messageLabel">
            <textarea
              name = "messageBody"
              className="contact_text"
              type="text"
              rows="20" 
              cols="100"
              placeholder=" Message:"
              required
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </label>
          </div>
          <div className="button_line">
            <button className="contact-button" type="button" onClick={handleReset}>Reset</button>
            <button className="contact-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
