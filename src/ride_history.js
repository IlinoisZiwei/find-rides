import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import Header from "./header";
import "./ride_history.css";

export const ridesHistoryData = [
  {
    rideId: 100,
    pickupLocation: "ORD Airport T2",
    dropOffLocation: "Armory",
    date: "2023-09-12",
    time: "04:00 PM",
    dropOffTime: "05:30 PM",
    duration: 90,
    driverName: "Tom Wang",
    passengerNumber: 3,
  },
  {
    rideId: 200,
    pickupLocation: "Main Quad",
    dropOffLocation: "Chicago Union Station",
    date: "2023-09-30",
    time: "09:45 AM",
    dropOffTime: "11:15 AM",
    duration: 90,
    driverName: "Jerry Chan",
    passengerNumber: 2,
  },
  {
    rideId: 300,
    pickupLocation: "Grainger Library",
    dropOffLocation: "Downtown Chicago",
    date: "2023-10-03",
    time: "10:00 AM",
    dropOffTime: "12:00 PM",
    duration: 120,
    driverName: "Fiore Samuel",
    passengerNumber: 4,
  },

];

function RideHistory({ filteredData }) {
  return (
    <div className="container all-rides-content">
      <div>
              <h1 class="ride-title">My Ride History</h1>
              
          
          
              <div className="container d-flex flex-column p-4 gap-4 flex-md-row py-md-5 align-items-center"
                style={{
                  backgroundColor: "#f4f4f4",
                  boxShadow: "none"
                }}
              >
                {filteredData.length > 0 ? (
                  <ul className="list-group">
                    {filteredData.map((ride, index) => (
                      <div >
                          <li key={index} className="list-group-item list-group-item-action d-flex py-3 ride-card">
                            <img src="https://img.icons8.com/ultraviolet/80/user.png" alt="profile_photo" width="100px" height="100px" class="rounded-circle flex-shrink-0" />
                            <div style={{marginTop: '30px', marginRight: '5vw'}}>
                                <h4 class="mb-0 driver-name">{ride.driverName}</h4>
                                <h5 class="destination-info">{ride.pickupLocation} → {ride.dropOffLocation}</h5>
                            </div>

                            <div class="driver-info">
                                <div>
                                    <p class="mb-0"><span class="subtitle">Date:</span> {ride.date}</p>
                                    <p class="mb-0"><span class="subtitle">Passenger #:</span> {ride.passengerNumber} seats</p>
                                    <p class="mb-0"><span class="subtitle">Ride ID:</span> {ride.rideId}</p>
                                </div>
                                <div>
                                    <p class="mb-0"><span class="subtitle">Pick-up Time:</span> {ride.time}</p>
                                    <p class="mb-0"><span class="subtitle">Drop-off Time:</span> {ride.dropOffTime}</p>
                                    <p class="mb-0"><span class="subtitle">Duration:</span> {ride.duration} minutes</p>
                                    
                                </div>
                                <small class="opacity-50 text-nowrap">n days ago</small>
                            </div>
                        </li>

                      </div>

                    
                    ))}
                  </ul>
                ) : (
                  <p style={{marginLeft: '7vw'}}>No results match the criteria / "Search" button not pressed</p>
                )}
              </div>
          
      </div>
    </div>
  );
}

export default RideHistory;
