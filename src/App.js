import React from 'react';
import WorkTimer from './components/workTimer';
import BreakTimer from './components/breakTimer';
import WaterBreakTimer from './components/waterBreakTimer';
import Note from './components/note';
import './App.css';

const App=()=> {
  return (
     <div className="main-wrapper">
       <div className="components-wrapper">
        <WorkTimer />
        <Note/>
        <div className="break-wrap">
          <BreakTimer />
          <WaterBreakTimer />
          <p className="clear-note">*only this part will reset during page refresh</p>
        </div>
       </div>
     </div>
  );
}

export default App;
