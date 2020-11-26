import {useState,useEffect} from 'react';
import {checkTimeDifference} from '../helpers/time';

const initialState = {
  seconds:0,
  minutes:0,
  hours:0
}

const useTimer = (existingStartTime=new Date().toLocaleTimeString(),isStart=true) => {
  const [state, setState] = useState(()=>initialState);
  const [startTime,setStartTime] = useState(existingStartTime);

  useEffect(() => {
    let timer;
    if(isStart){
      let letUpdatedTime= checkTimeDifference(startTime)
      timer = setTimeout(()=>{
        setState({
           seconds:letUpdatedTime?._data?.seconds ,
           minutes:letUpdatedTime?._data?.minutes,
           hours:letUpdatedTime?._data?.hours
        });
      },1000)
    }

    return () => clearTimeout(timer);
    
 },[state, isStart, startTime])

 return [state,setStartTime]

}

export default useTimer;