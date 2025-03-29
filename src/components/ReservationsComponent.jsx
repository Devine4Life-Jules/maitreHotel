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

      <h3 className="text-xl mb-2">Upcoming Reservations</h3>
      <ul className="space-y-2 mb-4">
        {upcomingReservations.map((res, index) => (
          <li key={index} className="p-2 border rounded">
            {res.name} - {res.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {res.people} people 
            <button onClick={() => removeReservation(res)} className="ml-2 p-1 bg-red-500 text-white rounded">Remove</button>
          </li>
        ))}
      </ul>

      {lateReservations.length > 0 && (
        <>
          <h3 className="text-xl mb-2 text-red-600">Late Reservations</h3>
          <ul className="space-y-2">
            {lateReservations.map((res, index) => (
              <li key={index} className="p-2 border rounded bg-red-100">
                {res.name} - {res.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {res.people} people 
                <button onClick={() => removeReservation(res)} className="ml-2 p-1 bg-red-500 text-white rounded">Remove</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ReservationsComponent;
