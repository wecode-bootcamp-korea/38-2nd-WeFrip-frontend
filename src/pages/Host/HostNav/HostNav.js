import React from 'react';
import styled from 'styled-components';
import Text from 'elements/Text';
import { useNavigate } from 'react-router-dom';

const HostNav = ({ active }) => {
  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <NavContainer>
      <NavTopBox>
        <NavGuideBox>
          <NavHostText>호스트 관리 페이지</NavHostText>
          <Text padding="0 0 0 10px" size="14px">
            위프립 운영(주문취소) 관련 유의사항 안내
          </Text>
        </NavGuideBox>
        <NavUserInfoBox>
          <NavUserImg src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,f_auto,h_150,q_auto,w_150/profile-3_a7bb75faaaaf0565624b16466f2d22ae7859b3482831d7be1f7478aff858f8ec" />
          <Text bold="bold">지녁쿠스</Text>
          <NavLogoutBtn onClick={userLogout}>로그아웃</NavLogoutBtn>
        </NavUserInfoBox>
      </NavTopBox>
      <NavBottomBox>{active}</NavBottomBox>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  padding-left: 250px;
  width: 100%;
  height: 160px;
  background-color: white;
  z-index: 99;
`;

const NavTopBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  padding: 30px;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.style.middleGrey};
`;

const NavGuideBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  height: 100px;
`;

const NavHostText = styled.p`
  font-weight: 700;
  padding-right: 10px;
  border-right: 1px solid ${({ theme }) => theme.style.middleGrey};
`;

const NavUserInfoBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
`;

const NavUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-right: 15px;
`;

const NavLogoutBtn = styled.button`
  margin: 15px;
  width: 65px;
  height: 30px;
  color: ${({ theme }) => theme.style.black};
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const NavBottomBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'flex-start', 'center')};
  padding: 20px;
  width: 100%;
  height: 60px;
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.style.middleGrey};
`;

export default HostNav;
