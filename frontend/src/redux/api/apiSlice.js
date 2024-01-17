import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";


const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL, prepareHeaders: (headers)=>{
  const token = JSON.parse(localStorage.getItem('userInfo'));
  console.log(token)
  
    headers.set('authorization', `bearer ${token}`);
  
  return headers
} });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User", "Category"],
  endpoints: () => ({}),
});
