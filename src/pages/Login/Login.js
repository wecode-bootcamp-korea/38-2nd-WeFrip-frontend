import React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';
import { KAKAO_AUTH_URL } from './components/OAuth';

const Login = () => {
  return (
    <LoginWrap>
      <LoginBox>
        <LoginText>
          <p className="title">반가워요</p>
          <p className="description">
            가입하면 바로 쓸 수 있는 웰컴 쿠폰을 드려요!
            <br /> 오늘부터 #위프립하자
          </p>
        </LoginText>
        <LoginBtn>
          <a href={KAKAO_AUTH_URL}>카카오톡으로 로그인하기</a>
        </LoginBtn>
      </LoginBox>
    </LoginWrap>
  );
};

const LoginWrap = styled.div`
  ${variables.flex()}
  height: 80vh;
  text-align: center;
`;
const LoginBox = styled.div`
  padding: 0 50px;
`;
const LoginText = styled.div`
  .title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
  }
  .description {
    margin-bottom: 20px;
    line-height: 1.2;
    font-size: 16px;
    color: ${({ theme }) => theme.style.middleGrey};
  }
`;
const LoginBtn = styled.button`
  width: 100%;
  padding: 20px 0;
  border-radius: 10px;
  background-color: #fbe750;
  border: none;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #ecd51d;
  }

  a {
    text-decoration: none;
    color: #333;
  }
`;

export default Login;
