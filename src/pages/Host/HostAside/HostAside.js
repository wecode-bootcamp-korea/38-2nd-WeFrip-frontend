import React from 'react';
import styled from 'styled-components';

const HostAside = ({ active, setActive }) => {
  return (
    <AsideContainer>
      <AsideLogo>WeFrip</AsideLogo>
      <AsideBtnBox>
        {CONTENTS.map(button =>
          active === button.title ? (
            <AsideActiveBtn
              onClick={() => {
                setActive(button.title);
              }}
              key={button.id}
            >
              {button.title}
            </AsideActiveBtn>
          ) : (
            <AsideBtn
              onClick={() => {
                setActive(button.title);
              }}
              key={button.id}
            >
              {button.title}
            </AsideBtn>
          )
        )}
      </AsideBtnBox>
    </AsideContainer>
  );
};

const CONTENTS = [
  { id: 0, title: '프립 등록' },
  { id: 1, title: '프립 목록' },
];

const AsideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  width: 250px;
  height: 100vh;
  background-color: white;
  border-right: 1px solid ${({ theme }) => theme.style.middleGrey};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 100;
`;

const AsideLogo = styled.p`
  color: ${({ theme }) => theme.style.primaryColor};
  font-family: ${({ theme }) => theme.style.fontLogo};
  font-size: 30px;
  font-weight: 700;
`;

const AsideBtnBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  margin-top: 50px;
  width: 100%;
  height: 49.5px;
`;

const AsideBtn = styled.button`
  padding-top: 5px;
  width: 45%;
  height: 100%;
  background-color: white;
  color: ${({ theme }) => theme.style.deepGrey};
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
`;

const AsideActiveBtn = styled(AsideBtn)`
  background-color: ${({ theme }) => theme.style.primaryColor};
  color: ${({ theme }) => theme.style.white};
`;
export default HostAside;
