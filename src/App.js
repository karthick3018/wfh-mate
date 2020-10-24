import React from 'react';
import WorkTimer from './components/workTimer';
import BreakTimer from './components/breakTimer';
import './App.css';

const App=()=> {
  return (
     <div>
       Here's wfh mate that can help you
       <WorkTimer/>
       <BreakTimer/>
     </div>
  );
}

export default App;
