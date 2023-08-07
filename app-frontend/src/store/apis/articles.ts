import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Article {
    id: string
    title: string
}

export const apiArticles = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api',
    }),
    tagTypes: ['Articles'],
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: () => '/articles',
        }),
        getArticle: builder.query<Article, string>({
            query: (id) => `articles/${id}`,
        }),
    }),
})
export const {
    useGetArticlesQuery,
    useGetArticleQuery,
} = apiArticles