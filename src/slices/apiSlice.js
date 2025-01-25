import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  reducerPath: "api",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }), // Use the backend server's base URL
  endpoints: (builder) => ({

  }),
});