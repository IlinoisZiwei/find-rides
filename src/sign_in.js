import React from 'react';
import './sign_in.css';
import illiniLogoImage from './_img/illini_logo.jpg'

function Sign_in() {
    return (
        <div className="container">
            <div className="image">
                {/* Make sure to replace the `src` with a direct link to an image */}
                <img src={illiniLogoImage} alt="Image Description" style={{ width: '128px', height: '128px' }} />
            </div>
            <h1 style={{ color: 'black' }}>
                Sign up to <span style={{ color: '#E74A26' }}>UIUC ride finding</span>
            </h1>
            <form id="registration-form">
                <div className="form-group form-inline">
                    <input type="text" id="first-name" placeholder="First Name" required />
                    <input type="text" id="last-name" placeholder="Last Name" required />
                </div>
                <div className="form-group">
                    <input type="email" id="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                    <input type="text" id="username" placeholder="Username" required />
                </div>
                <div className="form-group">
                    <input type="text" id="country" placeholder="Country" required />
                </div>
                <div className="form-group">
                    <input type="tel" id="phone" placeholder="Phone" required />
                </div>
                <button type="submit" id="signup-button">Sign Up</button>
            </form>
            <button id="back-to-login">Back to Login</button>
        </div>
    );
}

export default Sign_in;


{/* // document.addEventListener("DOMContentLoaded", function () {
//     const signinForm = document.getElementById("signin-form");
//     const usernameInput = document.getElementById("username");
//     const passwordInput = document.getElementById("password");
//     const errorMessage = document.getElementById("error-message");

//     signinForm.addEventListener("submit", function (event) {
//         event.preventDefault();

//         const username = usernameInput.value;
//         const password = passwordInput.value;

//         if (username === "your_username" && password === "your_password") {
//             // Replace "your_username" and "your_password" with your actual username and password
//             errorMessage.textContent = "Sign-in successful!";
//         } else {
//             errorMessage.textContent = "Invalid username or password.";
//         }
//     });
// }); */}

