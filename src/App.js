import React,{useEffect} from 'react';
import WorkTimer from './components/workTimer';
import BreakTimer from './components/breakTimer';
import WaterBreakTimer from './components/waterBreakTimer';
import Note from './components/note';
import Footer from './components/footer';
import './App.css';

const App=()=> {

  useEffect(()=>{
      Notification.requestPermission() && Notification.requestPermission().then(function(permission) {
        if(permission === 'denied'){
          alert('Allow notification in site settings to achieve the functionality!')
        }
  })
  
  },[])

  return (
     <div className="main-wrapper">
       <div className="components-wrapper">
        <WorkTimer />
        
        <Note/>
        <div className="break-wrap">
          <BreakTimer />
          <WaterBreakTimer />
          <p className="clear-note">*only this part will reset during page refresh</p>
        </div>
       </div>
       <footer className="footer">
        <Footer/>
       </footer>
     </div>
  );
}

export default App;
