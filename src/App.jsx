import './App.css';
import FloorPlan from './components/FloorPlan';
import ReservationsComponent from './components/ReservationsComponent';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations((prev) => [...prev, reservation].sort((a, b) => a.time - b.time));
  };

  const removeReservation = (reservationToRemove) => {
    setReservations((prev) =>
      prev.filter((reservation) => reservation !== reservationToRemove)
    );
  };

  const Home = () => <FloorPlan />;
  const ReservationsPage = () => <ReservationsComponent reservations={reservations} addReservation={addReservation} removeReservation={removeReservation} />;

  return (
    <div>
      <h1>Maitre d'Hotel</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/ReservationsPage">Reservations</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ReservationsPage" element={<ReservationsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
