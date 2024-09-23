import axios from 'axios';
import { ACCESS_TOKEN } from '../constants/localStorage';
import { removeCachedUrl } from '../utils/localStorage';
import { STATUS_CODE } from '../constants/common';
import PATH from '../constants/clientPath';
import history from '../utils/history';
import API_HOST from '../constants/apiHosts';

const mainRequestConfig = {
  baseURL: API_HOST.BASE_URL,
};

const tokenExtra =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M';

const baseService = axios.create(mainRequestConfig);

baseService.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
        Tokencybersoft: tokenExtra,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  },
);

baseService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === STATUS_CODE.UNAUTHORIZED) {
      localStorage.removeItem(ACCESS_TOKEN);
      removeCachedUrl();
      history.replace(PATH.LOGIN);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default baseService;
