import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookClass from "./components/problems/BookClass";
import ChooseDate from "./components/problems/ChooseDate";
// import MotivateQuotes from "./components/problems/MotivateQuotes";
import UpcomingClass from "./components/problems/UpcomingClass";

const NavigationBar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li><Link to="/">Book Class</Link></li>
                <li><Link to="/upcoming-class">Upcoming Classes</Link></li>
            </ul>
        </nav>
    );
};

const App = () => {
    return (
        <Router>
            <div className="main-container">
                <header>
                    <h1>Fitness Todo List App</h1>
                </header>
                <NavigationBar />
                <main>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<BookClass />} />
                            <Route path="/choose-date/:classId" element={<ChooseDate />} />
                            <Route path="/upcoming-class" element={<UpcomingClass/>} />
                            {/* <Route path="/motivate-quotes" component={MotivateQuotes} /> */}
                        </Routes>
                    </div>
                </main>
                <footer>
                    <p>&copy; 2024 Fitness Todo List App</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
