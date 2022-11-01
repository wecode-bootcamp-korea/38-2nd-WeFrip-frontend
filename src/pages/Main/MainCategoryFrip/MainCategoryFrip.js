import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from 'components/Product/Product';

const MainCategoryFrip = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`/data/RecentFrip.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생, check status code');
      })
      .then(result => setCategory(result.data.slice(0, 4)))
      .catch(error => alert(error));
  }, []);

  return (
    <MainCategoryFripContainer>
      <CategoryTitleBox>
        <CategoryTitle>나의 일상을 변화시켜줄 프립</CategoryTitle>
        <CategorySeeAll>전체 보기</CategorySeeAll>
      </CategoryTitleBox>
      <CategoryListBox>
        {category?.map(product => (
          <Product key={product.productId} product={product} />
        ))}
      </CategoryListBox>
    </MainCategoryFripContainer>
  );
};

const MainCategoryFripContainer = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const CategoryTitleBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  width: 1200px;
  margin: 0 auto;
`;

const CategoryTitle = styled.h2`
  margin: 20px 0;
  color: ${({ theme }) => theme.style.black};
  font-weight: bold;
  font-size: 22px;
  white-space: nowrap;
  overflow: hidden;
`;

const CategorySeeAll = styled.p`
  color: ${({ theme }) => theme.style.deepGrey};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const CategoryListBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'null')};
  width: 1200px;
  margin: 0 auto;
`;

export default MainCategoryFrip;
