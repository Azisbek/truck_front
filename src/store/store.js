import { configureStore } from '@reduxjs/toolkit';
import { transportApi } from './transportApi';

export const store = configureStore({
  reducer: {
    [transportApi.reducerPath]: transportApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(transportApi.middleware),
}); 