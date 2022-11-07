import HostFooter from 'pages/Host/HostFooter/HostFooter';
import React from 'react';
import styled from 'styled-components';
import RegistContentsBox from './RegistContentsBox/RegistContentsBox';
import RegistGuideBox from './RegistGuideBox/RegistGuideBox';

const HostRegist = () => {
  return (
    <RegistContainer>
      <RegistContentsBox />
      <RegistGuideBox />
      <HostFooter />
    </RegistContainer>
  );
};

const RegistContainer = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', null)};
  width: 100%;
`;

export default HostRegist;
