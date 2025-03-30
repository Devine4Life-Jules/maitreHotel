import './App.css';
import FloorPlan from './components/FloorPlan';
import ReservationsComponent from './components/ReservationsComponent';
import About from './components/About';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {

  

  const [reservations, setReservations] = useState([
    { name: "jules", time: "01:23", people: "3" }
  ]);
    const [orders, setOrders] = useState({
    table1: [{ name: "Water", price: 2, quantity: 1 }],
    table6: [{ name: "Hamburger", price: 19, quantity: 2 }],
    barSpot2: [{ name: "coke", price: 2, quantity: 3 }],
  });
  const [selectedTable, setSelectedTable] = useState(null);
  const [isOrdering, setIsOrdering] = useState(false);

  const addReservation = (reservation) => {
    setReservations((prev) => [...prev, reservation].sort((a, b) => a.time - b.time));
  };

  const removeReservation = (reservationToRemove) => {
    setReservations((prev) =>
      prev.filter((reservation) => reservation !== reservationToRemove)
    );
  };

  const Home = () => (
    <FloorPlan
      orders={orders}
      selectedTable={selectedTable}
      isOrdering={isOrdering}
      setOrders={setOrders}
      setSelectedTable={setSelectedTable}
      setIsOrdering={setIsOrdering}
    />
  );
  const ReservationsPage = () => (
    <ReservationsComponent
      reservations={reservations}
      addReservation={addReservation}
      removeReservation={removeReservation}
    />
  );





  return (
    <div className="bgElement">
      <div className="contentBox" style={{ height: "60vh", width: "60vw" }}>
        <h1>Maitre d'Hôtel</h1>
        <Router>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/ReservationsPage">Reservations</NavLink>
              </li>
              <li>
                <NavLink to="/AboutPage">About</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutPage" element={<About />}/>
            <Route path="/ReservationsPage" element={<ReservationsPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
