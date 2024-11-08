import { getAccessToken } from '@/utils/cookieStorage';
import axios, { AxiosInstance } from 'axios';
import https from 'https';
import { isEmpty } from 'lodash';

// Create an httpsAgent for handling SSL certificate issues (disabling certificate verification for testing)
const agent = new https.Agent({
  rejectUnauthorized: false, // For testing only (disables SSL validation)
});

// Create the Axios instance with base URL and timeout
const publicRequest: AxiosInstance = axios.create({
  baseURL: 'https://36.50.135.197:8090', // Using HTTPS, switch to HTTP for testing
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  httpsAgent: agent, // Include the httpsAgent for SSL handling
});

// Request interceptor to attach Authorization token if present
publicRequest.interceptors.request.use(
  (config) => {
    if (typeof window === 'undefined') {
      return config;
    }
    const token = getAccessToken();
    config.headers.Authorization = !isEmpty(token) ? `Bearer ${token}` : '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle global error logging and response data
publicRequest.interceptors.response.use(
  (response) => response?.data || response?.data?.data || response,
  (error) => {
    console.error('Axios request failed:', error);
    return Promise.reject(error);
  },
);

export { publicRequest };
