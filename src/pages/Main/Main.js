import React from 'react';
import styled from 'styled-components';
import ProductsList from 'components/ProductsList/ProductsList';
import MainCarousel from './MainCarousel/MainCarousel';
import MainSmallBanner from './MainSmallBanner/MainSmallBanner';

const Main = () => {
  return (
    <MainContainer>
      <MainCarousel />
      {CONTENTS.map(content => (
        <ProductsList key={content.id} type={content.type} />
      ))}
      <MainSmallBanner />
    </MainContainer>
  );
};

const CONTENTS = [
  {
    id: 0,
    type: '신규 프립',
  },
  {
    id: 1,
    type: '여행을 떠나요',
  },
];

const MainContainer = styled.div`
  width: 1200px;
  padding-top: 150px;
  margin: 0 auto;
`;

export default Main;
