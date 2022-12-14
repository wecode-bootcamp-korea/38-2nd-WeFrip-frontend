import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalPopup = props => {
  const {
    title,
    subTitle,
    btnTitle,
    event,
    close,
    confirm,
    back,
    type,
    state,
    setState,
    width,
    height,
    children,
    onParams,
  } = props;

  const confirmHandler = e => {
    e.stopPropagation();
    event();
    onParams();
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
          width: `${width ? width + 'px' : 'auto'}`,
          boxSizing: 'border-box',
          border: 'none',
          background: 'white',
          borderRadius: '0.5em',
          outline: 'none',
          padding: '1.5em 1em',
          textAlign: 'center',
          zIndex: 30,
          overflow: 'hidden',
          height: `${height}px`,
        },
      }}
    >
      <Title>{title}</Title>
      <Content>{children}</Content>
      <CloseBtn onClick={confirmHandler}>{btnTitle}</CloseBtn>
    </Modal>
  );
};
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Content = styled.div`
  padding: 20px 50px;
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
