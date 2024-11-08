import { getAccessToken } from '@/utils/cookieStorage';
import axios, { AxiosInstance } from 'axios';
import { isEmpty } from 'lodash';

const publicRequest: AxiosInstance = axios.create({
  baseURL: 'https://qa1.mecaheo.com', // Đảm bảo baseURL chính xác
  timeout: 5000, // Tăng timeout nếu cần thiết
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

publicRequest.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (!isEmpty(token)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

publicRequest.interceptors.response.use(
  (response) => response?.data || response?.data?.data || response,
  (error) => {
    console.error('Axios request failed:', error);
    return Promise.reject(error);
  },
);

export { publicRequest };
