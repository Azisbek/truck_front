import { transportApi } from "../../../store/transportApi";

export const historyApi = transportApi.injectEndpoints({
  endpoints: (build) => ({
    getHistory: build.query({
      query: ({ userId }) => ({
        method: "GET",
        url: `/transport/history/${userId}`,
      }),
    }),
  }),
});

export const { useGetHistoryQuery } = historyApi;
