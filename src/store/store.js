import { configureStore } from "@reduxjs/toolkit";
import { transportApi } from "./transportApi";
import { accountSlice } from "../feature/User/model/account.slice";

export const store = configureStore({
  reducer: {
    [transportApi.reducerPath]: transportApi.reducer,
    [accountSlice.name]: accountSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(transportApi.middleware),
});
