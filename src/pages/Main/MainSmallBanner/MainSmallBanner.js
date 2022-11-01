import React from 'react';
import styled from 'styled-components';

const MainSmallBanner = () => {
  return (
    <MainSmallBannerContainer>
      <SmallBannerImg
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdQsMiQ%2FbtrP9eViQTa%2FxSCHKAmli8yMUhaKkoKQ0k%2Fimg.png"
        alt="배너 사진"
      />
    </MainSmallBannerContainer>
  );
};

const MainSmallBannerContainer = styled.div`
  margin: 100px 0;
  width: 100%;
`;

const SmallBannerImg = styled.img`
  width: 100%;
  height: 200px;
`;

export default MainSmallBanner;
