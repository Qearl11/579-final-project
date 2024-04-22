import React from 'react';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import classesData from '../util/class';

const BookClass = () => {
    const navigate = useNavigate();
    const handleClassClick = (cls) => {
        // You can handle the click event here, for example, open a modal with class details or navigate to a class-specific page
        // console.log(`Class clicked: ${cls.id}`);
        navigate(`/choose-date/${cls.id}`);
    };

    return (
        <section className="class-booking">
            <h2>Class Dashboard</h2>
            <div className="class-cards-container">
                {classesData.map((cls) => (
                    <button 
                        className="class-card" 
                        key={cls.id} 
                        onClick={() => handleClassClick(cls)}
                    >
                        <div className="class-card-content">
                            <div className='class-card-content-image'>
                            <img src={cls.image} alt={cls.name} style={{ width: '250px', height: '166.66px'}} />
                            </div>
                            <div className='class-card-content-text'>
                                <h3>{cls.class}</h3>
                                <p>Type: {cls.type}</p>
                                <p>Coach: {cls.coach}</p>
                            </div>

                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default BookClass;
