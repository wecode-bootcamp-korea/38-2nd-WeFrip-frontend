import React from 'react';
import styled from 'styled-components';
import ProductsInfoBox from './ProductsInfoBox/ProductsInfoBox';
import ProductsRecommendBox from './ProductsRecommendBox/ProductsRecommendBox';
import ProductsTitleBox from './ProductsTitleBox/ProductsTitleBox';
const Products = () => {
  return (
    <ProductsContainer>
      <ProductsTitleBox />
      <ProductsInfoBox />
      <ProductsRecommendBox />
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  margin: 150px auto;
  width: 1000px;
`;

export default Products;
