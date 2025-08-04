import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postApi = createApi({
  reducerPath: 'postApi',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => ({ url: '/posts' }),
      transformResponse: (response: any) => response.slice(0, 5), // Limit to 10 posts
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: 'Post',
                id,
              })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
      // Provides tags for cache invalidation
      // This allows us to refetch the posts when a post is created, updated, or deleted
      // and to keep the cache up-to-date
      // 'LIST' tag is used to invalidate the entire list of posts
      // Individual post tags are used to invalidate specific posts
      // This is useful for optimistic updates
      // and to keep the cache up-to-date
    }),
    createPost: builder.mutation({
      query: newPost => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
      // Invalidates the entire list of posts when a new post is created
    }),
    updatePost: builder.mutation({
      query: ({ id, ...updatedPost }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        body: updatedPost,
      }),
      invalidatesTags: ({ id }) => [
        { type: 'Post', id },
        { type: 'Post', id: 'LIST' },
      ],
      // Invalidates the specific post and the entire list of posts
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});
export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;

export default postApi;
