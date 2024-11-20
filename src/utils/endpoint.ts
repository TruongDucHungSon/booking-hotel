export const API_ENDPOINT = {
  LOGIN: '/auth/login',
  REFRESH: '/auth/refresh',
  GET_LOCATION: '/api/locations',
  GET_SERVICE: '/api/service-packages',
  GET_SUB_SERVICE: '/api/services',
  GET_STAFF: '/api/staffs',
  GET_PROMOTION: '/api/promotions',
  GET_ROOM: '/api/rooms/available',
  GET_PRODUCTS: '/api/products',
  PRODUCTDETAIL: '/api/products',
  POST_BOOKING: '/api/bookings',
  GET_ARTICLES: '/api/articles',
  GET_CATEGORY: '/api/products/categories',
  POST_PAYMENT: '/api/bookings',
};

export const STALE_TIME: number = 5 * 60 * 1000;
export const CACHE_TIME: number = 10 * 60 * 1000;
export const RETRY: number = 3;

export const BASE_URL = 'https://api.aksoft.vn';
