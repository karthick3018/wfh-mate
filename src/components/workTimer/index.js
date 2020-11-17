import React,{useEffect} from 'react';
import Calender from '../../components/calender'
import useTimer from '../../hooks/useTimer';
import useLocalStorage from '../../hooks/useLocalStorage';
import './workTimer.css';

const initialState = {
  seconds:0,
  minutes:0,
  hours:0
}

const WorkTimer=({isNeedToPause})=> {
  const [{state:existingValue,setState}] = useLocalStorage('timing',initialState);
  const [{state:isStartClicked,setState:setStartClicked}] = useLocalStorage('isStartClicked',false);
  const [{state:clearDate,setState:setClearTime}] = useLocalStorage('clearDate',null);
  const [state] = useTimer(existingValue,isStartClicked);

  useEffect(() => {
    setState(state)
  }, [state,setState])

  useEffect(() => {
     if(clearDate < new Date()){
      setState(initialState)
      setStartClicked(false)
    }
      
  }, [clearDate])


 /**
 * @state  isNeedToPause -> it's opposite value is used since if break is true work should pause
  **/

  useEffect(() => {
     if(isNeedToPause!==null) 
     setStartClicked(!isNeedToPause) 
  }, [isNeedToPause,setStartClicked])

  const handleStartClick = () => {
    setStartClicked(true);
    var nextDay = new Date();
    nextDay.setHours(nextDay.getHours() + 1)
    setClearTime(nextDay)
  }

  const handleEndClick = () => {
     setStartClicked(false);
    alert('yahoo! great work for the day')
  }

  return (
      <div className="work-timer-wrap">
       <button onClick={handleStartClick}>Start Work</button>
       <p className="timer">
         <span className="timer-element">{state?.hours< 10 ? `${0}${state?.hours}`: state?.hours}</span>
         <span className="timer-element">{state?.minutes< 10 ? `${0}${state?.minutes}`: state?.minutes}</span>
         <span className="timer-element">{state?.seconds< 10 ? `${0}${state?.seconds}`: state?.seconds}</span>
       </p>
       <button onClick={handleEndClick}>End Work</button>
       <Calender/>
       </div> 
  );
}

export default WorkTimer;
