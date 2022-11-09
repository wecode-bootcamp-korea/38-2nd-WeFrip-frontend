import React from 'react';
import styled from 'styled-components';

const ProductsCurriculum = ({ productData }) => {
  const { schedules } = productData;

  return (
    <CurriContainer>
      <CurriTitle>커리큘럼</CurriTitle>
      <CurriSubTitle>
        당일 진행상황에 따라 일정이 변동될 수 있습니다.
      </CurriSubTitle>
      <CurriUlBox>
        {schedules &&
          schedules.map(schedule => (
            <CurriLi key={schedule.content}>
              <CurriScheduleBox>
                <CurriTimeBox>
                  {schedule.startTime} - {schedule.finishTime}
                </CurriTimeBox>
                <CurriContentBox>{schedule.content}</CurriContentBox>
              </CurriScheduleBox>
            </CurriLi>
          ))}
      </CurriUlBox>
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

const CurriUlBox = styled.ul`
  position: relative;
  margin-top: 20px;
  padding-left: 20px;
  width: 100%;
  z-index: 10;

  ::after {
    position: absolute;
    left: 5px;
    top: 0px;
    display: block;
    margin: 22px 0px 0px;
    background: ${({ theme }) => theme.style.lightGrey};
    width: 1px;
    height: calc(100% - 34px);
    z-index: -1;
    content: '';
  }
`;

const CurriLi = styled.li`
  width: 100%;
  position: relative;
  height: 40px;
`;

const CurriScheduleBox = styled.div`
  position: relative;
`;

const CurriTimeBox = styled.div`
  color: ${({ theme }) => theme.style.middleGrey};
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
`;

const CurriContentBox = styled.div`
  color: ${({ theme }) => theme.style.black};
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;

  ::before {
    position: absolute;
    top: 19px;
    left: -22px;
    display: block;
    width: 9px;
    height: 9px;
    background: ${({ theme }) => theme.style.middleGrey};
    border: 3px solid ${({ theme }) => theme.style.white};
    border-radius: 50%;
    content: '';
  }
`;

export default ProductsCurriculum;
