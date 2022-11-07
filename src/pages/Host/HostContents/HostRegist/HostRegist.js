import HostFooter from 'pages/Host/HostFooter/HostFooter';
import React, { useState } from 'react';
import styled from 'styled-components';
import RegistContentsBox from './RegistContentsBox/RegistContentsBox';
import RegistGuideBox from './RegistGuideBox/RegistGuideBox';

const HostRegist = () => {
  const [tabName, setTabName] = useState('기본 정보');
  const [formData, setFormData] = useState({
    name: '',
    firstDate: '',
    lastDate: '',
    price: 0,
    description: '',
    location: '',
    thumbnailImageUrl: [],
    participants: 0,
    dicountRate: 0,
    scheduleTitle: '',
    scheduleEtc: '',
    classTypeId: 0,
    subCategoryId: 0,
    levelId: 0,
  });

  return (
    <RegistContainer>
      <RegistContentsBox
        tabName={tabName}
        setTabName={setTabName}
        formData={formData}
        setFormData={setFormData}
      />
      <RegistGuideBox />
      <HostFooter tabName={tabName} setTabName={setTabName} />
    </RegistContainer>
  );
};

const RegistContainer = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', null)};
  width: 100%;
`;

export default HostRegist;
