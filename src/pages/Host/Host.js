import React, { useState } from 'react';
import styled from 'styled-components';
import HostAside from './HostAside/HostAside';
import HostContents from './HostContents/HostContents';
import HostNav from './HostNav/HostNav';

const Host = () => {
  const [active, setActive] = useState('프립 등록');
  return (
    <HostContainer>
      <HostNav active={active} />
      <HostAside active={active} setActive={setActive} />
      <HostContents active={active} setActive={setActive} />
    </HostContainer>
  );
};

const HostContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 100px;
  background-color: ${({ theme }) => theme.style.lightGrey};
`;

export default Host;
