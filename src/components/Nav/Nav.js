import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  BsList,
  BsPencilSquare,
  BsBookmark,
  BsPerson,
  BsSearch,
} from 'react-icons/bs';

const Nav = () => {
  return (
    <NavContainer>
      <NavTop>
        <GridWrap>
          <Link to="/host">호스트지원</Link>
          <MenuList>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>자주묻는질문</li>
            <li>공지사항</li>
          </MenuList>
        </GridWrap>
      </NavTop>
      <NavBottom>
        <GridWrap>
          <BsList className="icon" />
          <Logo>
            <Link to="/">WeFrip</Link>
          </Logo>
          <SearchForm>
            <InputBox placeholder="어떤 위프립을 찾으시나요?" />
            <BsSearch className="searchIcon" />
          </SearchForm>
          <MenuIconWrap>
            <Link to="/host">
              <BsPencilSquare className="icon" />
            </Link>
            <Link to="/wishlist">
              <BsBookmark className="icon" />
            </Link>
            <Link to="/mypage">
              <BsPerson className="icon" />
            </Link>
          </MenuIconWrap>
        </GridWrap>
      </NavBottom>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.style.lightGrey};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  a {
    text-decoration: none;
  }
`;
const NavTop = styled.div`
  background-color: ${props => props.theme.style.lightGrey};
  padding: 5px 0;
  font-size: 14px;
  color: ${props => props.theme.style.middleGrey};
  a {
    color: ${props => props.theme.style.middleGrey};
  }
`;

const GridWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuList = styled.ul`
  display: flex;

  li {
    margin-right: 10px;
    cursor: pointer;
  }

  li:last-child {
    margin-right: 0;
  }
`;

const NavBottom = styled.div`
  padding: 20px 0;
  background-color: #fff;

  .icon {
    font-size: 22px;
    margin-right: 30px;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  font-family: ${props => props.theme.style.fontLogo};
  font-size: 30px;
  font-weight: 700;

  a {
    color: ${props => props.theme.style.primaryColor};
  }
`;

const SearchForm = styled.div`
  position: relative;
  width: 60%;
  padding: 0 50px;

  .searchIcon {
    position: absolute;
    top: 50%;
    left: 70px;
    transform: translateY(-50%);
    color: ${props => props.theme.style.middleGrey};
    font-weight: 700;
  }
`;

const InputBox = styled.input`
  padding: 0 50px;
  width: 100%;
  height: 35px;
  border-radius: 50px;
  border: none;
  background-color: ${props => props.theme.style.lightGrey};
  &::placeholder {
    color: ${props => props.theme.style.middleGrey};
  }
  &:focus {
    outline: 1px solid ${props => props.theme.style.primaryColor};
    background-color: #fff;
  }
`;

const MenuIconWrap = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    color: #000;
  }

  a:last-child .icon {
    margin-right: 0;
    font-size: 26px;
  }
`;

export default Nav;
