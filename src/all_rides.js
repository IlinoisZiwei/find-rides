import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript

const ridesData = [
    {
      rideId: 1,
      date: '2023-10-15',
      pickupTime: '09:00 AM',
      dropOffTime: '10:30 AM',
      duration: 90,
      driverName: 'John Doe',
    },
    {
      rideId: 2,
      date: '2023-10-16',
      pickupTime: '08:45 AM',
      dropOffTime: '10:15 AM',
      duration: 90,
      driverName: 'Jane Smith',
    },
    {
      rideId: 3,
      date: '2023-10-17',
      pickupTime: '10:15 AM',
      dropOffTime: '11:45 AM',
      duration: 90,
      driverName: 'Robert Johnson',
    },
    {
      rideId: 4,
      date: '2023-10-18',
      pickupTime: '11:30 AM',
      dropOffTime: '01:00 PM',
      duration: 90,
      driverName: 'Samantha Brown',
    },
    {
      rideId: 5,
      date: '2023-10-19',
      pickupTime: '02:00 PM',
      dropOffTime: '03:30 PM',
      duration: 90,
      driverName: 'Michael Wilson',
    }
  ];
  

function AllRides() {
  return (
    <div className="container">
      <h1>All Rides</h1>
      <ul className="list-group">
        {ridesData.map((ride, index) => (
          <li key={index} className="list-group-item">
            <h4>Ride ID: {ride.rideId}</h4>
            <p>Date: {ride.date}</p>
            <p>Pickup Time: {ride.pickupTime}</p>
            <p>Drop-off Time: {ride.dropOffTime}</p>
            <p>Duration: {ride.duration} minutes</p>
            <p>Driver: {ride.driverName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllRides;