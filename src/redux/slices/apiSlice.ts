import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PATHS } from '@/paths';

export const apiSlice = createApi({
  reducerPath: 'threadsSlice',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  tagTypes: ['Thread'],
  endpoints: (builder) => ({
    getThreads: builder.query({
      query: () => PATHS.API.GET_THREADS,
    }),
  }),
});
export const { useGetThreadsQuery } = apiSlice;
