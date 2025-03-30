import React, { useState } from 'react';
import ReservationForm from './ReservationForm';
import ReservationList from './ReservationList';

const ReservationsComponent = ({ reservations, addReservation, removeReservation }) => {
  const [name, setName] = useState('');
  const [hour, setHour] = useState('');
  const [people, setPeople] = useState('');

  const handleAddReservation = (e) => {
    e.preventDefault();
    const time = new Date();
    const [hours, minutes] = hour.split(':');
    time.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

    const newReservation = {
      name,
      time,
      people: parseInt(people, 10),
    };

    addReservation(newReservation);
    setName('');
    setHour('');
    setPeople('');
  };

  const currentTime = new Date();
  const sortedReservations = reservations.sort((a, b) => a.time - b.time);
  const upcomingReservations = sortedReservations.filter((res) => res.time > currentTime);
  const lateReservations = sortedReservations.filter((res) => res.time <= currentTime);

  return (
    <div className="reservationPage">
      <h2>Reservations</h2>
      <ReservationForm
        name={name}
        hour={hour}
        people={people}
        setName={setName}
        setHour={setHour}
        setPeople={setPeople}
        onAdd={handleAddReservation}
      />
      <ReservationList title="Upcoming Reservations" reservations={upcomingReservations} removeReservation={removeReservation} />
      {lateReservations.length > 0 && (
        <ReservationList title="Late Reservations" reservations={lateReservations} removeReservation={removeReservation} isLate />
      )}
    </div>
  );
};

export default ReservationsComponent;
