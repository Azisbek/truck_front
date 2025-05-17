import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import TokenStorageService from "../shared/lib/TokenService";

const API_URL = "http://localhost:3000/";

export const transportApi = createApi({
  reducerPath: "transportApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = TokenStorageService.getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
