import React, { useState } from 'react';
import styled from 'styled-components';
import RegistBasicInfo from './RegistBasicInfo/RegistBasicInfo';
import RegistDescInfo from './RegistDescInfo/RegistDescInfo';
import RegistPlaceInfo from './RegistPlaceInfo/RegistPlaceInfo';
import RegistSaleInfo from './RegistSaleInfo/RegistSaleInfo';

const RegistContentsBox = ({ tabName, setTabName, formData, setFormData }) => {
  const TAB_COMPONENT = {
    '기본 정보': (
      <RegistBasicInfo formData={formData} setFormData={setFormData} />
    ),
    '장소 정보': (
      <RegistPlaceInfo formData={formData} setFormData={setFormData} />
    ),
    '판매 정보': (
      <RegistSaleInfo formData={formData} setFormData={setFormData} />
    ),
    '프립 설명': (
      <RegistDescInfo formData={formData} setFormData={setFormData} />
    ),
  };

  return (
    <Container>
      <TabBox>
        {TAB_NAME.map(tab =>
          tabName === tab.name ? (
            <ActiveTab key={tab.id}>{tab.name}</ActiveTab>
          ) : (
            <Tab
              key={tab.id}
              onClick={() => {
                setTabName(tab.name);
              }}
            >
              {tab.name}
            </Tab>
          )
        )}
      </TabBox>
      <InfoBox>{TAB_COMPONENT[tabName]}</InfoBox>
    </Container>
  );
};

const TAB_NAME = [
  { id: 0, name: '기본 정보' },
  { id: 1, name: '장소 정보' },
  { id: 2, name: '판매 정보' },
  { id: 3, name: '프립 설명' },
];

const Container = styled.div`
  margin-top: 30px;
  margin-left: 280px;
  width: 55%;
  background: white;
  border-radius: 10px;
`;

const TabBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', null)};
  margin-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 50px;
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.style.middleGrey};
`;

const Tab = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')};
  width: 25%;
  height: 50px;
  font-weight: 600;
  cursor: pointer;
`;

const ActiveTab = styled(Tab)`
  border-bottom: 2px solid ${({ theme }) => theme.style.primaryColor};
`;

const InfoBox = styled.div`
  margin-top: 20px;
  padding: 0 20px;
  width: 100%;
`;

export default RegistContentsBox;
