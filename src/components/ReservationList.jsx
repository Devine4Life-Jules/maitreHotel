import React from 'react';
import ReservationItem from './ReservationItem';

const ReservationList = ({ title, reservations, removeReservation, isLate }) => {
  return (
    <div className="resvationList">
      <h3 className={`text-xl mb-2 ${isLate ? 'text-red-600' : ''}`}>{title}</h3>
      <ul className="space-y-2">
        {reservations.map((res, index) => (
          <ReservationItem key={index} reservation={res} onRemove={() => removeReservation(res)} isLate={isLate} />
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
