import { transportApi } from "../../../store/transportApi";

export const historyDetailsApi = transportApi.injectEndpoints({
  endpoints: (build) => ({
    getHistoryById: build.query({
      query: ({ userId, id }) => ({
        method: "GET",
        url: `/transport/history/${userId}/${id}`,
      }),
    }),
  }),
});

export const { useGetHistoryByIdQuery } = historyDetailsApi;
