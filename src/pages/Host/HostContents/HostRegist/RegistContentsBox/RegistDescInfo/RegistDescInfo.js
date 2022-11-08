import React from 'react';
import styled from 'styled-components';
import ImageUpload from './components/ImageUpload';
import WriteForm from './components/WriteForm';

const RegistDescInfo = ({ formData, setFormData }) => {
  return (
    <RegistDescriptionContainer>
      <DescriptionBox>
        <Title>프립 설명</Title>
        <InputWrap>
          <SubTitle>대표 이미지</SubTitle>
          <ImageBoxWrap>
            {formData.thumbnailImageUrl.map((imageList, idx) => (
              <ImageUpload
                key={imageList}
                formData={formData}
                setFormData={setFormData}
                idx={idx}
              />
            ))}
          </ImageBoxWrap>
        </InputWrap>
        <p className="imgInfo">
          텍스트를 사용한 대표 이미지는 노출이 불가합니다. 우측 가이드를 반드시
          준수하시어 대표 이미지를 등록해주세요.
        </p>
      </DescriptionBox>
      <Hr />
      <DescriptionBox>
        <WriteWrap>
          <SubTitle>위프립 상세설명</SubTitle>
          <WriteForm formData={formData} setFormData={setFormData} />
        </WriteWrap>
      </DescriptionBox>
    </RegistDescriptionContainer>
  );
};

export default RegistDescInfo;

const RegistDescriptionContainer = styled.div`
  padding: 0 10px;
  width: 100%;
`;
const DescriptionBox = styled.div`
  .imgInfo {
    font-size: 14px;
    color: ${({ theme }) => theme.style.subPrimaryColor};
    margin-left: 20%;
    letter-spacing: -0.5px;
  }
`;
const Hr = styled.hr`
  margin: 20px 0;
  color: 1px solid ${({ theme }) => theme.style.middleGrey};
`;
const Title = styled.p`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
`;

const InputWrap = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 50px;
`;
const ImageBoxWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
`;
const SubTitle = styled.p`
  display: block;
  width: 20%;
`;

const WriteWrap = styled.div`
  width: 100%;
`;
