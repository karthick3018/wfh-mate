import {useEffect,useState} from 'react';
import useLocalStorage  from './useLocalStorage';

const useBreakTimer = () => {
  const [{state:totalBreakTaken,setState:setTotalBreakTaken}] = useLocalStorage('breakTaken',{hours:0,minutes:0,seconds:0});
  const [state,setState] = useState(null);

  const updateBreakTimer = (existingBreakTime,state) => {
    if(state?.breakTaken){
      let result = {...existingBreakTime}
      let isAlreadyDone = false
      if(((60-(state?.breakTaken?.seconds)) + existingBreakTime?.seconds) > 59){
        result.minutes = result?.minutes + 1;
        isAlreadyDone = true
      }
      if(((state?.totalBreak-(state?.breakTaken?.minutes)) + existingBreakTime?.minutes) > 59){
        result.hours = result?.hours + 1
        isAlreadyDone = true
      }
      if(result?.hours === 0 && result?.minutes === 0 && result?.seconds === 0){
        result.minutes = ((state?.totalBreak)-1?.breakTaken?.minutes);
        result.seconds = (60-state?.breakTaken?.seconds);
        isAlreadyDone = true
      }

      if(!isAlreadyDone){
        result.minutes = result?.minutes+((state?.totalBreak-1)-state?.breakTaken?.minutes);
        result.seconds = result?.seconds+(60-state?.breakTaken?.seconds);
      }

      setTotalBreakTaken(result)
    }
   
  }

  useEffect(() => {
     let existingBreakTime = {...totalBreakTaken}
      updateBreakTimer(existingBreakTime,state);
  }, [state])

  return [setState]
}

export default useBreakTimer
