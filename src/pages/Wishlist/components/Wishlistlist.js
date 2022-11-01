import React from 'react';
import styled from 'styled-components';
import Product from 'components/Product/Product';

const Wishlistlist = ({ wished }) => {
  return (
    <Wrapper>
      {wished.map(product => (
        <Product key={product.productId} product={product} />
      ))}
    </Wrapper>
  );
};

export default Wishlistlist;

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;
