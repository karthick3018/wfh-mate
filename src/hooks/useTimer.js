import {useState,useEffect} from 'react';

const initialState = {
  seconds:0,
  minutes:0,
  hours:0
}

const useTimer = (existingState=initialState,isStart=true,isPause=true) => {
  const [state, setState] = useState(()=>existingState);

  useEffect(() => {
    let timer;
    if(isStart && isPause){
      timer = setTimeout(()=>{
        if(state?.seconds<59){
          setState(prevState => {
           return {...prevState, seconds: prevState.seconds+1};
         });
        }
        if(state?.seconds===59){
         setState(prevState => {
           return {...prevState, seconds:0,minutes:prevState.minutes+1};
         });
        }
        if(state?.minutes===59){
          setState(prevState => {
           return {...prevState, seconds:0,minutes:0,hours:prevState.hours+1};
         });
        }
      },1000)
    }

    return () => clearTimeout(timer);
    
 },[state,isStart,isPause])

 return [state]

}

export default useTimer;