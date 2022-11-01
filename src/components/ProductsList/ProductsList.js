import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from 'components/Product/Product';
import API from 'config';
import { BasicApi } from 'lib/api';

const ProductsList = ({ type }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await BasicApi.get(API.mainFrip);
        const data = await res.data;
        type === '신규 프립'
          ? setProducts(JSON.parse(data.data[0].products))
          : setProducts(JSON.parse(data.data[1].products));
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  return (
    <ProductsListContainer>
      <ProductTitleBox>
        <ProductTitle>
          {type === '신규 프립' ? '신규 프립' : '여행을 떠나요'}
        </ProductTitle>
        <ProductSeeAll>전체 보기</ProductSeeAll>
      </ProductTitleBox>
      <ProductListBox>
        {products?.map(products => (
          <Product key={products.productId} product={products} />
        ))}
      </ProductListBox>
    </ProductsListContainer>
  );
};

const ProductsListContainer = styled.div`
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
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'null')};
  width: 1200px;
  margin: 0 auto;
`;

export default ProductsList;
