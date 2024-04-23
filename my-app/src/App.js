import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BookClass from "./components/problems/BookClass";
// import ChooseDate from "./components/problems/ChooseDate";
// import MotivateQuotes from "./components/problems/MotivateQuotes";
// import UpcomingClass from "./components/problems/UpcomingClass";

const App = () => {
    return (
        <div>
            <header>
                <h1>Fitness Todo List App</h1>
            </header>
            <main>
                {/* <ChooseDate />
                <MotivateQuotes /> */}
                <BookClass />
                {/* <UpcomingClass /> */}
            </main>
            <footer>
                <p>&copy; 2024 Fitness Todo List App</p>
            </footer>
        </div>
    );
};

export default App;
