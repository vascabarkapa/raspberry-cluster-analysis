import axiosInstance from './axios';

const get = (endpoint, params = {}) => axiosInstance.get(endpoint, { params });
const post = (endpoint, body, params = {}, config = {}) => axiosInstance.post(endpoint, body, { params, ...config });
const put = (endpoint, body, params = {}) => axiosInstance.put(endpoint, body, { params });
const remove = (endpoint, params = {}) => axiosInstance.delete(endpoint, { params });

export { get, post, put, remove };
