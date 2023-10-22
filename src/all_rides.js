import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import Header from "./header";

export const ridesData = [
  {
    rideId: 1,
    pickupLocation: "ISR",
    dropOffLocation: "Chicago",
    date: "2023-10-15",
    time: "09:00 AM",
    dropOffTime: "10:30 AM",
    duration: 90,
    driverName: "John Doe",
  },
  {
    rideId: 2,
    pickupLocation: "Main Quad",
    dropOffLocation: "Urbana",
    date: "2023-10-16",
    time: "08:45 AM",
    dropOffTime: "10:15 AM",
    duration: 90,
    driverName: "Jane Smith",
  },
  {
    rideId: 3,
    pickupLocation: "Green Street",
    dropOffLocation: "Chicago",
    date: "2023-10-17",
    time: "10:15 AM",
    dropOffTime: "11:45 AM",
    duration: 90,
    driverName: "Robert Johnson",
  },
  {
    rideId: 4,
    pickupLocation: "Newman",
    dropOffLocation: "Champaign",
    date: "2023-10-18",
    time: "11:30 AM",
    dropOffTime: "01:00 PM",
    duration: 90,
    driverName: "Samantha Brown",
  },
  {
    rideId: 5,
    pickupLocation: "Grainger",
    dropOffLocation: "Chicago",
    date: "2023-10-19",
    time: "02:00 PM",
    dropOffTime: "03:30 PM",
    duration: 90,
    driverName: "Michael Wilson",
  },
];

function AllRides({ filteredData }) {
  return (
    <div>
      <div className="container">
        <h1>All Rides</h1>
        {filteredData.length > 0 ? (
          <ul className="list-group">
            {filteredData.map((ride, index) => (
              <li key={index} className="list-group-item">
                <h4>Ride ID: {ride.rideId}</h4>
                <p>Date: {ride.date}</p>
                <p>Pickup Time: {ride.time}</p>
                <p>Drop-off Time: {ride.dropOffTime}</p>
                <p>Duration: {ride.duration} minutes</p>
                <p>Driver: {ride.driverName}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results match the criteria.</p>
        )}
      </div>
    </div>
  );
}

export default AllRides;
