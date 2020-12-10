import React from 'react';
import {Modal} from 'antd';

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
        <p>Total Hours Worked : {workDone?.hours}:{workDone?.minutes}</p>
        <p>Total break taken: {totalBreakTaken?.hours}:{totalBreakTaken?.minutes}:{totalBreakTaken?.seconds}</p>
      </Modal>
    </>
  );
}

export default ModalAtom
