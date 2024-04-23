// UpcomingClass.js
import React, { useState, useEffect } from 'react';
import Motivate from './Motivate';

const UpcomingClass = () => {
    const [bookedCourses, setBookedCourses] = useState([]);

    useEffect(() => {
        // Retrieve booked courses from local storage
        const storedCourses = JSON.parse(localStorage.getItem('bookedCourses')) || [];
        setBookedCourses(storedCourses);
    }, []);

    const handleRemove = (index) => {
        // Create a copy of the current booked courses array
        const updatedCourses = [...bookedCourses];
        // Remove the course at the specified index
        updatedCourses.splice(index, 1);
        // Update the state with the modified array
        setBookedCourses(updatedCourses);
        // Update local storage with the modified array
        localStorage.setItem('bookedCourses', JSON.stringify(updatedCourses));
    };

    return (
        <div className="main-container">
            <div className='content'>
                <h2>Upcoming Classes</h2>
                <div className='motivate'>
                    <p>Motivation quote: </p>
                    <Motivate />
                </div>
            {bookedCourses.map((course, index) => (
                <div key={index} className="course-box">
                    <p>Date: {course.date}</p>
                    <p>Time: {course.time}</p>
                    <p>User Name: {course.userName}</p>
                    <p>VIP Number: {course.vipNumber}</p>
                    <p>Booking Time: {course.actualTime}</p>
                    <button onClick={() => handleRemove(index)}>Remove</button>
                </div>
            ))}
            </div>
        </div>
    );
};

export default UpcomingClass;
