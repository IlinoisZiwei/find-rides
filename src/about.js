import React, { useState } from "react";
import './about.css';
import { useNavigate } from "react-router-dom";
import Header from "./header";



function About() {
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
      <Header id="contact-header"/>
    
      <div className="contact-window">
        <h1 className="contact-title">ABOUT</h1>

        <p>Copyright belongs to Chinese Student Scholar Association from University of Illinois at Urbana-Champaign.</p>
      </div>
    </div>
  );
}

export default About;