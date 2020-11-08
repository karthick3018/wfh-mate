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
       <button onClick={handleStartClick}>Start</button>
       <p className="timer">hh:{state?.hours}mm:{state?.minutes}ss:{state?.seconds}</p>
       <button onClick={handleEndClick}>End</button>
       <Calender/>
       </div> 
  );
}

export default WorkTimer;
