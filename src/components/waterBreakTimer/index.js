import React,{useState,useEffect} from 'react';
import {WATER_TONE} from '../../helpers/sounds';
import Switch from '../../uiElements/switch';
import DesktopNotification from '../../uiElements/desktopNotification';
import useLocalStorage  from '../../hooks/useLocalStorage';
import useReduceTimer from '../../hooks/useReduceTimer';

const WaterBreakTimer = () => {
  const [waterBreakTime,setWaterBreakTime] = useState({
    seconds:0,
    minutes:15
  });
  const [showDesktopNotification,setDesktopNotification] = useState(false);
  const [{state:existingValue,setState:setValueInLocalStore}] = useLocalStorage('waterBreakTiming',waterBreakTime);
  const [{state:isWaterBreakStartClicked,setState:setWaterBreakStartClicked}] = useLocalStorage('isWaterBreakStartClicked',false);
  const [{state:isEnableNotification,setState:setEnableNotification}] = useLocalStorage('isDesktopNotificationWater',true);
  const [state,setState] = useReduceTimer(existingValue,isWaterBreakStartClicked)

  window.onbeforeunload = ()=> {
    setValueInLocalStore(state)
  };

  useEffect(() => {
    if(state?.seconds===0 && state?.minutes===0){
      setState(prevBreakTime => {
        return {...prevBreakTime, minutes: waterBreakTime?.minutes,seconds:0};
      });
      setDesktopNotification(true)
   }
  }, [state, setState, waterBreakTime])

   
  const handleIncrement = () => {
    if(waterBreakTime?.minutes<60)
    setWaterBreakTime(prevBreakTime => {
      return {...prevBreakTime, minutes: prevBreakTime.minutes+15};
    });
  }
  const handleDecrement = () => {
     if(waterBreakTime?.minutes>15)
     setWaterBreakTime(prevBreakTime => {
      return {...prevBreakTime, minutes: prevBreakTime.minutes-15};
    });
  }

  const handleStart = () => {
    setWaterBreakStartClicked(true);
    setState(waterBreakTime)
  }

  const resetValue = () => {
    setDesktopNotification(false)
  }

  const handleSwitchChange = (value) => {
    setEnableNotification(value)
  }

  return (
    <div>
      <p>Have a glass of water </p>
       <span onClick={handleIncrement}>+++</span><p>{waterBreakTime?.minutes}  mins</p><span onClick={handleDecrement}>---</span>
       <button onClick={handleStart}>start</button>
       <p>mm:{state?.minutes}ss:{state?.seconds}</p>
       <Switch label={"Show desktop notification"} handleSwitchChange={handleSwitchChange} checked={isEnableNotification}/>
       <DesktopNotification
        title="WFH mate"
        body="hey karthick water break now"
        sound={WATER_TONE}
        showDesktopNotification = { isEnableNotification?showDesktopNotification:false }
        resetValue = { resetValue }
      />
    </div>
  )
}

export default WaterBreakTimer;