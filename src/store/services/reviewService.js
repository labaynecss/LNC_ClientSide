import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const reviewService = createApi({
  reducerPath: 'reviews',
  tagTypes: ['reviews'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.authReducer?.userToken;
      headers.set('authorization', token ? `Bearer ${token}` : '');
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getReviews: builder.query({
        query: (data) => {
          return {
            url: '/reviews',
            method: 'GET',
            params: data,
          };
        },
        providesTags: ['reviews'],
      }),
      getReview: builder.query({
        query: (id) => {
          return {
            url: `reviews/${id}`,
            method: 'GET',
          };
        },
        providesTags: ['reviews'],
      }),
    };
  },
});

export const { useGetReviewsQuery, useGetReviewQuery } = reviewService;
export default reviewService;
