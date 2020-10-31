import React from 'react';
import WorkTimer from './components/workTimer';
import BreakTimer from './components/breakTimer';
import WaterBreakTimer from './components/waterBreakTimer';
import Note from './components/note';
import './App.css';

const App=()=> {
  return (
     <div>
       Here's wfh mate that can help you
       <WorkTimer/>
       <BreakTimer/>
       <WaterBreakTimer/>
       <Note/>
     </div>
  );
}

export default App;
