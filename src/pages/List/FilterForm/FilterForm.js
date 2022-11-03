import React from 'react';
import styled from 'styled-components';

const FilterForm = ({ onFilter }) => {
  const handleClick = e => {
    onFilter(e.target.value);
  };
  return (
    <FilterFormWrap>
      {filterInputData.map(({ title, sort }) => (
        <FilterSelectList key={sort}>
          <Title>{title}</Title>
          <input
            name="filter"
            type="radio"
            value={sort}
            onClick={handleClick}
          />
        </FilterSelectList>
      ))}
    </FilterFormWrap>
  );
};
const FilterFormWrap = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
`;
const FilterSelectList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  input {
    width: 18px;
    height: 18px;
    padding: 2px;
  }
  input[type='radio']:checked {
    -webkit-appearance: none;
    background-color: ${({ theme }) => theme.style.primaryColor};
    color: ${({ theme }) => theme.style.primaryColor};
    border-radius: 50%;
  }
`;
const Title = styled.p`
  font-size: 16px;
`;
export default FilterForm;

const filterInputData = [
  {
    title: '등록일순',
    sort: 'latest',
  },
  {
    title: '가격 높은순',
    sort: 'desc',
  },
  {
    title: '가격 낮은순',
    sort: 'asc',
  },
];
