import React from 'react';

const ReservationForm = ({ name, hour, people, setName, setHour, setPeople, onAdd }) => {
  return (
    <form onSubmit={onAdd} className="reservationForm">
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
  );
};

export default ReservationForm;
