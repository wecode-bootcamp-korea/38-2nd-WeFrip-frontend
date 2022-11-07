import React from 'react';
import styled from 'styled-components';
import HostList from './HostList/HostList';
import HostRegist from './HostRegist/HostRegist';

const HostContents = ({ active }) => {
  return (
    <ContentsContainer>
      {active === '프립 등록' ? <HostRegist /> : <HostList />}
    </ContentsContainer>
  );
};

const ContentsContainer = styled.div`
  margin-top: 160px;
  width: 100%;
`;

export default HostContents;
