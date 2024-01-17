import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";
const token = JSON.parse(localStorage.getItem('userInfo')).token;

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL, prepareHeaders: (headers)=>{
  headers.set('authorization', `bearer ${token}`);
  return headers
} });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User", "Category"],
  endpoints: () => ({}),
});
