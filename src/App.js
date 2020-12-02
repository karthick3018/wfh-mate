import React from 'react';
import WorkTimer from './components/workTimer';
import BreakTimer from './components/breakTimer';
import WaterBreakTimer from './components/waterBreakTimer';
import Note from './components/note';
import './App.css';

const App=()=> {
  return (
     <div className="main-wrapper">
       Here's wfh mate that can help you
       <div className="components-wrapper">
        <WorkTimer />
        <Note/>
        <div className="break-wrap">
          <BreakTimer />
          <WaterBreakTimer />
        </div>
       </div>
     </div>
  );
}

export default App;
