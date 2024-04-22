// ChooseDate.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // default styling provided by react-calendar
// import { useParams } from 'react-router-dom';

const ChooseDate = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div>
            <h2>Select a Date</h2>
            <Calendar
                onChange={onChange}
                value={date}
            />
            <p>Selected Date: {date.toDateString()}</p>
        </div>
    );
};

export default ChooseDate;
