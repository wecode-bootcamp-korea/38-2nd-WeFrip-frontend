import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Grid from 'elements/Grid';

const ProductsTitleBox = ({ productData }) => {
  const { discountRate, price, productImages, name, description } = productData;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextTo>
        <MdArrowForwardIos className="nextIcon" />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <MdArrowBackIos className="prevIcon" />
      </Pre>
    ),
  };

  const discountPrice =
    ((100 - parseInt(discountRate)) / 100) * parseInt(price);

  const priceToString = price => {
    return parseInt(price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <TitleContainer>
      <StyledSlider {...settings}>
        {productImages &&
          productImages.map(img => <TitleImg src={img} key={img} alt="사진" />)}
      </StyledSlider>
      <TitleInfoBox>
        <InfoTitle>{name}</InfoTitle>
        <Grid display="flex">
          <InfoDiscountRate>{priceToString(discountRate)}%</InfoDiscountRate>
          <InfoDiscountPrice>
            {priceToString(discountPrice)}원
          </InfoDiscountPrice>
          <InfoPrice>{priceToString(price)}원</InfoPrice>
        </Grid>
        <Grid>
          <DevideLine />
          <InfoDescription>{description}</InfoDescription>
        </Grid>
        <InfoUser>
          <Grid display="flex">
            <UserImg
              src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_2,f_auto,q_auto,w_56/928907BD-F3B8-479E-AA86-38CDEBD2922C_ab34ebd4401daf7f14bf16393ac50e8d23e2a363cf6bfdda4ce88ebf7fb2056d"
              alt="유저 이미지"
            />
            <UserName>지녁쿠스</UserName>
          </Grid>
          <JoinBtn>참여하기</JoinBtn>
        </InfoUser>
      </TitleInfoBox>
    </TitleContainer>
  );
};

const StyledSlider = styled(Slider)`
  position: relative;
  height: 400px;
  width: 400px;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const Pre = styled.div`
  position: absolute;
  left: 3%;
  width: 30px;
  height: 30px;
  z-index: 10;

  .prevIcon {
    color: white;
    font-size: 30px;
    z-index: 11;
  }
`;

const NextTo = styled.div`
  position: absolute;
  right: 3%;
  width: 30px;
  height: 30px;
  z-index: 10;

  .nextIcon {
    color: white;
    font-size: 30px;
    z-index: 11;
  }
`;

const TitleContainer = styled.div`
  ${({ theme }) => theme.variables.flex('row', null, null)}
  width: 100%;
  padding-bottom: 20px;
`;

const TitleImg = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 5px;
`;

const TitleInfoBox = styled.div`
  ${({ theme }) => theme.variables.position('relative', null, null)};
  margin-left: 50px;
  width: 100%;
  min-height: 400px;
`;

const InfoTitle = styled.p`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 1px;
  word-break: keep-all;
  line-height: 28px;
  overflow-wrap: break-word;
`;

const InfoDiscountRate = styled.p`
  margin-right: 12px;
  color: ${({ theme }) => theme.style.subPrimaryColor};
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -0.72px;
`;

const InfoDiscountPrice = styled.p`
  margin-right: 6px;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -0.72px;
`;

const InfoPrice = styled.p`
  margin-top: 11px;
  margin-right: 6px;
  color: ${({ theme }) => theme.style.middleGrey};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.48px;
  text-decoration: line-through;
`;

const InfoDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.5px;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const DevideLine = styled.div`
  margin: 15px 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.style.middleGrey};
`;

const InfoUser = styled.div`
  ${({ theme }) => theme.variables.position('absolute', '290px', null)};
  ${({ theme }) => theme.variables.flex('row', null, 'center')}
  padding-top: 15px;
  width: 100%;
  height: 110px;
  border-top: 1px solid ${({ theme }) => theme.style.middleGrey};

  .bookmarkIcon {
    margin-left: 350px;
    font-size: 22px;
  }
`;

const UserImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

const UserName = styled.p`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  letter-spacing: -0.54px;
`;

const JoinBtn = styled.button`
  width: 900px;
  height: 60px;
  color: ${({ theme }) => theme.style.white};
  background-color: ${({ theme }) => theme.style.primaryColor};
  border-radius: 5px;
  border: none;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
`;

export default ProductsTitleBox;
