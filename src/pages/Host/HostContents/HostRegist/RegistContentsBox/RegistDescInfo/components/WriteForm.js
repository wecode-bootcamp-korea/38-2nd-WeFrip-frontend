import React from 'react';
import styled from 'styled-components';

const WriteForm = ({ formData, setFormData }) => {
  const { description } = formData;
  const onChangeText = e => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleRemoveText = () => {
    setFormData({ ...formData, description: '' });
  };

  const handleSetTab = e => {
    const { target } = e;
    if (e.keyCode === 9) {
      e.preventDefault();
      let tabValue = target.value;
      let textStart = target.selectionStart;
      let textEnd = target.selectionEnd;
      target.value =
        tabValue.substring(0, textStart) + '\t' + tabValue.substring(textEnd);
      target.selectionStart = target.selectionEnd = textStart + 1;
      onChangeText(e);
      return false;
    }
  };

  return (
    <FormWrap>
      <AllDeleteBtn onClick={handleRemoveText}>모두 지우기</AllDeleteBtn>
      <WriteTextForm>
        <textarea
          placeholder="호스트님의 상품을 소개해주세요"
          value={description}
          onChange={onChangeText}
          onKeyDown={handleSetTab}
        />
      </WriteTextForm>
      <p>Characters: {description.length}</p>
    </FormWrap>
  );
};

export default WriteForm;
const FormWrap = styled.div`
  padding: 20px 0;
  width: 100%;
`;
const WriteTextForm = styled.div`
  display: block;
  width: 100%;
  textarea {
    padding: 20px 10px;
    width: 100%;
    min-height: 200px;
    resize: none;
    border-radius: 5px;
    &:focus {
      outline-color: ${({ theme }) => theme.style.primaryColor};
    }
  }
`;
const AllDeleteBtn = styled.button`
  display: flex;
  margin-left: auto;
  padding: 5px 10px;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;
