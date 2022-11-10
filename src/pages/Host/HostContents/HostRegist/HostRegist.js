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
    locationGroupName: '',
    latitude: 0,
    longitude: 0,
    placeUrl: '',
    thumbnailImageUrl: [null, null, null, null, null],
    participants: 0,
    dicountRate: 0,
    schedules: [{ content: '', startTime: '', finishTime: '' }],
    classTypeId: 0,
    subCategoryId: 0,
    levelId: 0,
  });

  const formDataHandler = e => {
    const { name, value } = e.target;

    if (name === 'levelId') {
      setFormData({ ...formData, [name]: parseInt(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <RegistContainer>
      <RegistContentsBox
        tabName={tabName}
        setTabName={setTabName}
        formData={formData}
        setFormData={setFormData}
        formDataHandler={formDataHandler}
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
