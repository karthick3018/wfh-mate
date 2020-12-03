import React from 'react';
import './calender.css';

const Calender = () => {
  const date = new Date()
  return (
    <div className="calender-wrapper">
      <div className="calender-inner-wrapper">
      <p className="month">{date.toString().split(' ')[1]}</p>
      <p className="date">{date.getDate()<10?`0${date.getDate()}`:date.getDate()}</p>
      <p className="formatted-date">{date.toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default Calender;