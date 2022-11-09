import React from 'react';
import styled from 'styled-components';
import ProductsCurriculum from './ProductsCurriculum/ProductsCurriculum';
import ProductsMap from './ProductsMap/ProductsMap';

const ProductsInfoBox = ({ productData }) => {
  return (
    <InfoContainer>
      <ProductsCurriculum productData={productData} />
      <ProductsMap productData={productData} />
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  width: 100%;
`;

export default ProductsInfoBox;
