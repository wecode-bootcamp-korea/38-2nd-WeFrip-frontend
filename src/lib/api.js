import axios from 'axios';

export const BASE_URL = `http://10.58.52.185:3000`;

export const BasicApi = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

export const AuthApi = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: localStorage.getItem('token'),
  },
});
