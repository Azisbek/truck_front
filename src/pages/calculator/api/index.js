import { transportApi } from "../../../store/transportApi";

export const workshopApi = transportApi.injectEndpoints({
  endpoints: (build) => ({
    getWorkshops: build.query({
      query: () => ({
        method: "GET",
        url: "/workshop",
      }),
    }),

    getFactory: build.query({
      query: () => ({
        method: "GET",
        url: "/factory",
      }),
    }),

    submitCalc: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/transport/solve",
        body,
      }),
    }),
  }),
});

export const { useGetWorkshopsQuery, useGetFactoryQuery, useSubmitCalcMutation } =
  workshopApi;
