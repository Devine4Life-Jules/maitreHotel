import React, { useState } from 'react';

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

    // Call the addReservation passed from the parent (App)
    addReservation(newReservation);

    // Clear the input fields after adding the reservation
    setName('');
    setHour('');
    setPeople('');
  };

  const currentTime = new Date();
  const futureReservations = reservations.filter((res) => res.time > currentTime);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Reservations</h2>
      <form onSubmit={handleAddReservation} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="time"
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="People"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add</button>
      </form>
      <ul className="space-y-2">
        {futureReservations.map((res, index) => (
          <li key={index} className="p-2 border rounded">
            {res.name} - {res.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {res.people} people <button onClick={() => removeReservation(res)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationsComponent;
