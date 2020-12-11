import React from 'react';
import {Modal} from 'antd';
import './uiStyles/modal.css';

const ModalAtom = ({
  isModalOpen,
  workDone,
  totalBreakTaken,
  handleModalClose
}) => {
  return (
    <>
      <Modal
        title="Day Stats"
        visible={isModalOpen}
        onOk={handleModalClose}
        onCancel={handleModalClose}
      >
        <div className="result-area">
          <p>Total Hours Worked : <span className="time-taken">{workDone?.hours<10?`0${workDone?.hours}`:workDone?.hours}:{workDone?.minutes<10?`0${workDone?.minutes}`:workDone?.minutes}:{workDone?.seconds<10?`0${workDone?.seconds}`:workDone?.seconds}</span></p>
          {workDone?.hours > 9 && <p className="warning-text">hey working more than 10 hrs<span role="img" aria-labelledby="shock">😲</span>!!  take care of health too</p>}
          <p>Total break taken:<span className="time-taken">{totalBreakTaken?.hours<10?`0${totalBreakTaken?.hours}`:totalBreakTaken?.hours}:{totalBreakTaken?.minutes<10?`0${totalBreakTaken?.minutes}`:totalBreakTaken?.minutes}:{totalBreakTaken?.seconds<10?`0${totalBreakTaken?.seconds}`:totalBreakTaken?.seconds}</span> <span className="approx">(*approx)</span></p>
        </div>
      </Modal>
    </>
  );
}

export default ModalAtom
