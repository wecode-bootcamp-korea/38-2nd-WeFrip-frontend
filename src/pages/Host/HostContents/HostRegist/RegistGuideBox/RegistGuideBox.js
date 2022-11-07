import React from 'react';
import styled from 'styled-components';
import Text from 'elements/Text';

const RegistGuideBox = () => {
  return (
    <Container>
      <Text bold="bold">상품 등록 가이드</Text>
      <NoiticeHeadline>프립 만들기 전 고려 사항</NoiticeHeadline>
      <NoticeListBox>
        {CONTENTS_NOTICE_LIST.map(list => (
          <NoticeList key={list.id}>{list.text}</NoticeList>
        ))}
      </NoticeListBox>
      {CONTENTS_DISABLED_LIST.map(list => (
        <div key={list.id}>
          <DisabledHeadline>{list.title}</DisabledHeadline>
          <NoticeListBox>
            {list.list.map(text => (
              <NoticeList key={text.id}>{text.text}</NoticeList>
            ))}
          </NoticeListBox>
        </div>
      ))}
    </Container>
  );
};

const CONTENTS_NOTICE_LIST = [
  {
    id: 0,
    text: '프립 진행 시 주의해야 하는 부분을 먼저 확인 부탁드립니다.',
  },
  {
    id: 1,
    text: '법률 규정 이슈가 있을 경우, 프립은 어떠한 경우에도 책임을 지지 않습니다. ',
  },
  {
    id: 2,
    text: ' 안전 규정 및 법률은 호스트님과 크루들을 위해 개별적으로 확인 후 진행 부탁드립니다. ',
  },
];

const CONTENTS_DISABLED_LIST = [
  {
    id: 0,
    title: '오픈 불가 프립',
    list: [
      { id: 0, text: '소개팅 / 남녀 만남 주선 프립' },
      { id: 1, text: '영화 상영 프립' },
      { id: 2, text: '드라이브, 안전이 보장되지 않은 장소에서 하는 프립' },
    ],
  },
  {
    id: 1,
    title: '주의가 필요한 프립',
    list: [
      { id: 0, text: '활동적인 액티비티 프립' },
      { id: 1, text: '개인 과외 프립' },
      { id: 2, text: '요리, 음료를 제공하는 프립' },
      { id: 2, text: '주류를 제공할 경우 주의사항' },
    ],
  },
  {
    id: 2,
    title: '기타 주의 사항',
    list: [
      {
        id: 0,
        text: '참가자의 개인정보 (전화번호, 이메일, SNS등)는 수집하실 수 없습니다.',
      },
      {
        id: 1,
        text: '사주 프립 등 필수적으로 추가 개인 정보가 필요한 경우 크루의 정보 제공 동의가 필요하며, 자료가 남는 형태(설문지, 메일, 문자 메시지 등)로 직접 동의를 받아야 합니다.',
      },
    ],
  },
];

const Container = styled.div`
  margin-top: 30px;
  margin-right: 30px;
  padding: 20px;
  width: 25%;
  background-color: white;
  border-radius: 10px;
`;

const NoiticeHeadline = styled.p`
  margin-top: 50px;
  font-size: 30px;
  font-weight: 700;
`;

const NoticeListBox = styled.ul`
  margin: 20px 0;
  padding: 15px 25px;
  padding-left: 35px;
  width: 100%;
  background-color: ${({ theme }) => theme.style.lightGrey};
  border-radius: 5px;
  list-style-type: disc;
`;

const NoticeList = styled.li`
  margin: 10px 0;
  font-size: 16px;
  line-height: 20px;
`;

const DisabledHeadline = styled.p`
  margin: 20px 0;
  width: 100%;
  background-color: ${({ theme }) => theme.style.lightGrey};
  font-size: 20px;
  font-weight: 600;
  text-decoration: underline;
`;

export default RegistGuideBox;
