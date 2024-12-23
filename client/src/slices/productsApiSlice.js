import { GET_PRODUCT_URL, GET_PRODUCTS_URL } from '../constants.js';
import { apiSlice } from './apiSlice';
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: GET_PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${GET_PRODUCT_URL}/${productId}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } =
  productsApiSlice;
