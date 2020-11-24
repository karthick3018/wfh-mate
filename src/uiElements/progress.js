import React,{useEffect,useState} from 'react';
import { Progress } from 'antd';

const ProgressBar = ({time:{minutes=0,seconds=0},totalTime})=>{
  const [progressValue,setProgressValue] = useState(0);

  useEffect(() => {
      setProgressValue(((totalTime-minutes)/totalTime)*100)
  }, [totalTime,minutes])

  useEffect(() => {
    if(seconds!==0 && minutes===0){
     setProgressValue(95)
    }
  }, [seconds,minutes])
  
  return(
    <div>
      <Progress
       percent={progressValue}
       type="circle"
       strokeColor ="#FFBDA3"
       format={() => `${minutes}:${seconds}`}
      />
    </div>
  )
}

export default ProgressBar;