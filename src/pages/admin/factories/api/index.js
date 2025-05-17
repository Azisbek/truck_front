import { transportApi } from "../../../../store/transportApi";

export const workshopApi = transportApi.injectEndpoints({
  endpoints: (build) => ({
    getWorkshops: build.query({
      query: () => ({
        method: "GET",
        url: "/workshop",
      }),
    }),

    addWorkshop: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/workshop",
        body,
      }),
    }),

    updateWorkshop: build.mutation({
      query: ({ id, ...body }) => ({
        method: "PUT",
        url: `/workshop/${id}`,
        body,
      }),
    }),

    deleteWorkshop: build.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/workshop/${id}`,
      }),
    }),
  }),
});

export const {
  useGetWorkshopsQuery,
  useAddWorkshopMutation,
  useUpdateWorkshopMutation,
  useDeleteWorkshopMutation,
} = workshopApi;
