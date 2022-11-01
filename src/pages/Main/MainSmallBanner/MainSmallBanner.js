import React from 'react';
import styled from 'styled-components';

const MainSmallBanner = () => {
  return (
    <MainSmallBannerContainer>메인 작은 배너 위치</MainSmallBannerContainer>
  );
};

const MainSmallBannerContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid black;
  margin-top: 100px;
`;

export default MainSmallBanner;
