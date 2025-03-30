import React from 'react';

const ReservationItem = ({ reservation, onRemove, isLate }) => {



  return (
    <li className="reservationItem">
      {reservation.name} - {reservation.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {reservation.people} people 
      <button onClick={onRemove} className="bg-red-500 text-white rounded">Remove</button>
    </li>
  );
};

export default ReservationItem;
