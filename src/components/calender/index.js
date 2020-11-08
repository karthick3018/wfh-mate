import React from 'react';
import './calender.css';

const Calender = () => {
  const date = new Date()
  return (
    <div className="calender-wrapper">
      <p className="month">{date.toString().split(' ')[1]}</p>
      <p className="date">{date.getDate()}</p>
      <p className="formatted-date">{date.toLocaleDateString()}</p>
    </div>
  )
}

export default Calender;