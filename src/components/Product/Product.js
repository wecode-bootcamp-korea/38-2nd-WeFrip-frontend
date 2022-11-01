import React from 'react';
import styled from 'styled-components';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Product = ({
  id,
  imgUrl,
  location,
  title,
  price,
  discountRate,
  isBookMarked,
}) => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const discountPrice = price - price * (discountRate / 100);

  const postWishInfo = id => {
    if (!token) {
      return alert('회원전용 서비스입니다!');
    }

    fetch(``, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        productId: id,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생, check status code');
      })
      .catch(error => alert(error));
  };

  return (
    <ProductContainer
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      <ProductImg src={imgUrl} alt="상품 사진" />
      {isBookMarked ? (
        <BsBookmark
          className="outlinedIcon"
          onClick={e => {
            postWishInfo(id);
            e.stopPropagation();
          }}
        />
      ) : (
        <BsBookmarkFill
          className="filledIcon"
          onClick={e => {
            postWishInfo(id);
            e.stopPropagation();
          }}
        />
      )}
      <ProductLocation>{location}</ProductLocation>
      <ProductTitle>
        {title?.length > 35 ? title.slice(0, 35) + '. . .' : title}
      </ProductTitle>
      <DevideLine />
      <ProductPrice>{price}원</ProductPrice>
      <ProductDicountRate>
        {discountRate}%
        <ProductDicountPrice>{discountPrice}원</ProductDicountPrice>
      </ProductDicountRate>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  ${({ variables }) => variables.position('relative', null, null)}
  width: 290px;
  cursor: pointer;

  .outlinedIcon {
    ${({ variables }) => variables.position('absolute', '240px', '20px')}
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.style.white};
    cursor: pointer;
  }

  .filledIcon {
    ${({ variables }) => variables.position('absolute', '240px', '20px')}
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.style.subPrimaryColor};
    cursor: pointer;
  }
`;

const ProductImg = styled.img`
  width: 289px;
  height: 289px;
`;

const ProductLocation = styled.p`
  margin: 10px;
  color: ${({ theme }) => theme.style.middleGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
`;

const ProductTitle = styled.p`
  margin: 10px;
  max-height: 40px;
  height: auto;
  font-size: 16px;
  font-weight: 400;
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 20px;
`;

const DevideLine = styled.hr`
  margin: 10px;
`;

const ProductPrice = styled.p`
  margin: 10px;
  color: ${({ theme }) => theme.style.disabled};
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.48px;
  text-decoration: line-through;
`;

const ProductDicountRate = styled.p`
  margin: 10px;
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
