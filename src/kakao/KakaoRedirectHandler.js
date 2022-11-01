import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { REST_API_KEY, REDIRECT_URI } from '../pages/Login/components/OAuth';
import { BasicApi } from 'lib/api';
import API from 'config';

const KakaoRedirectHandler = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    try {
      axios
        .post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
          {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          }
        )
        .then(res => res.data)
        .then(data => {
          if (data.access_token) {
            BasicApi.post(API.signin, { kakaoAccessToken: data.access_token })
              .then(res => res.data)
              .then(data => {
                localStorage.setItem('token', data.accessToken);
                navigate('/');
              });
          } else {
            window.alert('로그인에 실패하였습니다.');
            navigate('/login');
          }
        });
    } catch (err) {
      alert(err);
    }
  }, []);

  return <div />;
};

export default KakaoRedirectHandler;
