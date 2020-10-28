import React,{useEffect,useState} from 'react';
import { Progress } from 'antd';

const ProgressBar = ({time:{minutes=0,seconds=0},totalTime})=>{
  const [progressValue,setProgressValue] = useState(0);

  useEffect(() => {
      setProgressValue((minutes/totalTime)*100)
  }, [totalTime,minutes])
  
  return(
    <div>
      <Progress
       percent={progressValue}
       type="circle"
       format={() => `${minutes}:${seconds}`}
      />
    </div>
  )
}

export default ProgressBar;