import React,{useState,useEffect,useRef} from 'react';
import { Calendar } from 'antd';
import './calender.css';

const Calender = () => {
  const calenderRef = useRef(null);
  
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, false);
    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (calenderRef.current && !calenderRef.current.contains(e.target)) {
      setCalenderVisible(false);
    }
  }

  const date = new Date();
  const [isCalenderVisible,setCalenderVisible] = useState(false);
  return (
    <div className="calender" ref={calenderRef}>
    <div  onClick={()=>setCalenderVisible(!isCalenderVisible)} className="calender-wrapper">
      <div className="calender-inner-wrapper">
      <p className="month">{date.toString().split(' ')[1]}</p>
      <p className="date">{date.getDate()<10?`0${date.getDate()}`:date.getDate()}</p>
      <p className="formatted-date">{date.toLocaleDateString()}</p>
      </div>
    </div>
      {isCalenderVisible && 
      <div className="monthly-calender-wrapper">
      <Calendar className="monthly-calender" fullscreen={false} />
      </div>
      }
    </div>
  )
}

export default Calender;