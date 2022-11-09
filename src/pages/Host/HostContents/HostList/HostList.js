import React from 'react';
import styled from 'styled-components';
import ListContentsBox from './ListContentsBox/ListContentsBox';
import ListSearchBox from './ListSearchBox/ListSearchBox';

const HostList = () => {
  return (
    <ListContainer>
      <ListSearchBox />
      <ListContentsBox />
    </ListContainer>
  );
};

const ListContainer = styled.div`
  padding: 30px;
  padding-left: 275px;
  width: 100%;
  height: 100vh;
`;

export default HostList;
