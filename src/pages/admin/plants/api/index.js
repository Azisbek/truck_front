import { transportApi } from "../../../../store/transportApi";

export const factoryApi = transportApi.injectEndpoints({
  endpoints: (build) => ({
    getFactories: build.query({
      query: () => ({
        method: "GET",
        url: "/factory",
      }),
    }),

    addFactory: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/factory",
        body,
      }),
    }),

    updateFactory: build.mutation({
      query: ({ id, ...body }) => ({
        method: "PUT",
        url: `/factory/${id}`,
        body,
      }),
    }),

    deleteFactory: build.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/factory/${id}`,
      }),
    }),
  }),
});

export const {
  useGetFactoriesQuery,
  useAddFactoryMutation,
  useUpdateFactoryMutation,
  useDeleteFactoryMutation,
} = factoryApi;
