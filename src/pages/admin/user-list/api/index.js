import { transportApi } from "../../../../store/transportApi";

export const userListApi = transportApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        method: "GET",
        url: "/auth/users",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userListApi;
