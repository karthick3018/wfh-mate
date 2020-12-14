import React from 'react';
import {Modal} from 'antd';
import useLocalStorage from '../hooks/useLocalStorage';
import ProgressBar from './progress';
import './uiStyles/modal.css';

const ModalAtom = ({
  isModalOpen,
  workDone,
  handleModalClose
}) => {
  const [{state:totalBreakTaken,setState:setTotalBreakTaken}] = useLocalStorage('breakTaken',{hours:0,minutes:0,seconds:0});

  return (
    <>
      <Modal
        title="Day Stats"
        visible={isModalOpen}
        onOk={handleModalClose}
        onCancel={handleModalClose}
      >
        <div className="result-area">
          <div>
            <p>Total Hours Worked <span className="time-taken">{workDone?.hours<10?`0${workDone?.hours}`:workDone?.hours}:{workDone?.minutes<10?`0${workDone?.minutes}`:workDone?.minutes}:{workDone?.seconds<10?`0${workDone?.seconds}`:workDone?.seconds}</span></p>
            <ProgressBar time={workDone} percent={100} />
          </div>
          <hr className="vertical-line"/>
          <div>
            <p>Total Break taken <span className="time-taken">{totalBreakTaken?.hours<10?`0${totalBreakTaken?.hours}`:totalBreakTaken?.hours}:{totalBreakTaken?.minutes<10?`0${totalBreakTaken?.minutes}`:totalBreakTaken?.minutes}:{totalBreakTaken?.seconds<10?`0${totalBreakTaken?.seconds}`:totalBreakTaken?.seconds}</span> <span className="approx">(*approx)</span></p>
            <ProgressBar time={totalBreakTaken} percent={100} />
          </div>
        </div>
          {workDone?.hours > 9 && <p className="warning-text">hey working more than 10 hrs<span role="img" aria-labelledby="shock">😲</span>!!  take care of your health too</p>}
      </Modal>
    </>
  );
}

export default ModalAtom
