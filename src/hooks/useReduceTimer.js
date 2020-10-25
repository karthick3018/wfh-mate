import {useState,useEffect} from 'react';

const initialState = {
  seconds:0,
  minutes:0,
}

/**  
* @params isWaterBreak is used to make a difference for break timer and water break timer
**/

const useReduceTimer = (existingState=initialState,isStart=true,isWaterBreak=false) => {

  const [state, setState] = useState(()=>existingState);

  useEffect(() => {
    let timer;
    if(isStart){
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
         // for water break
         if(state?.seconds===0 && state?.minutes===0 && isWaterBreak){
          setState({
            seconds: 59,minutes:58
          });
         }
      },1000)
    }

    return () => clearTimeout(timer);
    
 },[state,isStart,isWaterBreak])

 return [state,setState]

}

export default useReduceTimer;