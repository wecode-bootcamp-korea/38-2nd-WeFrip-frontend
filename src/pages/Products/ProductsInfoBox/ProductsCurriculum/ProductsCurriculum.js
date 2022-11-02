import React from 'react';
import styled from 'styled-components';

const ProductsCurriculum = () => {
  return (
    <CurriContainer>
      <CurriTitle>커리큘럼</CurriTitle>
      <CurriSubTitle>
        당일 진행상황에 따라 일정이 변동될 수 있습니다.
      </CurriSubTitle>
    </CurriContainer>
  );
};

const CurriContainer = styled.div`
  padding-top: 50px;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.style.middleGrey};
`;

const CurriTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

const CurriSubTitle = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.style.middleGrey};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  white-space: pre-wrap;
`;

export default ProductsCurriculum;
