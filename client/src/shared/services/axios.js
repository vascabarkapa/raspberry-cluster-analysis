import axios from 'axios';
import { apiUrl } from '../config';

const axiosInstance = axios.create({
  baseURL: apiUrl
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');

    token
      ? (config.headers = {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        })
      : (config.headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        });

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 400) {
      window.location.href = '400';
    }

    if (error?.response?.status === 401) {
      window.location.href = '401';
    }

    if (error?.response?.status === 404) {
      window.location.href = '404';
    }

    if (error?.response?.status === 500) {
      window.location.href = '500';
    }

    if (error?.response?.status === 502) {
      window.location.href = '502';
    }

    if (error?.response?.status === 504) {
      window.location.href = '504';
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
