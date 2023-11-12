import React, { useState } from "react";
import './my_saved_rides.css';
import Header from "./header";
import InputTable from "./inputTable";
import AllRides, { ridesData } from "./all_rides";



function MySavedRides() {
    const [filteredRides, setFilteredRides] = useState([]);
    function DisplayMySaved() {
        const filteredData = ridesData.filter((ride) => {
            return (
                ride.saved
            );
        });
        console.log(filteredData);
        setFilteredRides(filteredData);
        console.log(filteredRides);
    }
    return (
        <div>
            <div>
                <Header />
                <AllRides filteredData={filteredRides} />
                <button onClick={DisplayMySaved}>show my saved ride</button>
            </div>
        </div>
    );
}

export default MySavedRides;