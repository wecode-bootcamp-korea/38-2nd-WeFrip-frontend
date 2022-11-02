import React from 'react';
import styled from 'styled-components';
import Grid from 'elements/Grid';

const ProductsTitleBox = () => {
  return (
    <TitleContainer>
      <TitleImg src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_2,f_auto,q_auto,w_375/wine_7a120fbe2ad3240b16acc9c15be76c7ca903f8bbacdb947eb9716d554b7cbccc" />
      <TitleInfoBox>
        <InfoTitle>[렛츠밋업] MZ 와인파티 (강남/종로/여의도/판교)</InfoTitle>
        <Grid display="flex">
          <InfoDiscountRate>30%</InfoDiscountRate>
          <InfoDiscountPrice>56,000원</InfoDiscountPrice>
          <InfoPrice>80,000원</InfoPrice>
        </Grid>
        <Grid>
          <DevideLine />
          <InfoDescription>
            다양한 생각, 취미와 MBTI를 가진 MZ들을 위한 와인파티를 진행합니다.
            다양한 직업군, 다양한 경험을 가지고 있는 MZ들이 모여, 때로는 인연을,
            때로는 친구를 얻어갈 수 있도록 파티를 준비했습니다. #MZ파티
            #와인파티 #청춘파티 #사교모임 렛츠밋업은 파티룸을 대관하여
            진행합니다. 성비를 맞춰 최소 24~최대 36명으로 진행됩니다. 테이블마다
            제공되는 와인과 안주를 즐기며, 다양한 참가자와 파티를 즐길 수 있도록
            컨텐츠가 준비되어있습니다.
          </InfoDescription>
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
