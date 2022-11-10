import React from 'react';
import styled from 'styled-components';

const MainSmallBanner = () => {
  return (
    <MainSmallBannerContainer>
      <SmallBannerImg src="/images/배너사진.jpg" alt="배너 사진" />
    </MainSmallBannerContainer>
  );
};

const MainSmallBannerContainer = styled.div`
  margin: 100px 0;
  width: 100%;
`;

const SmallBannerImg = styled.img`
  width: 100%;
`;

export default MainSmallBanner;
