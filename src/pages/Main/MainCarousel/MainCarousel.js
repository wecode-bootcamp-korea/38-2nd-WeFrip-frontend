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
      'https://images.unsplash.com/photo-1602248034387-a8c244b224b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2272&q=80',
  },
  {
    id: 1,
    imgUrl:
      'https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 2,
    imgUrl:
      'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 3,
    imgUrl:
      'https://images.unsplash.com/photo-1534081333815-ae5019106622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
  },
  {
    id: 4,
    imgUrl:
      'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
];

const MainCarouselContainer = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
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
  height: 350px;
  object-fit: cover;
`;

export default MainCarousel;
