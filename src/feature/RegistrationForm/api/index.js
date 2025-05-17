import { transportApi } from "../../../store/transportApi";

export const authApi = transportApi.injectEndpoints({
  endpoints: (build) => ({
    reistration: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/auth/register",
        body,
      }),
    }),
  }),
});

export const { useReistrationMutation } = authApi;
