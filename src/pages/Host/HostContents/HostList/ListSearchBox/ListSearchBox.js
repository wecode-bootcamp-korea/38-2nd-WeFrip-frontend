import React, { useState } from 'react';
import styled from 'styled-components';
import Text from 'elements/Text';

const ListSearchBox = () => {
  const [dropDown, setDropDown] = useState({
    itemName: false,
    itemSale: false,
  });
  const [currentValue, setCurrentValue] = useState({
    itemName: '상품명',
    itemSale: '상품등록일',
  });

  return (
    <SearchContainer>
      <SearchTitle>프립 조회</SearchTitle>
      <SearchBox>
        <SearchInputBox>
          <Text margin="0 19px 0 0">검색어</Text>
          <SelectBox
            onClick={() => {
              setDropDown({
                ...dropDown,
                itemName: !dropDown.itemName,
              });
            }}
          >
            <Label>{currentValue.itemName}</Label>
            <SelectOptions dropDown={dropDown.itemName}>
              {NAME_LIST.map(category => (
                <Option
                  key={category.id}
                  onClick={() => {
                    setCurrentValue({
                      ...currentValue,
                      itemName: category.title,
                    });
                  }}
                >
                  {category.title}
                </Option>
              ))}
            </SelectOptions>
          </SelectBox>
          <SearchInput
            type="text"
            placeholder={
              currentValue.itemName === '상품명'
                ? '검색어를 입력해주세요'
                : '상품 아이디를 , 로 구분해 입력해주세요'
            }
          />
          <SearchBtn>검색</SearchBtn>
          <ResetBtn>초기화</ResetBtn>
        </SearchInputBox>
        <SearchLookupBox>
          <Text>조회 기간</Text>
          <SelectBox
            onClick={() => {
              setDropDown({
                ...dropDown,
                itemSale: !dropDown.itemSale,
              });
            }}
          >
            <Label>{currentValue.itemSale}</Label>
            <SelectOptions dropDown={dropDown.itemSale}>
              {SALE_LIST.map(category => (
                <Option
                  key={category.id}
                  onClick={() => {
                    setCurrentValue({
                      ...currentValue,
                      itemSale: category.title,
                    });
                  }}
                >
                  {category.title}
                </Option>
              ))}
            </SelectOptions>
          </SelectBox>
          {SEARCH_DATE.map(date =>
            date.title === '전체' ? (
              <SaleAllBtn>{date.title}</SaleAllBtn>
            ) : (
              <SaleBtn>{date.title}</SaleBtn>
            )
          )}
        </SearchLookupBox>
        <SearchConditionBox>
          <Text margin="0 145px 0 0">상품 상태</Text>
          {CONDITION_LIST.map(condition => (
            <SearchCondition key={condition.id}>
              <SearchConditionInput type="radio" />
              <Text>{condition.title}</Text>
            </SearchCondition>
          ))}
        </SearchConditionBox>
      </SearchBox>
    </SearchContainer>
  );
};

const NAME_LIST = [
  { id: 1, title: '상품명' },
  { id: 2, title: '상품ID' },
];

const SALE_LIST = [
  { id: 1, title: '상품등록일' },
  { id: 2, title: '판매시작일' },
  { id: 3, title: '판매종료일' },
  { id: 4, title: '상품수정일' },
];

const SEARCH_DATE = [
  { id: 1, title: '오늘' },
  { id: 2, title: '1개월' },
  { id: 3, title: '6개월' },
  { id: 4, title: '1년' },
  { id: 5, title: '5년' },
  { id: 6, title: '전체' },
];

const CONDITION_LIST = [
  { id: 1, title: '등록중' },
  { id: 2, title: '판매대기' },
  { id: 3, title: '판매중' },
  { id: 4, title: '판매종료' },
  { id: 5, title: '품절' },
];

const SearchContainer = styled.div`
  padding: 30px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
`;

const SearchTitle = styled.p`
  margin-bottom: 40px;
  font-size: 17px;
  font-weight: bold;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 200px;
`;

const SelectBox = styled.div`
  position: relative;
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  margin-right: 20px;
  margin-left: 150px;
  padding: 8px;
  width: 150px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
  &::before {
    content: '⌵';
    position: absolute;
    top: 5px;
    right: 8px;
    color: ${({ theme }) => theme.style.primaryColor};
    font-size: 20px;
  }
`;

const Label = styled.label`
  margin-left: 10px;
  font-size: 14px;
  text-align: center;
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  display: ${props => (props.dropDown ? '' : 'none')};
  width: 100%;
  padding: 0;
  background-color: white;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  list-style: none;
  z-index: 100;
`;

const Option = styled.li`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  padding: 20px 8px;
  height: 30px;
  background-color: white;
  font-size: 14px;
  transition: background-color 0.2s ease-in;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.style.primaryColor};
  }
`;

const SearchInputBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', null, null)};
  width: 100%;
`;
const SearchInput = styled.input`
  margin-right: 20px;
  padding-left: 20px;
  width: 400px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
`;

const SearchBtn = styled.button`
  margin-right: 20px;
  width: 70px;
  height: 40px;
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.style.primaryColor};
  border-radius: 5px;
  font-size: 15px;
`;

const ResetBtn = styled(SearchBtn)`
  background-color: ${({ theme }) => theme.style.middleGrey};
  color: white;
`;

const SaleBtn = styled(SearchBtn)`
  margin-top: 10px;
  margin-right: 10px;
  width: 50px;
  height: 30px;
  color: black;
  background: ${({ theme }) => theme.style.middleGrey};
  font-size: 12px;
  font-weight: 700;
`;

const SaleAllBtn = styled(SaleBtn)`
  background: ${({ theme }) => theme.style.primaryColor};
  color: white;
  font-size: 12px;
  font-weight: 700;
`;

const SearchLookupBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', null, null)};
  margin: 30px 0;
  width: 100%;
  height: 50px;
`;

const SearchConditionBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', null, null)};
  width: 100%;
`;

const SearchCondition = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'flex-start', 'center')};
  width: 110px;
`;

const SearchConditionInput = styled.input`
  margin-right: 10px;
  margin-bottom: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  accent-color: ${({ theme }) => theme.style.primaryColor};
  background-color: ${({ theme }) => theme.style.white};
  cursor: pointer;
`;

export default ListSearchBox;
