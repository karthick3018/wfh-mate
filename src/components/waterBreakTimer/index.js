import React,{useState,useEffect} from 'react';
import {WATER_TONE} from '../../helpers/sounds';
import Switch from '../../uiElements/switch';
import DesktopNotification from '../../uiElements/desktopNotification';
import ProgressBar from '../../uiElements/progress';
import useLocalStorage  from '../../hooks/useLocalStorage';
import useReduceTimer from '../../hooks/useReduceTimer';
import PlusIcon from '../icons/plus.svg';
import MinusIcon from '../icons/minus.svg';
import PlayButton from '../icons/play.svg';
import StopButton from '../icons/stop.svg';
import './waterBreak.css'

const WaterBreakTimer = () => {
  const [waterBreakTime,setWaterBreakTime] = useState({
    seconds:0,
    minutes:15
  });
  const [showDesktopNotification,setDesktopNotification] = useState(false);
  const [isWaterBreakStartClicked,setWaterBreakStartClicked] = useState(false);
  const [{state:isEnableNotification,setState:setEnableNotification}] = useLocalStorage('isDesktopNotificationWater',true);
  const [state,setState] = useReduceTimer(false,isWaterBreakStartClicked)
  let waterTimerSetIntervalTime;

   
    window.onbeforeunload = function() {
      if(isWaterBreakStartClicked)
      return "Hey you need to restart the break timers alone if you leave the page, are you sure?";
    };
   

  useEffect(() => {
    if(state?.seconds===0 && state?.minutes===0){
      setState(prevBreakTime => {
        return {...prevBreakTime, minutes: waterBreakTime?.minutes,seconds:0};
      });
   }
  }, [state, setState, waterBreakTime])


  const handleSetInterval = () => {
   waterTimerSetIntervalTime=setInterval(function(){
       setDesktopNotification(true) 
       setState({
         minutes:14,seconds:59
       })
      }, waterBreakTime?.minutes * 60000);
  }

   
  const handleIncrement = () => {
    if(waterBreakTime?.minutes<60)
    setWaterBreakTime(prevBreakTime => {
      return {...prevBreakTime, minutes: prevBreakTime.minutes+15};
    });
    setState(prevState=>{
      return {...prevState, minutes: prevState.minutes+15};
    })
  }
  const handleDecrement = () => {
     if(waterBreakTime?.minutes>15)
     setWaterBreakTime(prevBreakTime => {
      return {...prevBreakTime, minutes: prevBreakTime.minutes-15};
    });
    setState(prevState=>{
      return {...prevState, minutes: prevState.minutes-15};
    })
  }

  const handleStart = () => {
    setWaterBreakStartClicked(true);
    setState(waterBreakTime);
    handleSetInterval();
  }

  const handleEnd = () => {
    setWaterBreakStartClicked(false);
    setState({
      seconds:0,
      minutes: waterBreakTime?.minutes
    })
    clearInterval(waterTimerSetIntervalTime);
  }

  const resetValue = () => {
    setDesktopNotification(false)
  }

  const handleSwitchChange = (value) => {
    setEnableNotification(value)
  }

  return (
    <div className="water-break-wrapper">
        <div className="notify-text-water">
          <p className="sticky-note-wrap sticky-note-orange sticky-note-wrap-text">Staying hydrated is an important one . Make sure you're drinking sufficient water...</p>
        </div>

        <div>
        <ProgressBar time={state} totalTime={waterBreakTime?.minutes}/>
        <div className="water-break-control">
        <figure className="timer-icons" onClick={handleStart}><img src={PlayButton} alt="play/pause"/></figure>
        <figure className="timer-icons" onClick={handleEnd}><img src={StopButton} alt="stop"/></figure>
        </div>
       </div> 


       <div className="set-water-break-wrapper">
        <div className="set-water-break">
          <p>Water break on every </p>
          <div className="water-break-timer">
            <figure className="set-break-icon" onClick={handleIncrement}>
              <img src={PlusIcon} alt="play"/>
            </figure>
            <p>{waterBreakTime?.minutes}  mins</p>
            <figure className="set-break-icon" onClick={handleDecrement}>
              <img src={MinusIcon} alt="minus"/>
            </figure>
          </div>
        </div>
         <Switch label={"Desktop notification"} handleSwitchChange={handleSwitchChange} checked={isEnableNotification}/>
         </div>
     


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