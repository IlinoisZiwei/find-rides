import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import Header from "./header";
import "./all_rides.css";

export const ridesData = [
  {
    rideId: 1,
    pickupLocation: "ISR",
    dropOffLocation: "Chicago",
    date: "2023-10-15",
    pickUpTime: "09:00",
    dropOffTime: "10:30",
    duration: 90,
    driverName: "John Doe",
    passengerNumber: 1,
    saved: true
  },
  {
    rideId: 2,
    pickupLocation: "Main Quad",
    dropOffLocation: "Urbana",
    date: "2023-10-16",
    pickUpTime: "08:45",
    dropOffTime: "10:15",
    duration: 90,
    driverName: "Jane Smith",
    passengerNumber: 2,
    saved: true
  },
  {
    rideId: 3,
    pickupLocation: "Green Street",
    dropOffLocation: "Chicago",
    date: "2023-10-17",
    pickUpTime: "10:15",
    dropOffTime: "11:45",
    duration: 90,
    driverName: "Robert Johnson",
    passengerNumber: 3,
    saved: true
  },
  {
    rideId: 4,
    pickupLocation: "Newman",
    dropOffLocation: "Champaign",
    date: "2023-10-18",
    pickUpTime: "11:30",
    dropOffTime: "01:00",
    duration: 90,
    driverName: "Samantha Brown",
    passengerNumber: 1,
    saved: false
  },
  {
    rideId: 5,
    pickupLocation: "Grainger",
    dropOffLocation: "Chicago",
    date: "2023-10-19",
    pickUpTime: "02:00",
    dropOffTime: "03:30",
    duration: 90,
    driverName: "Michael Wilson",
    passengerNumber: 2,
    saved: true
  },
];

function AllRides({ filteredData }) {
  return (
    <div className="container all-rides-content">
      <div>
              <h1 class="ride-title">Available Rides</h1>
              
          
          
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
                                    <p class="mb-0"><span class="subtitle">Pick-up Time:</span> {ride.pickUpTime}</p>
                                    <p class="mb-0"><span class="subtitle">Drop-off Time:</span> {ride.dropOffTime}</p>
                                    <p class="mb-0"><span class="subtitle">Duration:</span> {ride.duration} minutes</p>
                                    
                                </div>
                                <small class="opacity-50 text-nowrap his-time">n days ago</small>
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

export default AllRides;
