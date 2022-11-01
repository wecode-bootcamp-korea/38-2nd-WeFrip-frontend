import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainCarousel = () => {
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

  return (
    <MainCarouselContainer>
      <StyledSlider {...settings}>
        {CONTENTS.map(img => (
          <CarouselImg src={img.imgUrl} alt="배너사진" key={img.id} />
        ))}
      </StyledSlider>
    </MainCarouselContainer>
  );
};

const CONTENTS = [
  {
    id: 0,
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FbPt2Uf%2FbtrP8LeXNtV%2FeBiQnawqACLsFM3WXsxA21%2Fimg.png',
  },
  {
    id: 1,
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FvhMFr%2FbtrP8KHbJbt%2FfjKpQpLVrh8mW1T0Or4CtK%2Fimg.png',
  },
  {
    id: 2,
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FlAkpC%2FbtrP9HivKgI%2FSzP7YDdC3KvpRvGotYdkfK%2Fimg.png',
  },
  {
    id: 3,
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FwAQZI%2FbtrQaLkrX5t%2F8bvWZfKxJ3tHttvweElQ6K%2Fimg.png',
  },
  {
    id: 4,
    imgUrl:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FlYVVg%2FbtrP7TEgFya%2FUWyz1qmFOAKeKvTmBii6x1%2Fimg.png',
  },
];

const MainCarouselContainer = styled.div`
  width: 100%;
  height: 310px;
`;
const StyledSlider = styled(Slider)`
  position: relative;
  height: 100%;
  width: 100%;
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

const CarouselImg = styled.img`
  width: 500px;
  height: 310px;
`;

export default MainCarousel;
