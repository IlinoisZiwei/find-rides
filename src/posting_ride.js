import React, { useState } from 'react';
import './posting_ride.css';

function PostingRide() {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        pickUpDate: '',
        dropOffDate: '',
        pickUpTime: '',
        dropOffTime: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    /* Basic Posting implementation */
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Define the API endpoint
        const apiEndpoint = '/* Replace */'; 
        
        // Make a POST request to the server
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data from the server
            console.log('Success:', data);
            // You might want to redirect the user or clear the form here
        })
        .catch((error) => {
            // Handle any errors
            console.error('Error:', error);
        });
    };

    return (
        <div className="posting-ride-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="From">PickUp</label>
                <input 
                    type="text"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    placeholder="Enter starting location"
                    required
                />
                <label htmlFor="to">Destination</label>
                <input 
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    placeholder="Enter destination"
                    required
                />
                <label htmlFor="time">PickUpDate</label>
                <input 
                    type="date"
                    name="pickUpDate"
                    value={formData.pickUpDate}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="time">PickUpTime</label>
                <input 
                    type="time"
                    name="pickUpTime"
                    value={formData.pickUpTime}
                    onChange={handleChange}
                    required
                />
                <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Specific location, Car color, make.....etc"
                    required
                />
                <label htmlFor="passengerNumber">Number of Passenger</label>
                  <input
                    type="number"
                    className="form-control"
                    id="passengerNumber"
                    onChange={handleChange}
                  />
                <button type="submit">Post</button>
            </form>
        </div>
    );

}

export default PostingRide;
