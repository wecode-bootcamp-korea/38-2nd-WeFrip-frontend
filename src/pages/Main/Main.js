import React from 'react';
import styled from 'styled-components';
import MainCarousel from './MainCarousel/MainCarousel';
import MainCategoryFrip from './MainCategoryFrip/MainCategoryFrip';
import MainRecentFrip from './MainRecentFrip/MainRecentFrip';
import MainSmallBanner from './MainSmallBanner/MainSmallBanner';

const Main = () => {
  return (
    <MainContainer>
      <MainCarousel />
      <MainRecentFrip />
      <MainCategoryFrip />
      <MainSmallBanner />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 1200px;
  padding-top: 150px;
  margin: 0 auto;
`;

export default Main;
