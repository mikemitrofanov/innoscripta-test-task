import { configureStore } from '@reduxjs/toolkit';
import {apiArticles} from "./apis/articles.ts";

export const store = configureStore({
    reducer: {
        [apiArticles.reducerPath]: apiArticles.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiArticles.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch