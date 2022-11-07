import React, { useState } from 'react';
import styled from 'styled-components';
import Text from 'elements/Text';

const RegistBasicInfo = ({ formData, setFormData, formDataHandler }) => {
  const [active, setActive] = useState('');
  const [dropDown, setDropDown] = useState({
    mainCategory: false,
    subCategory: false,
  });
  const [currentValue, setCurrentValue] = useState({
    mainCategory: '1차 카테고리',
    subCategory: '2차 카테고리',
  });

  return (
    <BasicInfoContainer>
      <BasicTitle>기본정보</BasicTitle>
      <BasicTypeBox>
        <Text size="15px">프립 유형</Text>
        <BasicTypeInfo>
          {FRIP_TYPE.map(type =>
            type.id === formData.classTypeId ? (
              <BasicActiveType
                key={type.id}
                onClick={() => {
                  setFormData({ ...formData, classTypeId: type.id });
                }}
              >
                <TypeTitle>{type.title}</TypeTitle>
                <TypeDesc>{type.desc}</TypeDesc>
              </BasicActiveType>
            ) : (
              <BasicType
                key={type.id}
                onClick={() => {
                  setFormData({ ...formData, classTypeId: type.id });
                }}
              >
                <TypeTitle>{type.title}</TypeTitle>
                <TypeDesc>{type.desc}</TypeDesc>
              </BasicType>
            )
          )}
          <Placeholder>어떤 프립을 호스팅하고 싶으신가요?</Placeholder>
        </BasicTypeInfo>
      </BasicTypeBox>
      <DevideLine />
      <BasicTypeBox>
        <Text size="15px">카테고리</Text>
        <SelectWrapper>
          <SelectBox
            onClick={() => {
              setDropDown({
                ...dropDown,
                mainCategory: !dropDown.mainCategory,
              });
            }}
          >
            <Label>{currentValue.mainCategory}</Label>
            <SelectOptions dropDown={dropDown.mainCategory}>
              {FRIP_CATEGORY.map(category => (
                <Option
                  key={category.id}
                  onClick={() => {
                    setCurrentValue({
                      ...currentValue,
                      mainCategory: category.title,
                    });
                  }}
                >
                  {category.title}
                </Option>
              ))}
            </SelectOptions>
          </SelectBox>
          <SelectBox
            onClick={() => {
              setDropDown({ ...dropDown, subCategory: !dropDown.subCategory });
            }}
          >
            <Label>{currentValue.subCategory}</Label>
            <SelectOptions dropDown={dropDown.subCategory}>
              {FRIP_SUB_CATEGORY[currentValue.mainCategory]?.map(category => (
                <Option
                  key={category.id}
                  onClick={() => {
                    setCurrentValue({
                      ...currentValue,
                      subCategory: category.title,
                    });
                    setFormData({ ...formData, subCategoryId: category.id });
                  }}
                >
                  {category.title}
                </Option>
              ))}
            </SelectOptions>
          </SelectBox>
        </SelectWrapper>
      </BasicTypeBox>
      <DevideLine />
      <BasicTypeBox>
        <Text size="15px">프립속성</Text>
        <BasicTypeInfo>
          {FRIP_PROPERTY.map(({ title, id, desc }) =>
            title !== active ? (
              <BasicType
                key={id}
                onClick={() => {
                  setActive(title);
                }}
              >
                <TypeTitle>{title}</TypeTitle>
                <TypeDesc>{desc}</TypeDesc>
              </BasicType>
            ) : (
              <BasicActiveType key={id}>
                <TypeTitle>{title}</TypeTitle>
                <TypeDesc>{desc}</TypeDesc>
              </BasicActiveType>
            )
          )}
        </BasicTypeInfo>
      </BasicTypeBox>
      <DevideLine />
      <BasicTypeBox>
        <Text size="15px">프립명</Text>
        <BasicFripName
          name="name"
          value={formData.name}
          onChange={formDataHandler}
          placeholder="프립의 특징이 잘 드러나도록 프립명을 입력해주세요."
          maxLength="39"
        />
        <FripNameLength>{formData.name.length}/40</FripNameLength>
      </BasicTypeBox>
      <DevideLine />
      <BasicTypeBox>
        <Text size="15px">난이도</Text>
        <BasicLevelBox>
          {FRIP_LEVEL.map(level => (
            <BasicLevel key={level.id}>
              <BasicLevelInput
                type="radio"
                name="levelId"
                value={level.id}
                checked={formData.levelId === level.id}
                onChange={formDataHandler}
              />
              <Text>{level.title}</Text>
            </BasicLevel>
          ))}
        </BasicLevelBox>
      </BasicTypeBox>
    </BasicInfoContainer>
  );
};

const FRIP_TYPE = [
  {
    id: 1,
    title: '온라인',
    desc: '크루와 실시간 채팅, 전화, 영상 등의 방법으로 만나는 비대면 프립',
  },
  {
    id: 2,
    title: '오프라인',
    desc: '크루와 오프라인에서 직접 대면하여 진행되는 프립',
  },
];

const FRIP_CATEGORY = [
  { id: 1, title: '아웃도어' },
  { id: 2, title: '베이킹' },
  { id: 3, title: '여행' },
  { id: 4, title: '뷰티' },
];

const FRIP_SUB_CATEGORY = {
  아웃도어: [
    { id: 1, title: '서핑' },
    { id: 2, title: '러닝' },
    { id: 3, title: '캠핑' },
  ],
  베이킹: [
    { id: 4, title: '케이크' },
    { id: 5, title: '빵' },
    { id: 6, title: '쿠키' },
  ],
  여행: [
    { id: 7, title: '프립/오리지널' },
    { id: 8, title: '투어' },
    { id: 9, title: '숙소' },
  ],
  뷰티: [
    { id: 10, title: '피부관리' },
    { id: 11, title: '왁싱' },
    { id: 12, title: '속눈썹' },
  ],
};

const FRIP_PROPERTY = [
  {
    id: 0,
    title: '모임',
    desc: '같은 취향을 가진 사람들과의 만남 (독서 모임, 와인 파티 등)',
  },
  {
    id: 1,
    title: '클래스',
    desc: '수업 형태의 프립 (원데이 클래스, 보컬 정규 레슨 등)',
  },
  {
    id: 2,
    title: '체험/서비스',
    desc: '체험 또는 서비스를 제공하는 프립 (낚시 체험, 피부 관리 등)',
  },
  {
    id: 3,
    title: '투어',
    desc: '오프라인 투어 프립 (버스 투어, 일출 여행 등)',
  },
];

const FRIP_LEVEL = [
  { id: 1, title: '없음' },
  { id: 2, title: '매우 쉬움' },
  { id: 3, title: '쉬움' },
  { id: 4, title: '보통' },
  { id: 5, title: '어려움' },
];

const BasicInfoContainer = styled.div`
  width: 100%;
`;

const DevideLine = styled.hr`
  margin: 30px 0;
  height: 1px;
  background-color: ${({ theme }) => theme.style.middleGrey};
  border: 0;
`;

const Placeholder = styled.p`
  position: absolute;
  top: -20px;
  left: 0px;
  color: ${({ theme }) => theme.style.middleGrey};
  font-size: 14px;
`;

const SelectWrapper = styled.div`
  ${({ theme }) => theme.variables.flex('row', null, 'center')};
  width: 80%;
`;

const SelectBox = styled.div`
  position: relative;
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  margin-right: 20px;
  padding: 8px;
  width: 200px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;

  &::before {
    content: '⌵';
    position: absolute;
    top: 10px;
    right: 8px;
    color: ${({ theme }) => theme.style.primaryColor};
    font-size: 20px;
  }
`;

const Label = styled.label`
  margin-left: 10px;
  font-size: 14px;
  text-align: center;
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  display: ${props => (props.dropDown ? '' : 'none')};
  width: 100%;
  padding: 0;
  background-color: white;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  list-style: none;
  z-index: 100;
`;

const Option = styled.li`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  padding: 20px 8px;
  height: 30px;
  background-color: white;
  font-size: 14px;
  transition: background-color 0.2s ease-in;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.style.primaryColor};
  }
`;

const BasicTitle = styled.p`
  margin: 40px 0;
  color: ${({ theme }) => theme.style.deepGrey};
  font-size: 20px;
  font-weight: 900;
  line-height: 1.5;
`;

const BasicTypeBox = styled.div`
  position: relative;
  ${({ theme }) => theme.variables.flex('row', 'space-between', null)};
  width: 100%;
`;

const BasicTypeInfo = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1em;
  width: 80%;
`;

const BasicType = styled.div`
  padding: 20px;
  width: 97%;
  height: 110px;
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  border-radius: 10px;
  cursor: pointer;
`;

const BasicActiveType = styled(BasicType)`
  border: 2px solid ${({ theme }) => theme.style.primaryColor};
`;

const TypeTitle = styled.p`
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: 600;
`;

const TypeDesc = styled.p`
  color: ${({ theme }) => theme.style.deepGrey};
  font-size: 15px;
  line-height: 20px;
  word-break: keep-all;
`;

const BasicFripName = styled.input`
  position: relative;
  padding-left: 10px;
  padding-right: 50px;
  width: 80%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  border-radius: 3px;
`;

const FripNameLength = styled.p`
  position: absolute;
  top: 19px;
  right: 10px;
  color: ${({ theme }) => theme.style.middleGrey};
  font-size: 14px;
`;

const BasicLevelBox = styled.div`
  display: flex;
  width: 80%;
`;

const BasicLevel = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'flex-start', 'center')};
  width: 110px;
`;

const BasicLevelInput = styled.input`
  margin-right: 10px;
  margin-bottom: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  accent-color: ${({ theme }) => theme.style.primaryColor};
  background-color: ${({ theme }) => theme.style.white};
  cursor: pointer;
`;

export default RegistBasicInfo;
