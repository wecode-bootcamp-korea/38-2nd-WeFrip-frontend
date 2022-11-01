import React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';

const Footer = () => {
  return (
    <Container>
      <ContentsBox>
        <PrimaryText>FrienTrip</PrimaryText>
        <SubText>
          ㈜프렌트립 | 사업자 등록번호 : 261-81-04385
          <br />
          통신판매업신고번호 : 2016-서울성동-01088
          <br />
          대표 : 임수열|개인정보 관리 책임자 : 양사열
          <br />
          서울시 성동구 왕십리로 115 헤이그라운드 서울숲점 G605
          <br />
          ㈜프렌트립은 통신판매중개자로서 거래당사자가 아니며, 호스트가 등록한
          상품정보 및 거래에 대해 ㈜프렌트립은 일체의 책임을 지지 않습니다.
          <br />
          NICEPAY 안전거래 서비스 : 고객님의 안전거래를 위해 현금 결제 시, 저희
          사이트에서 가입한 구매안전 서비스를 이용할 수 있습니다. 가입 확인
        </SubText>
        <SelectText>
          이용약관 | 개인정보 처리방침 | 위치기반 서비스 이용약관
        </SelectText>
        <DownloadBox>앱 다운로드</DownloadBox>
        {contents.map(icon => (
          <Icon src={icon.icon} key={icon.id} />
        ))}
      </ContentsBox>
    </Container>
  );
};

const contents = [
  {
    id: 0,
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='%23FFF' fill-opacity='0' fill-rule='nonzero' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M12 3c2.444 0 2.75.01 3.71.054.959.044 1.613.196 2.185.419.592.23 1.094.537 1.594 1.038.5.5.809 1.002 1.039 1.594.222.572.374 1.226.418 2.184C20.99 9.25 21 9.556 21 12s-.01 2.75-.054 3.71c-.044.959-.196 1.613-.418 2.185a4.412 4.412 0 0 1-1.039 1.594c-.5.5-1.002.809-1.594 1.039-.572.222-1.226.374-2.184.418-.96.044-1.267.054-3.711.054s-2.75-.01-3.71-.054c-.959-.044-1.613-.196-2.185-.418a4.412 4.412 0 0 1-1.594-1.039c-.5-.5-.809-1.002-1.038-1.594-.223-.572-.375-1.226-.419-2.184C3.01 14.75 3 14.444 3 12s.01-2.75.054-3.71c.044-.959.196-1.613.419-2.185A4.411 4.411 0 0 1 4.51 4.51c.5-.5 1.002-.809 1.594-1.038.572-.223 1.226-.375 2.184-.419C9.25 3.01 9.556 3 12 3zm.05 12.06a3.015 3.015 0 1 1 0-6.03 3.015 3.015 0 0 1 0 6.03zm0-7.66a4.645 4.645 0 1 0 0 9.29 4.645 4.645 0 0 0 0-9.29zm5.89-.144a1.101 1.101 0 1 0-2.202 0 1.101 1.101 0 0 0 2.203 0z'/%3E %3C/g%3E %3C/svg%3E",
  },
  {
    id: 1,
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Cpath fill='%23FFF' fill-opacity='0' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M20.007 3H3.993A.993.993 0 0 0 3 3.993v16.014c0 .548.445.993.993.993h8.628v-6.961h-2.343v-2.725h2.343V9.31c0-2.324 1.421-3.59 3.494-3.59.699-.002 1.397.033 2.092.105v2.43h-1.428c-1.13 0-1.35.534-1.35 1.322v1.735h2.7l-.35 2.725h-2.365V21h4.593a.993.993 0 0 0 .993-.993V3.993A.993.993 0 0 0 20.007 3z'/%3E %3C/g%3E %3C/svg%3E",
  },
  {
    id: 2,
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Cpath fill='none' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M3 3h18v18H3V3zm10.431 13.122H16.5V7.887h-3.024v4.257l-2.898-4.257H7.5v8.235h3.033v-4.266l2.898 4.266z'/%3E %3C/g%3E %3C/svg%3E",
  },
  {
    id: 3,
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='%23FFF' fill-opacity='0' fill-rule='nonzero' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M21.582 7.186C22 8.746 22 12 22 12s0 3.254-.418 4.814a2.505 2.505 0 0 1-1.768 1.768C18.254 19 12 19 12 19s-6.254 0-7.814-.418a2.505 2.505 0 0 1-1.768-1.768C2 15.254 2 12 2 12s0-3.254.418-4.814c.23-.86.908-1.538 1.768-1.768C5.746 5 12 5 12 5s6.254 0 7.814.418c.86.23 1.538.908 1.768 1.768zM9.955 14.955L15.182 12 9.955 9.045v5.91z'/%3E %3C/g%3E %3C/svg%3E",
  },
  {
    id: 4,
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='none' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm10.659 6.321l-.026-.037a3.442 3.442 0 0 0-.987-.918 2.408 2.408 0 0 0-.999-.352 2.357 2.357 0 0 0-.978.098c-.231.074-.457.17-.684.26-.185.072-.37.144-.565.174-.26.04-.515.01-.764-.075-.25-.086-.497-.186-.746-.279a2.695 2.695 0 0 0-.885-.188 2.304 2.304 0 0 0-1.174.305 3.275 3.275 0 0 0-.96.814c-.3.366-.533.778-.674 1.252-.132.44-.196.89-.213 1.352-.02.564.03 1.12.135 1.671.107.565.27 1.115.483 1.64a8.79 8.79 0 0 0 1.19 2.092c.195.252.415.474.676.641.32.207.662.277 1.027.197.19-.042.368-.125.542-.215.33-.172.673-.285 1.04-.3.336-.014.666.022.98.16.18.08.352.174.53.255.287.13.582.172.886.089.256-.07.477-.22.68-.404.256-.23.471-.504.668-.796.426-.636.801-1.307 1.084-2.039.024-.064.05-.128.075-.188-.98-.474-1.555-1.296-1.643-2.488-.09-1.204.382-2.101 1.302-2.72zM12.023 8h.035c.17 0 .341-.025.503-.073.354-.103.656-.277.897-.524.324-.334.522-.715.541-1.157.004-.081-.006-.164-.01-.245h-.04c-.069.009-.14.015-.207.029-.525.113-.964.346-1.295.716-.254.285-.418.605-.445.97-.006.095.001.19.021.284z'/%3E %3C/g%3E %3C/svg%3E",
  },
  {
    id: 5,
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='none' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm2 14.538l5.5-5.535L8 6.462v11.076zm6.135-6l1.365-1.38-1.074-.666a1062.651 1062.651 0 0 0-4.772-2.965c-.237-.147-.473-.296-.71-.442A.547.547 0 0 0 8.5 6.02l5.635 5.517zm.017.924L8.5 17.985c.162.037.304.007.494-.112.38-.239.762-.477 1.144-.714a2224.476 2224.476 0 0 0 5.103-3.166c.092-.057.183-.116.259-.164l-1.348-1.367zm.348-.466l1.629 1.389c.122-.07.28-.163.439-.253.392-.225.789-.445 1.174-.679a.564.564 0 0 0 .21-.247c.12-.278.012-.535-.271-.698-.342-.196-.687-.389-1.03-.584-.188-.107-.375-.215-.537-.309l-1.614 1.38z'/%3E %3C/g%3E %3C/svg%3E",
  },
];

const Container = styled.div`
  width: 100%;
`;

const ContentsBox = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: 300px;
`;

const PrimaryText = styled.p`
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
`;

const SubText = styled.p`
  font-size: 11px;
  line-height: 2;
  letter-spacing: -0.1px;
  margin: 5px 0;
  color: ${({ theme }) => theme.style.black};
`;

const SelectText = styled.p`
  margin: 15px 0;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
  line-height: 1;
  letter-spacing: 0.3px;
`;

const DownloadBox = styled.button`
  ${variables.flex()}
  width: 1200px;
  height: 45px;
  color: ${({ theme }) => theme.style.white};
  background-color: ${({ theme }) => theme.style.deepGrey};
  border: none;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Icon = styled.img`
  margin-top: 15px;
  margin-right: 20px;
  width: 24px;
  height: 24px;
`;

export default Footer;
