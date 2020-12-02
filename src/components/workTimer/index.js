import React from 'react';
import Calender from '../../components/calender'
import useTimer from '../../hooks/useTimer';
import useLocalStorage from '../../hooks/useLocalStorage';
import './workTimer.css';

const WorkTimer=()=> {
  const [{state:existingValue,setState}] = useLocalStorage('timing',null);
  const [{state:isStartClicked,setState:setStartClicked}] = useLocalStorage('isStartClicked',false);
  const [state,setStartTime] = useTimer(existingValue,isStartClicked);

  const handleStartClick = () => {
    setStartClicked(true);
    setState(new Date().toLocaleTimeString())
    setStartTime(new Date().toLocaleTimeString())
  }

  const handleEndClick = () => {
     setStartClicked(false);
    alert('yahoo! great work for the day')
  }

  return (
      <div className="work-timer-wrap">
       <div className="control-button" onClick={handleStartClick}>
         <div className="control-button-inner">Start Work</div>
       </div>
       <p className="timer">
         <span className="timer-element">{state?.hours< 10 ? `${0}${state?.hours}`: state?.hours}</span>
         <span className="timer-element">{state?.minutes< 10 ? `${0}${state?.minutes}`: state?.minutes}</span>
         <span className="timer-element">{state?.seconds< 10 ? `${0}${state?.seconds}`: state?.seconds}</span>
       </p>
       <div className="control-button" onClick={handleEndClick}>
         <div className="control-button-inner">End Work</div>
       </div>
       <Calender/>
       </div> 
  );
}

export default WorkTimer;
