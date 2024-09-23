import {
  ACCESS_TOKEN,
  CACHED_URL,
  LOGIN_INFO,
} from 'admin/src/constants/localStorage';

export const getToken = () => localStorage.getItem(ACCESS_TOKEN);

export const removeToken = () => localStorage.removeItem(ACCESS_TOKEN);

export const getLoginInfo = () => localStorage.getItem(LOGIN_INFO);

export const removeLoginInfo = () => localStorage.removeItem(LOGIN_INFO);

export const getCachedUrl = () => localStorage.getItem(CACHED_URL);

export const removeCachedUrl = () => localStorage.removeItem(CACHED_URL);

export const isHavingToken = () => !!getToken();
