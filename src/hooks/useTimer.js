import {useState,useEffect} from 'react';

const initialState = {
  seconds:0,
  minutes:0,
  hours:0
}

const useTimer = (existingState=initialState,isStart=true) => {

  const [state, setState] = useState(()=>existingState);

  useEffect(() => {
    let timer;
    if(isStart){
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
    
 },[state,isStart])

 return [state]

}

export default useTimer;