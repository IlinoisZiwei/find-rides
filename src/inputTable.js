import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript

function InputTable() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="pickupLocation">Pickup Location</label>
            <input
              type="text"
              className="form-control"
              id="pickupLocation"
              placeholder="Enter pickup location"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="dropoffLocation">Drop-off Location</label>
            <input
              type="text"
              className="form-control"
              id="dropoffLocation"
              placeholder="Enter drop-off location"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date" />
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <label htmlFor="time">Time of the Day</label>
            <input type="time" className="form-control" id="time" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputTable;
