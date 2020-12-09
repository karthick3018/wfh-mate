import React from 'react';
import {Modal} from 'antd';

const ModalAtom = ({
  isModalOpen,
  workDone,
  totalBreakTaken,
  handleModalClose
}) => {
  const handleOk = () => {
    handleModalClose()
  };

  const handleCancel = () => {
    handleModalClose()
  };

  return (
    <>
      <Modal
        title="Day Stats"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Total Hours Worked : {workDone?.hours}:{workDone?.minutes}</p>
        <p>Total break taken: {totalBreakTaken?.hours}:{totalBreakTaken?.minutes}:{totalBreakTaken?.seconds}</p>
      </Modal>
    </>
  );
}

export default ModalAtom
