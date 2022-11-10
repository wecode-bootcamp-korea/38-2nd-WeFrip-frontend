import React from 'react';
import styled from 'styled-components';
import Product from 'components/Product/Product';
import { useState } from 'react';

const Wishlistlist = ({ wished }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const newProducts = wished.map(product => ({
    ...product,
    isBookmarked: true,
  }));

  return (
    <Wrapper>
      {newProducts.map(product => (
        <Product
          key={product.productId}
          product={product}
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
        />
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
