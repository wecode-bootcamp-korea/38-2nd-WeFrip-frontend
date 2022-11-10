import React, { useEffect } from 'react';
import styled from 'styled-components';
import variables from 'styles/variables';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';

const ImageUpload = ({ formData, setFormData, idx }) => {
  const { thumbnailImageUrl } = formData;
  const imagePlace = thumbnailImageUrl[idx];

  let inputRef;

  const saveImage = e => {
    e.preventDefault();
    if (e.target.files[0]) {
      URL.revokeObjectURL(imagePlace?.preview_URL);
      const preview_URL = URL.createObjectURL(e.target.files[0]);
      const newImage = {
        image_file: e.target.files[0],
        preview_URL: preview_URL,
      };
      const newData = thumbnailImageUrl;
      newData[idx] = newImage;
      setFormData({
        ...formData,
        thumbnailImageUrl: newData,
      });
    }
  };

  const deleteImage = () => {
    URL.revokeObjectURL(imagePlace.preview_URL);

    const newData = thumbnailImageUrl;
    newData[idx] = null;

    setFormData(prev => ({
      ...prev,
      thumbnailImageUrl: newData,
    }));
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imagePlace?.preview_URL);
    };
  }, []);

  return (
    <ImageBox>
      <input
        className="imageLink"
        type="file"
        accept="image/*"
        onChange={saveImage}
        onClick={e => (e.target.value = null)}
        ref={refParam => (inputRef = refParam)}
      />
      {imagePlace?.preview_URL ? (
        <>
          <DeleteBtn onClick={deleteImage}>
            <CiCircleMinus className="iconDelete" />
            <p>이미지 삭제하기</p>
          </DeleteBtn>
          <div className="img-wrapper">
            <img src={imagePlace.preview_URL} alt="업로드 사진" />
          </div>
        </>
      ) : (
        <TextWrap onClick={() => inputRef.click()}>
          <CiCirclePlus className="iconPlus" />
          <p>이미지 추가하기</p>
        </TextWrap>
      )}
    </ImageBox>
  );
};

export default ImageUpload;
const ImageBox = styled.div`
  position: relative;
  width: auto;
  height: 300px;
  border: 1px dashed ${({ theme }) => theme.style.middleGrey};
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.style.primaryColor};
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  a:-webkit-any-link {
    color: black;
  }

  .iconPlus {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 100;
  }
  .imageLink {
    display: none;
  }
  .img-wrapper {
    img {
      ${variables.position}
      width: 100%;
    }
  }
`;
const TextWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const DeleteBtn = styled.button`
  ${variables.positionCenter()};
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  .iconDelete {
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 100;
  }
`;
