import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
        createBlog: builder.mutation({
            query: (blog) => ({
                url: '/blogs/create-blog',
                method: 'POST',
                body: blog,
            }),
        }),
        getAllBlogs: builder.query({
            query: () => '/blogs',
        }),
        getSingleBlog: builder.query({
            query: (id) => `/blogs/${id}`,
        }),
        updateBlog: builder.mutation({
            query: ({ id, blog }) => ({
                url: `/update/${id}`,
                method: 'PUT',
                body: blog,
            }),
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/delete/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateBlogMutation,
    useGetAllBlogsQuery,
    useGetSingleBlogQuery,
    useUpdateBlogMutation,
    useDeleteBlogMutation,
} = blogApi;