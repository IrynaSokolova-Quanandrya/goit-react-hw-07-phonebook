import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61b8cec938f69a0017ce5d78.mockapi.io/",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "contacts",
      providesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
    createContacts: builder.mutation({
      query: (newContact) => ({
        url: "contacts",
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["Contact"],
    }),
    getFilteredContacts: builder.mutation({
      query: (value) => `contacts/${value}`,
    }),
    invalidatesTags: ["Contact"],
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactsMutation,
  useGetFilteredContactsMutation,
} = contactApi;
// console.log(useGetFilteredContactsMutation);
