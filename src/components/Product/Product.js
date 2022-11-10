import React from 'react';
import styled from 'styled-components';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { authApi } from 'lib/api';
import API from 'config';

const Product = ({ product, bookmarks, setBookmarks }) => {
  const {
    productId,
    thumbnailImageUrl,
    discountRate,
    locationGroupName,
    name,
    price,
    isBookmarked,
  } = product;

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const priceToString = price => {
    return parseInt(price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const discountPrice = priceToString(price - price * (discountRate / 100));

  const postWishInfo = productId => {
    if (!token) {
      return alert('회원전용 서비스입니다!');
    }
    try {
      authApi.post(API.wishlist, { productId });
    } catch (err) {
      alert(err);
    }
  };

  const deleteBookmark = productId => {
    const filteredBookmarks = bookmarks.filter(
      bookmark => bookmark.productId !== productId
    );
    setBookmarks(filteredBookmarks);
  };

  const addBookmark = productId => {
    setBookmarks([...bookmarks, { productId: productId }]);
  };

  return (
    <ProductContainer
      onClick={() => {
        navigate(`/products/${productId}`);
      }}
      variables
    >
      <ProductImg src={thumbnailImageUrl} alt="상품 사진" />
      <TextWrap>
        {isBookmarked ? (
          <BsBookmarkFill
            className="outlinedIcon"
            onClick={e => {
              postWishInfo(productId);
              token && deleteBookmark(productId);
              e.stopPropagation();
            }}
          />
        ) : (
          <BsBookmark
            className="filledIcon"
            onClick={e => {
              postWishInfo(productId);
              token && addBookmark(productId);
              e.stopPropagation();
            }}
          />
        )}
        <ProductLocation>{locationGroupName}</ProductLocation>
        <ProductTitle>{name}</ProductTitle>
        <DevideLine />
        <ProductPrice>{priceToString(price)}원</ProductPrice>
        <ProductDicountRate>
          {discountRate}%
          <ProductDicountPrice>{discountPrice}원</ProductDicountPrice>
        </ProductDicountRate>
      </TextWrap>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  ${({ theme }) => theme.variables.position('relative', null, null)}
  width: 260px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.style.lightGrey};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px 0px;
  }

  .outlinedIcon {
    ${({ theme }) => theme.variables.position('absolute', '210px', '20px')}
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.style.subPrimaryColor};
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
const TextWrap = styled.div`
  padding: 10px 20px;
`;
const ProductImg = styled.img`
  display: block;
  width: 100%;
  height: 259px;
  object-fit: cover;
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
  line-height: 22px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
