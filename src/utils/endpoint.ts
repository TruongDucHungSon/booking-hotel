export const PUBLIC_ENDPOINT = 'http://36.50.135.197:8090';

export const API_ENDPOINT = {
  LOGIN: '/auth/login',
  REFRESH: '/auth/refresh',
  GET_LOCATION: '/api/locations',
  GET_SERVICE: '/api/service-packages',
  GET_STAFF: '/api/staffs',
};

export const STALE_TIME: number = 5 * 60 * 1000;
export const CACHE_TIME: number = 10 * 60 * 1000;
export const RETRY: number = 3;
