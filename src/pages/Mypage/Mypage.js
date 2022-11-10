import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from 'lib/api';

const Mypage = () => {
  const navigate = useNavigate();

  const [userProfileInfo, setUserProfileInfo] = useState({
    hostName: '',
    email: '',
    phoneNumber: '',
    introduction: '',
    image: '',
  });

  const [picturePreview, setPicturePreview] = useState(userProfileInfo.image);

  const handleInputValue = e => {
    const { name, value } = e.target;
    setUserProfileInfo({ ...userProfileInfo, [name]: value });
  };

  const encodeFileToBase64 = e => {
    const fileBlob = e.target.files[0];
    setUserProfileInfo({ ...userProfileInfo, image: fileBlob });

    const userImageForm = new FormData();
    userImageForm.append('image', fileBlob);

    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    axios.patch(
      `${BASE_URL}/users/profileImage?directory=test`,
      userImageForm,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: localStorage.getItem('token'),
        },
      }
    );

    return new Promise(resolve => {
      reader.onload = () => {
        setPicturePreview(reader.result);
        resolve();
      };
    });
  };

  useEffect(() => {
    try {
      axios
        .get(`${BASE_URL}/users`, {
          headers: {
            'Content-type': 'application/json;charset=utf-8',
            Authorization: localStorage.getItem('token'),
          },
        })
        .then(res => res.data)
        .then(data => {
          setUserProfileInfo(data.data);
        });
    } catch (err) {
      alert(err);
    }
  }, []);

  const saveUserProfile = e => {
    e.preventDefault();

    axios.patch(`${BASE_URL}/users`, userProfileInfo, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    });
    navigate('/');
  };

  return (
    <Page>
      <Wrapper>
        <Title>프로필 관리</Title>
        <Form onSubmit={saveUserProfile}>
          <UserImgInput>
            <PropertyName>프로필 사진</PropertyName>
            <PropertyValue>
              <div>
                {picturePreview ? (
                  <PreviewImg src={picturePreview} alt="preview-img" />
                ) : (
                  <PreviewImg src={userProfileInfo.image} />
                )}
              </div>
              <UploadFileInput
                name="image"
                type="file"
                accept={'image/*'}
                onChange={encodeFileToBase64}
              />
              <InputFooter>용량 2MB 이하 jpg, png</InputFooter>
            </PropertyValue>
          </UserImgInput>
          {INFO_INPUT_LIST.map(info => (
            <UserInfoInput key={info.id} id={info.id}>
              <PropertyName>{info.name}</PropertyName>
              <PropertyValue>
                <Input
                  as={info.id === 4 && 'textarea'}
                  name={info.nameProperty}
                  id={info.id}
                  value={userProfileInfo[info.nameProperty]}
                  onChange={handleInputValue}
                />
                <InputFooter>{info.text}</InputFooter>
              </PropertyValue>
            </UserInfoInput>
          ))}
          <Button>저장</Button>
        </Form>
      </Wrapper>
    </Page>
  );
};

const Page = styled.div`
  ${props => props.theme.variables.flex()}
`;
const Wrapper = styled.div`
  ${props => props.theme.variables.flex('Column')}
  width:1200px;
  margin: 100px 0 100px 0;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

const Form = styled.form`
  ${props => props.theme.variables.flex('Column')};
  font-size: 18px;
`;

const UserImgInput = styled.div`
  ${props => props.theme.variables.flex('row')}
  height: 250px;
  padding: 40px 0;
  margin: 10px 0;
  border-bottom: 2px solid lightgray;
`;

const UserInfoInput = styled.div`
  ${props => props.theme.variables.flex('row')};
  padding: ${({ id }) => (id === 4 ? '150px 20px' : '100px 20px')};
  height: 140px;
  border-bottom: 2px solid lightgray;
`;

const PropertyName = styled.div`
  margin-right: 20px;
  width: 270px;
`;

const PropertyValue = styled.div`
  width: 900px;
`;

const UploadFileInput = styled.input`
  width: 97%;
  padding: 10px;
  margin: 20px 0px;
  border-radius: 5px;
`;

const PreviewImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

const Input = styled.input`
  resize: none;
  width: 400px;
  height: ${({ id }) => (id === 4 ? '150px' : '55px')};
  margin-bottom: 20px;
  font-size: 18px;

  &:focus {
    outline-color: #7b29fa;
  }
`;

const Button = styled.button`
  padding: 10px;
  width: 100px;
  margin-top: 60px;
  background-color: #7b29fa;
  color: white;
  border: none;
  border-radius: 7px;
  font-size: 25px;
  font-weight: 700;
`;
const InputFooter = styled.div`
  color: grey;
`;

export default Mypage;

const INFO_INPUT_LIST = [
  {
    id: 1,
    name: '호스트 명',
    nameProperty: 'hostName',
    text: `프립 크루(회원)에게 호스트님을 소개해 주세요.
  호스트님만의 개성을 담거나, 신뢰감을 줄 수 있는 전문적인 사항들을 입력하시면 좋습니다.`,
  },
  {
    id: 2,
    name: '이메일',
    nameProperty: 'email',
    text: `실제 사용하시는 이메일 주소를 입력해 주세요.
  해당 메일로 공지사항 및 상품 수정 요청 등 중요 알림이 발생됩니다.`,
  },
  {
    id: 3,
    name: '공개 연락처',
    nameProperty: 'phoneNumber',
    text: `프립 크루(회원)에게 노출되는 공개 연락처입니다.
  미입력 시 인증한 연락처가 노출됩니다.`,
  },
  {
    id: 4,
    name: '소개',
    nameProperty: 'introduction',
    text: `프립 크루(회원)에게 호스트님을 소개해 주세요.
  호스트님만의 개성을 담거나, 신뢰감을 줄 수 있는 전문적인 사항들을 입력하시면 좋습니다.`,
  },
];
