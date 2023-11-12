import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import Header from "./header";
import RideHistory, { ridesHistoryData } from "./ride_history";
import "./my_ride_history.css";

function MyRideHistory() {

  return (
    <div>
      <Header />
      <div className="history-content">
        <RideHistory filteredData={ridesHistoryData} />{" "}
      </div>
      
      {/* Pass Filtered Data to "RideHistory" */}
    </div>
  );
}

export default MyRideHistory;
