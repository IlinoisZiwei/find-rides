import React, { useState } from 'react';
import './profile.css';
import Header from "./header";

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., sending the data to a server).
    // For this example, we'll just log the values.
    // console.log('Name:', name);
    // console.log('Email:', email);
  };

  return (
    <div>
    <Header />
    <h1 class="user_profile_title">User Profile</h1>
    <div className="profile-container">
    
      <div className="user-details">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Profile;








