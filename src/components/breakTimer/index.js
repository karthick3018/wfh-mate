import React,{useState,useEffect} from 'react';
import Switch from '../../uiElements/switch';
import ProgressBar from '../../uiElements/progress';
import {ALARM_TONE} from '../../helpers/sounds';
import DesktopNotification from '../../uiElements/desktopNotification';
import useLocalStorage  from '../../hooks/useLocalStorage';
import useReduceTimer from '../../hooks/useReduceTimer';
import PlayButton from '../icons/play.svg';
import PauseButton from '../icons/video-pause-button.svg';
import StopButton from '../icons/stop.svg';
import PlusIcon from '../icons/plus.svg';
import MinusIcon from '../icons/minus.svg';
import TiredIllustration from '../illustrations/tired.png';
import './breakTimer.css';

const BreakTimer = ({onBreakChange}) => {
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
       handleEnd()
   }
   setValueInLocalStore(state)
  }, [state,isEnableNotification,isAlarmEnabled,setValueInLocalStore])

  const playAudio = () => {
    const audio = new Audio(ALARM_TONE);
    audio.play();
  }


  const handleIncrement = () => {
    if(breakTime?.minutes<45)
    {
      setBreakTime(prevBreakTime => {
        return {...prevBreakTime, minutes: prevBreakTime.minutes+5};
      });
      setState(prevState => {
          return {...prevState, minutes: prevState.minutes+5};
      })
    }
    
  }
  const handleDecrement = () => {
     if(breakTime?.minutes>5)
     {
      setBreakTime(prevBreakTime => {
        return {...prevBreakTime, minutes: prevBreakTime.minutes-5};
      });
      setState(prevState => {
        return {...prevState, minutes: prevState.minutes-5};
    })
     }
   
  }

  const handleStart = () => {
    setBreakStartClicked(!isBreakStartClicked);
   // setState(breakTime)
    onBreakChange(true);
  }

  const handlePause = () => {
    setBreakStartClicked(false);
    onBreakChange(false);
  }

  const handleEnd = () => {
    setBreakStartClicked(false);
    setValueInLocalStore({
      seconds:0,
      minutes:5
    })
    setState({
      seconds:0,
      minutes:5
    })
    onBreakChange(false);
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
    <div className="break-wrapper">
      <div className="tired-img-wrapper">
        <figure className="tired-img-figure">
          <img className="tired-img" src ={TiredIllustration} alt="tired" />
        </figure>
      </div>
     <div className="break-control-wrapper">
      <div className="set-break-wrapper">
        <p>Set break for</p>
        <div className="set-break-time">
         <figure className="set-break-icon" onClick={handleIncrement}><img src={PlusIcon} alt="plus"/> </figure>
           <p>{breakTime?.minutes}  mins</p>
           <figure className="set-break-icon" onClick={handleDecrement}><img src={MinusIcon} alt="minus"/> </figure>
        </div>
       </div>

        <div className="switch-wrapper">
        <Switch label={"Desktop notification"} handleSwitchChange={handleDesktopSwitchChange} checked={isEnableNotification}/>
        <Switch label={"Alert tone"} handleSwitchChange={handleAlertSwitchChange} checked={isAlarmEnabled}/>
        </div>
      </div> 

      <div>
       <ProgressBar time={state} totalTime={state?.minutes}/>
      <div className="timer-control-wrapper">
        <figure className="timer-icons" onClick={handleStart}><img src={PlayButton} alt="play/pause"/></figure>
        {/* <figure className="timer-icons" onClick={handlePause}><img src={PauseButton} alt="pause"/></figure> */}
        <figure className="timer-icons" onClick={handleEnd}><img src={StopButton} alt="stop"/></figure>
       </div>
      </div>

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