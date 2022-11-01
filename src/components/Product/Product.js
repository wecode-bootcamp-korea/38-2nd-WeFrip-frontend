import React from 'react';
import styled from 'styled-components';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { AuthApi } from 'lib/api';
import API from 'config';

const Product = ({ product }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const discountPrice =
    product.price - product.price * (product.discountRate / 100);

  const postWishInfo = productId => {
    if (!token) {
      return alert('회원전용 서비스입니다!');
    }
    try {
      AuthApi.post(API.wishlist, { productId });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <ProductContainer
      onClick={() => {
        navigate(`/products/${product.productId}`);
      }}
      variables
    >
      <ProductImg src={product.thumbnailImageUrl} alt="상품 사진" />
      {product.isBookmarked ? (
        <BsBookmarkFill
          className="filledIcon"
          onClick={e => {
            postWishInfo(product.productId);
            e.stopPropagation();
          }}
        />
      ) : (
        <BsBookmark
          className="filledIcon"
          onClick={e => {
            postWishInfo(product.productId);
            e.stopPropagation();
          }}
        />
      )}
      <ProductLocation>{product.locationGroupName}</ProductLocation>
      <ProductTitle>
        {product.name?.length > 40
          ? product.name.slice(0, 40) + '. . .'
          : product.name}
      </ProductTitle>
      <DevideLine />
      <ProductPrice>{product.price}원</ProductPrice>
      <ProductDicountRate>
        {product.discountRate}%
        <ProductDicountPrice>{discountPrice}원</ProductDicountPrice>
      </ProductDicountRate>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  ${({ theme }) => theme.variables.position('relative', null, null)}
  width: 260px;
  cursor: pointer;

  .outlinedIcon {
    ${({ theme }) => theme.variables.position('absolute', '210px', '20px')}
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.style.white};
    cursor: pointer;
  }

  .filledIcon {
    ${({ theme }) => theme.variables.position('absolute', '210px', '20px')}
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.style.subPrimaryColor};
    cursor: pointer;
  }
`;

const ProductImg = styled.img`
  width: 259px;
  height: 259px;
  border-radius: 5px;
`;

const ProductLocation = styled.p`
  color: ${({ theme }) => theme.style.middleGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
`;

const ProductTitle = styled.p`
  margin-top: 10px;
  min-height: 44px;
  height: auto;
  font-size: 16px;
  font-weight: 400;
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 22px;
`;

const DevideLine = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.style.middleGrey};
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  color: ${({ theme }) => theme.style.middleGrey};
  font-size: 13px;
  line-height: 14px;
  letter-spacing: -0.48px;
  text-decoration: line-through;
`;

const ProductDicountRate = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.style.subPrimaryColor};
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
`;

const ProductDicountPrice = styled.span`
  margin-left: 5px;
  color: ${({ theme }) => theme.style.black};
  font-size: 16px;
  font-weight: 900;
  line-height: 22px;
`;

export default Product;
