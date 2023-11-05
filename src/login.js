import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import carImage from './_img/car.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/input");
    // navigate
  }

  return (
    <div>
    <Header />
    <div className="grid-container">
          <div className="grid-item">
            <img
              src={carImage}
              alt="car_image"
              style={{ maxWidth: "500px", maxHeight: "500px" }}
            />  
          </div>

          <div className="login-container grid-item">
            <h2 className="title-text">Welcome to</h2>
            <h2 style={{color: '#FF5F05'}} className="title-text">UIUC RIDE-FINDING</h2>
            <h4 className="title-text">Log in</h4>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  value={email}
                  placeholder="Username/Email *"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  placeholder="Password *"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="button" className="btn-primary" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
    </div>
    </div>
  );
}

export default Login;
