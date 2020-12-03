import {useState,useEffect} from 'react';

const initialState = {
  seconds:0,
  minutes:0,
}

const useReduceTimer = (existingState=initialState,isStart=false,isPause=true) => {

  const [state, setState] = useState(()=>existingState);

  useEffect(() => {
    let timer;
    if(isStart && isPause){
      timer = setTimeout(()=>{
        if(state?.seconds<=59 && state?.seconds>0){
          setState(prevState => {
           return {...prevState, seconds: prevState.seconds-1};
         });
        }
        if(state?.seconds===0 && state?.minutes>0){
          setState(prevState => {
            return {...prevState,seconds: 59,minutes:prevState.minutes-1};
          });
         }
      },1000)
    }

    return () => clearTimeout(timer);
    
 },[state,isStart,isPause])

 return [state,setState]

}

export default useReduceTimer;