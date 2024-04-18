import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookClass from "./components/problems/BookClass";
import ChooseDate from "./components/problems/ChooseDate";
// import MotivateQuotes from "./components/problems/MotivateQuotes";
// import UpcomingClass from "./components/problems/UpcomingClass";

const App = () => {
    return (
        <Router>
            <div>
                <header>
                    <h1>Fitness Todo List App</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/book-class" element={<BookClass />} />
                        <Route path="/choose-date" element={<ChooseDate />} />
                        {/* <Route path="/motivate-quotes" component={MotivateQuotes} />
                        <Route path="/upcoming-class" component={UpcomingClass} /> */}
                    </Routes>
                </main>
                <footer>
                    <p>&copy; 2024 Fitness Todo List App</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
