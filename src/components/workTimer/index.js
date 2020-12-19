import React,{useState} from 'react';
import {Helmet} from "react-helmet";
import Calender from '../../components/calender';
import ModalAtom from '../../uiElements/modal';
import useTimer from '../../hooks/useTimer';
import useLocalStorage from '../../hooks/useLocalStorage';
import './workTimer.css';

const WorkTimer=()=> {
  const [{state:existingValue,setState}] = useLocalStorage('timing',null);
  const [{state:isStartClicked,setState:setStartClicked}] = useLocalStorage('isStartClicked',false);
  const [{setState:setTotalBreakTaken}] = useLocalStorage('breakTaken',{hours:0,minutes:0,seconds:0});
  const [state,setStartTime] = useTimer(existingValue,isStartClicked);
  const [isModalOpen,setModalVisible] = useState(false);
  const date = new Date()



  const handleStartClick = () => {
    setStartClicked(true);
    setState(new Date().toLocaleTimeString())
    setStartTime(new Date().toLocaleTimeString())
    setTotalBreakTaken({hours:0,minutes:0,seconds:0})
  }

  const handleEndClick = () => {
     setStartClicked(false);
     setModalVisible(true);
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  return (
      <div className="work-timer-wrap">
         <Helmet>
                <title>{`wfh-mate -${date.toLocaleDateString()} ${state?.hours ? `- worked for ${state?.hours}:${state?.minutes}`:''}`}</title>
                <meta name="description" content="Work from home helper application" />

         </Helmet>
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
       {isModalOpen &&
       <ModalAtom
        isModalOpen = { isModalOpen }
        workDone = { state }
        handleModalClose = { handleModalClose }
       />}
       </div> 
  );
}

export default WorkTimer;
