import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalPopup = props => {
  const {
    title,
    subTitle,
    event,
    close,
    confirm,
    back,
    type,
    state,
    setState,
  } = props;

  const confirmHandler = e => {
    e.stopPropagation();
    event();
  };

  const BackHandler = e => {
    e.stopPropagation();
    close();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={close}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 10000,
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          width: '20em',
          boxSizing: 'border-box',
          border: 'none',
          background: 'white',
          borderRadius: '0.5em',
          outline: 'none',
          padding: '1.5em 1em',
          textAlign: 'center',
          zIndex: 30,
        },
      }}
    >
      <Title>{title}</Title>
      <CloseBtn onClick={close}>닫기</CloseBtn>
    </Modal>
  );
};
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 50px;
`;
const CloseBtn = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.style.primaryColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export default ModalPopup;
