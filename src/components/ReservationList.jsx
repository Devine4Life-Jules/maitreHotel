import React from 'react';
import ReservationItem from './ReservationItem';

const ReservationList = ({ title, reservations, removeReservation, isLate }) => {
  return (
    <div className="resvationList">
      <h3>{title}</h3>
      <ul>
        {reservations.map((res, index) => (
          <ReservationItem key={index} reservation={res} onRemove={() => removeReservation(res)} isLate={isLate} />
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
