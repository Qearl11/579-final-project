// components/BookClass.js
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import classesData from '../util/class';  

const BookClass = () => {
    return (
        <section className="class-booking">
            <h2>Class Dashboard</h2>
            <Tabs defaultActiveKey="class1" id="class-tabs">
                {classesData.map((cls, index) => (
                    <Tab eventKey={`class${cls.id}`} title={cls.class} key={cls.id}>
                        <div className="p-3">
                            <h3>{cls.class}</h3>
                            <p>Type: {cls.type}</p>
                            <p>Coach: {cls.coach}</p>
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </section>
    );
};

export default BookClass;
