export const API_ENDPOINT = {
  LOGIN: '/auth/login',
  REFRESH: '/auth/refresh',
  GET_BED: '/api/services/search?service_type=bed_service',
  GET_ROOM: '/api/services/search?service_type=room_service',

  GET_LOCATION: '/api/locations',
  GET_SERVICE: '/api/service-packages',
  GET_SUB_SERVICE: '/api/services/search?service_type=food_drink',
  GET_STAFF: '/api/staffs',
  GET_PROMOTION: '/api/promotions',
  GET_PRODUCTS: '/api/products',
  PRODUCTDETAIL: '/api/products',
  POST_BOOKING: '/api/bookings',
  GET_ARTICLES: '/api/articles',
  GET_CATEGORY: '/api/products/categories',
  POST_PAYMENT: '/api/bookings',
  POST_ORDER: '/api/orders',
  POST_CONTACT: '/api/contacts',
  POST_PAYMENT_ORDER: '/api/orders',
};

export const STALE_TIME: number = 5 * 60 * 1000;
export const CACHE_TIME: number = 10 * 60 * 1000;
export const RETRY: number = 3;

export const BASE_URL = 'https://api.aksoft.vn';
