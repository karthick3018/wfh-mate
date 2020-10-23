import React,{useState} from 'react';
import useTimerHooks from './hooks/useTimerHooks';
import './App.css';

const initialState = {
  seconds:0,
  minutes:0,
  hours:0
}

const App=()=> {
  const [isTimerStart,setTimerStart] = useState(false);  
  const [state] = useTimerHooks(initialState,isTimerStart);

  return (
     <div>
       Here's wfh mate that can help you
      <div>
       <button onClick={()=>setTimerStart(true)}>Start</button>
       <p>hh:{state?.hours}mm:{state?.minutes}ss:{state?.seconds}</p>
       <button onClick={()=>alert('yahoo! great work for the day')}>End</button>
       </div> 
     </div>
  );
}

export default App;
