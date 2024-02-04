import axios from 'axios';
import { apiUrl } from '../config';
import { isEmpty } from 'lodash';

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
    const statusCode = error?.response?.status;
    const ACCESS_TOKEN = localStorage.getItem('access_token');

    switch (statusCode) {
      case 400:
        window.location.replace('400');
        break;

      case 401:
        if (!isEmpty(ACCESS_TOKEN)) {
          window.location.replace('/401');
        }
        break;

      case 403:
        window.location.replace('403');
        break;

      case 404:
        window.location.replace('404');
        break;

      case 500:
        window.location.replace('500');
        break;

      case 502:
        window.location.replace('502');
        break;

      case 504:
        window.location.replace('504');
        break;

      default:
        break;
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
