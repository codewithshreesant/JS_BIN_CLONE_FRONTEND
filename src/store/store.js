
import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "../features/Blogs/BlogApi";
import { userApi } from "../features/Users/UserApi";
import userReducer from '../Slice/AuthSlice'

export const store=configureStore({
    reducer:{
        user:userReducer,
        [blogApi.reducerPath]:blogApi.reducer,
        [userApi.reducerPath]:userApi.reducer,
    },
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(blogApi.middleware, userApi.middleware)
})

