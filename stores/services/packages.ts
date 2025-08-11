import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { GetCookie } from "../../utils/set_cookie";
import environment from "../../environment/environment";


export const packageApi = createApi({
  reducerPath: "package",
  tagTypes: ["package"],
  baseQuery: fetchBaseQuery({
    baseUrl: environment.VITE_WEB_AUTH,
    prepareHeaders: (headers) => {
      const token = GetCookie(`${environment.VITE_WEB_HEADER_NAME as string}`);
      if (token)
        headers.set(environment.VITE_WEB_HEADER as string, `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMenu: builder.query({
      query: (body) => ({
        url: `web/new-package-list-v3`,
        method: "POST",
        body: body,
      }),
      providesTags: ["package"],
    }),
  }),
});
export const { useGetMenuQuery } = packageApi;
