import React,{useEffect,useState} from 'react';
import { Progress } from 'antd';

const ProgressBar = ({time:{hours=0,minutes=0,seconds=0},totalTime,percent=0})=>{
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
       percent={percent||progressValue}
       type="circle"
       strokeColor ={hours>9?'red':"#FFBDA3"}
       format={() => `${hours? (hours<10? `0${hours}`:hours ):''}  ${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`}
      />
    </div>
  )
}

export default ProgressBar;