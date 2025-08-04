import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { AuthState } from './authSlice';

interface ILoginPayload {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: builder => ({
    login: builder.mutation<AuthState, ILoginPayload>({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getProfile: builder.query<{ name: string; role: string }, void>({
      query: () => '/me',
    }),
  }),
});

export const { useLoginMutation, useGetProfileQuery } = authApi;
