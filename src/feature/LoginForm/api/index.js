import { transportApi } from "../../../store/transportApi";

export const loginApi = transportApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/auth/login",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
