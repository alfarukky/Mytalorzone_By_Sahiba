export const BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

export const GET_PRODUCTS_URL = `${BASE_URL}/get-product`;
export const GET_PRODUCT_URL = `${BASE_URL}/product`;
export const USERS_URL = `${BASE_URL}/auth`;
