import React,{useState,useEffect} from 'react';
import useLocalStorage  from '../../hooks/useLocalStorage';
import useReduceTimer from '../../hooks/useReduceTimer';

const WaterBreakTimer = () => {
  const [waterBreakTime,setWaterBreakTime] = useState({
    seconds:0,
    minutes:30
  });
  const [{state:existingValue,setState:setValueInLocalStore}] = useLocalStorage('waterBreakTiming',waterBreakTime);
  const [{state:isWaterBreakStartClicked,setState:setWaterBreakStartClicked}] = useLocalStorage('isWaterBreakStartClicked',false);
  const [state,setState] = useReduceTimer(existingValue,isWaterBreakStartClicked)

  window.onbeforeunload = ()=> {
    setValueInLocalStore(state)
  };

  useEffect(() => {
    if(state?.seconds===0 && state?.minutes===0){
      setState(prevBreakTime => {
        return {...prevBreakTime, minutes: waterBreakTime?.minutes,seconds:0};
      });
   }
  }, [state, setState, waterBreakTime])

  const handleIncrement = () => {
    if(waterBreakTime?.minutes<60)
    setWaterBreakTime(prevBreakTime => {
      return {...prevBreakTime, minutes: prevBreakTime.minutes+30};
    });
  }
  const handleDecrement = () => {
     if(waterBreakTime?.minutes>30)
     setWaterBreakTime(prevBreakTime => {
      return {...prevBreakTime, minutes: prevBreakTime.minutes-30};
    });
  }

  const handleStart = () => {
    setWaterBreakStartClicked(true);
    setState(waterBreakTime)
  }

  return (
    <div>
      <p>Have a glass of water </p>
       <span onClick={handleIncrement}>+++</span><p>{waterBreakTime?.minutes}  mins</p><span onClick={handleDecrement}>---</span>
       <button onClick={handleStart}>start</button>
       <p>mm:{state?.minutes}ss:{state?.seconds}</p>
    </div>
  )
}

export default WaterBreakTimer;