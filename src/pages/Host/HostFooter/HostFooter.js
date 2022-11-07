import React from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const HostFooter = ({ scrollRef }) => {
  const scrollUp = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollDown = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return (
    <FooterContainer>
      <FooterBtnBox>
        <ScrollBtn onClick={scrollDown}>
          <RiArrowDownSLine />
        </ScrollBtn>
        <ScrollBtn onClick={scrollUp}>
          <RiArrowUpSLine />
        </ScrollBtn>
      </FooterBtnBox>
      <FooterNextBtn>다음</FooterNextBtn>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  position: fixed;
  bottom: 0;
  padding-left: 270px;
  width: 100%;
  height: 71px;
  border-top: 1px solid ${({ theme }) => theme.style.middleGrey};
  background-color: white;
`;

const FooterBtnBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  width: 120px;
  height: 54px;
`;

const ScrollBtn = styled.button`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')};
  width: 54px;
  height: 54px;
  background: white;
  color: ${({ theme }) => theme.style.deepGrey};
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  border-radius: 3px;
  font-size: 25px;
`;

const FooterNextBtn = styled.button`
  margin-right: 20px;
  width: 150px;
  height: 50px;
  background-color: ${({ theme }) => theme.style.primaryColor};
  color: ${({ theme }) => theme.style.white};
  border: none;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export default HostFooter;
