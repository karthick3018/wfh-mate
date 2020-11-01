import React,{useState,useEffect} from 'react';
import Switch from '../../uiElements/switch';
import ProgressBar from '../../uiElements/progress';
import {ALARM_TONE} from '../../helpers/sounds';
import DesktopNotification from '../../uiElements/desktopNotification';
import useLocalStorage  from '../../hooks/useLocalStorage';
import useReduceTimer from '../../hooks/useReduceTimer';

const BreakTimer = () => {
  const [breakTime,setBreakTime] = useState({
    seconds:0,
    minutes:5
  });
  const [{state:existingValue,setState:setValueInLocalStore}] = useLocalStorage('breakTiming',breakTime);
  const [{state:isBreakStartClicked,setState:setBreakStartClicked}] = useLocalStorage('isBreakStartClicked',false);
  const [{state:isEnableNotification,setState:setEnableNotification}] = useLocalStorage('isDesktopNotificationBreak',true);
  const [{state:isAlarmEnabled,setState:setAlarmEnabled}] = useLocalStorage('isAlarmEnabled',true);
  const [state,setState] = useReduceTimer(existingValue,isBreakStartClicked)
  const [showDesktopNotification,setDesktopNotification] = useState(false);

  useEffect(() => {
    if(state?.seconds===0 && state?.minutes===0){
       if(isEnableNotification){
        setDesktopNotification(true)
       }
       if(isAlarmEnabled){
         playAudio()
       }
   }
   setValueInLocalStore(state)
  }, [state,isEnableNotification,isAlarmEnabled,setValueInLocalStore])

  const playAudio = () => {
    const audio = new Audio(ALARM_TONE);
    audio.play();
  }


  const handleIncrement = () => {
    if(breakTime?.minutes<45)
    setBreakTime(prevBreakTime => {
      return {...prevBreakTime, minutes: prevBreakTime.minutes+5};
    });
  }
  const handleDecrement = () => {
     if(breakTime?.minutes>5)
     setBreakTime(prevBreakTime => {
      return {...prevBreakTime, minutes: prevBreakTime.minutes-5};
    });
  }

  const handleStart = () => {
    setBreakStartClicked(true);
    setState(breakTime)
  }

  const resetValue = () => {
    setDesktopNotification(false)
  }

  const handleDesktopSwitchChange = (value) => {
    setEnableNotification(value)
  }

  const handleAlertSwitchChange = (value) => {
    setAlarmEnabled(value)
  }

  return (
    <div>
      <p>Have a break</p>
       <span onClick={handleIncrement}>+++</span><p>{breakTime?.minutes}  mins</p><span onClick={handleDecrement}>---</span>
       <button onClick={handleStart}>start</button>
       <button onClick={()=>setBreakStartClicked(false)}>pause</button>
       <button onClick={()=>setBreakStartClicked(false)}>end</button>
       <ProgressBar time={state} totalTime={state?.minutes}/>
       <Switch label={"Show desktop notification"} handleSwitchChange={handleDesktopSwitchChange} checked={isEnableNotification}/>
       <Switch label={"Alert tone"} handleSwitchChange={handleAlertSwitchChange} checked={isAlarmEnabled}/>
       <DesktopNotification
        title="WFH mate"
        body="hey karthick water break now"
        showDesktopNotification = { isEnableNotification?showDesktopNotification:false }
        resetValue = { resetValue }
      />
    </div>
  )
}

export default BreakTimer;