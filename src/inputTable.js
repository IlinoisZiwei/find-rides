import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import Header from "./header";
import AllRides, { ridesData } from "./all_rides";
import "./inputTable.css";
function InputTable() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropOffLocation, setDropoffLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [filteredRides, setFilteredRides] = useState([]);
  const [Passenger, setPassengerNumber] = useState("");

  function handleFormSubmit() {
    // Filter the data based on form input values
    const filteredData = ridesData.filter((ride) => {
      return (
        (ride.pickupLocation === pickupLocation || pickupLocation === "") &&
        (ride.dropOffLocation === dropOffLocation || dropOffLocation === "") &&
        (ride.date === date || date === "") &&
        (ride.time === time || time === "") &&
        (ride.Passenger === Passenger || Passenger === "")
      );
    });
    console.log(filteredData);
    setFilteredRides(filteredData);
    console.log(filteredRides);
  }
  // function handleChange(e) {
  //   console.log(e.target);
  //   if (e.target.id === "data") {

  //   } else if (e.target.id === )
  // }

  return (
    <div>
      <div
      style={{
        backgroundImage: 'url("https://predictanalytics.web.illinois.edu/wp-content/uploads/2021/11/UI-02-200617-069-1024x683.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        minHeight: '100vh', // This will ensure that the div takes up at least the full viewport height
        minWidth: '100vw', // This will ensure that the div takes up at least the full viewport width
      }}
    ></div>
      <Header />
      <div className="container mt-5 main_page_content">
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="pickupLocation">Pickup Location</label>
              <input
                type="text"
                className="form-control"
                id="pickupLocation"
                placeholder="Enter pickup location"
                onChange={(e) => setPickupLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="dropOffLocation">Drop-off Location</label>
              <input
                type="text"
                className="form-control"
                id="dropoffLocation"
                placeholder="Enter drop-off location"
                onChange={(e) => setDropoffLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="time">Pick up time</label>
              <input
                type="time"
                className="form-control"
                id="time"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="Passenger">Number of Passenger</label>
              <input
                type="number"
                className="form-control"
                id="passengerNumber"
                step="1"
                onChange={(e) => setPassengerNumber(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-search"
          onClick={handleFormSubmit}
        >
          Search
        </button>
      </div>
      <AllRides filteredData={filteredRides} />{" "}
      {/* Pass Filtered Data to "AllRides" */}
    </div>
  );
}

export default InputTable;
