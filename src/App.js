import React,{useState,useEffect} from 'react';
import WorkTimer from './components/workTimer';
import BreakTimer from './components/breakTimer';
import WaterBreakTimer from './components/waterBreakTimer';
import Note from './components/note';
import './App.css';

const App=()=> {
  const [isNeedToPause,setNeedToPause]= useState(null);

  const handleBreakStatus = (value) => {
   setNeedToPause(value)
  }
  return (
     <div className="main-wrapper">
       Here's wfh mate that can help you
       <div className="components-wrapper">
        <WorkTimer isNeedToPause={isNeedToPause}/>
        <Note/>
        <div className="break-wrap">
          <BreakTimer onBreakChange={handleBreakStatus}/>
          <WaterBreakTimer onBreakChange={handleBreakStatus}/>
        </div>
       </div>
     </div>
  );
}

export default App;
