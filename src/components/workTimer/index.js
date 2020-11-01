import React,{useEffect} from 'react';
import useTimer from '../../hooks/useTimer';
import useLocalStorage from '../../hooks/useLocalStorage';

const initialState = {
  seconds:0,
  minutes:0,
  hours:0
}

const WorkTimer=()=> {
  const [{state:existingValue,setState}] = useLocalStorage('timing',initialState);
  const [{state:isStartClicked,setState:setStartClicked}] = useLocalStorage('isStartClicked',false);
  const [state] = useTimer(existingValue,isStartClicked);

  useEffect(() => {
    setState(state)
  }, [state,setState])

  const handleEndClick = () => {
    setStartClicked(false);
    alert('yahoo! great work for the day')
  }

  return (
      <div>
       <button onClick={()=>setStartClicked(true)}>Start</button>
       <p>hh:{state?.hours}mm:{state?.minutes}ss:{state?.seconds}</p>
       <button onClick={handleEndClick}>End</button>
       </div> 
  );
}

export default WorkTimer;
