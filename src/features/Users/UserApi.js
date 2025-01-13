
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userApi=createApi({ 
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000/api',
        credentials:'include'
    }),
    endpoints:(builder)=>({
        registerUser:builder.mutation({
            query:({registerData})=>({
                url:'/user/create-user',
                method:'POST',
                body:registerData
            })
        }),
        loginUser:builder.mutation({
            query:({loginData})=>({
                url:'/user/login',
                method:'POST',
                body:loginData 
            })
        }),
        logoutUser:builder.mutation({
            query:()=>({
                url:'/user/logout',
                method:'POST'
            })
        }),
        getAllUsers:builder.query({
            query:()=>'/user'
        })
    })
})

export const{ useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation, useGetAllUsersQuery } = userApi;