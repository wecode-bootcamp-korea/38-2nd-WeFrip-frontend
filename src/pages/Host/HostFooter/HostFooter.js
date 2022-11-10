import React from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { authApi, BASE_URL } from 'lib/api';
import API from 'config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HostFooter = ({ tabName, setTabName, formData }) => {
  const navigate = useNavigate();

  const handleClickNextPage = tabName => {
    if (tabName === '기본 정보') {
      setTabName('장소 정보');
    } else if (tabName === '장소 정보') {
      setTabName('판매 정보');
    } else if (tabName === '판매 정보') {
      setTabName('프립 설명');
    } else {
      const file = new FormData();

      file.append('classTypeId', formData.classTypeId);
      file.append('description', formData.description);
      file.append('discountRate', formData.discountRate);
      file.append('firstDate', formData.firstDate);
      file.append('lastDate', formData.lastDate);
      file.append('locationLatitude', formData.latitude);
      file.append('levelId', formData.levelId);
      file.append('locationGroupName', formData.locationGroupName);
      file.append('locationLongitude', formData.longitude);
      file.append('name', formData.name);
      file.append('participants', formData.participants);
      file.append('locationName', formData.placeName);
      file.append('locationPlaceUrl', formData.placeUrl);
      file.append('price', formData.price);
      file.append('subCategoryId', formData.subCategoryId);
      file.append('schedules', JSON.stringify(formData.schedules));

      for (let i = 0; i < formData.thumbnailImageUrl.length; i++) {
        file.append('images', formData.thumbnailImageUrl[i]?.image_file);
      }

      axios
        .post(`${BASE_URL}${API.postFripData}`, file, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: localStorage.getItem('token'),
          },
        })
        .then(alert('상품 등록이 완료되었습니다!'), navigate(`/`))
        .catch(err => alert(err));
    }
  };

  return (
    <FooterContainer>
      <FooterBtnBox>
        <ScrollBtn>
          <RiArrowDownSLine />
        </ScrollBtn>
        <ScrollBtn>
          <RiArrowUpSLine />
        </ScrollBtn>
      </FooterBtnBox>
      <FooterNextBtn
        onClick={() => {
          handleClickNextPage(tabName);
        }}
      >
        {tabName === '프립 설명' ? '등록' : '다음'}
      </FooterNextBtn>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  position: fixed;
  bottom: 0;
  padding-left: 270px;
  width: 100%;
  height: 71px;
  border-top: 1px solid ${({ theme }) => theme.style.middleGrey};
  background-color: white;
  z-index: 100;
`;

const FooterBtnBox = styled.div`
  ${({ theme }) => theme.variables.flex('row', 'space-between', 'center')};
  width: 120px;
  height: 54px;
`;

const ScrollBtn = styled.button`
  ${({ theme }) => theme.variables.flex('row', 'center', 'center')};
  width: 54px;
  height: 54px;
  background: white;
  color: ${({ theme }) => theme.style.deepGrey};
  border: 1px solid ${({ theme }) => theme.style.middleGrey};
  border-radius: 3px;
  font-size: 25px;
`;

const FooterNextBtn = styled.button`
  margin-right: 20px;
  width: 150px;
  height: 50px;
  background-color: ${({ theme }) => theme.style.primaryColor};
  color: ${({ theme }) => theme.style.white};
  border: none;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export default HostFooter;
