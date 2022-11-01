import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from '../../../components/Product/Product';
import variables from '../../../styles/variables';

const MainRecentFrip = () => {
  const [product, setProduct] = useState([]);

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
      .then(result => setProduct(result.data.slice(0, 4)))
      .catch(error => alert(error));
  }, []);

  return (
    <MainRecentFripContainer>
      <ProductTitleBox>
        <ProductTitle>신규 프립</ProductTitle>
        <ProductSeeAll>전체 보기</ProductSeeAll>
      </ProductTitleBox>
      <ProductListBox>
        {product?.map(product => (
          <Product key={product.productId} product={product} />
        ))}
      </ProductListBox>
    </MainRecentFripContainer>
  );
};

const MainRecentFripContainer = styled.div`
  margin-top: 100px;
  width: 100%;
`;

const ProductTitleBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  width: 1200px;
  margin: 0 auto;
`;

const ProductTitle = styled.h2`
  margin: 20px 0;
  color: ${({ theme }) => theme.style.black};
  font-weight: bold;
  font-size: 22px;
  white-space: nowrap;
  overflow: hidden;
`;

const ProductSeeAll = styled.p`
  color: ${({ theme }) => theme.style.deepGrey};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const ProductListBox = styled.div`
  ${variables.flex('row', 'space-between', 'null')}
  width: 1200px;
  margin: 0 auto;
`;

export default MainRecentFrip;
