import { configureStore } from "@reduxjs/toolkit";
import { plantsApi } from "../pages/admin/plants/api";
import accountReducer from "./accountSlice";

export const store = configureStore({
  reducer: {
    [plantsApi.reducerPath]: plantsApi.reducer,
    accountSlice: accountReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(plantsApi.middleware),
});
