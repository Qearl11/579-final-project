// ChooseDate.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // default styling provided by react-calendar

const ChooseDate = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);


    const onChange = (newDate) => {
        setDate(newDate);
    };


    const handleBookNow = () => {
        // Handle booking logic here, such as saving to local storage
        // For demonstration purposes, we'll just show the confirmation
        setShowBookingConfirmation(true);
    };

    const handleConfirmBooking = () => {
        // Get the values from the input fields
        const userName = document.getElementById('userName').value;
        const vipNumber = document.getElementById('vipNumber').value;
        const actualTime = new Date().toLocaleTimeString();

        // Clear the input fields after booking confirmation
        document.getElementById('userName').value = '';
        document.getElementById('vipNumber').value = '';

        // Create an object to store booking details
        const bookingDetails = {
            date: date.toDateString(),
            time: time,
            userName: userName,
            vipNumber: vipNumber,
            actualTime: actualTime
        };

        // Retrieve existing bookings from local storage or initialize an empty array
        const existingBookings = JSON.parse(localStorage.getItem('bookedCourses')) || [];

        // Add the new booking to the existing bookings array
        existingBookings.push(bookingDetails);

        // Save the updated bookings to local storage
        localStorage.setItem('bookedCourses', JSON.stringify(existingBookings));

        // Clear the input fields after booking confirmation
        document.getElementById('userName').value = '';
        document.getElementById('vipNumber').value = '';

        // Show booking success message
        alert('Your booking is successful!');

        // Hide booking confirmation box
        setShowBookingConfirmation(false);
    };

    return (
        <div className="container">
            <div className="calendar-container">
                <h2>Select a Date</h2>
                <Calendar
                    onChange={onChange}
                    value={date}
                />
                <p>Selected Date: {date.toDateString()}</p>
                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <button onClick={handleBookNow}>Book Now</button>
            </div>
            {showBookingConfirmation && (
                <div className="reservation-box">
                    <h2 className="book-class">Reservation</h2>
                    <label htmlFor="userName">User Name:</label>
                    <input type="text" id="userName" name="userName" placeholder="Enter your name" />
                    <label htmlFor="vipNumber">VIP Number:</label>
                    <input type="text" id="vipNumber" name="vipNumber" placeholder="Enter your VIP number" />
                    <button onClick={handleConfirmBooking}>Confirm Booking</button>     
                </div>
                )}
        </div>
    );
};

export default ChooseDate;
