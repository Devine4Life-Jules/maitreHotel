import React from 'react';

const ReservationItem = ({ reservation, onRemove, isLate }) => {



  return (
    <li className="reservationItem">
      <div className="clientName">{reservation.name}</div> <div className='reservationTime'>- {reservation.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - </div><div className='peopleAmount'>{reservation.people} people </div>
      <button onClick={onRemove} className="bg-red-500 text-white rounded">Remove</button>
    </li>
  );
};

export default ReservationItem;
