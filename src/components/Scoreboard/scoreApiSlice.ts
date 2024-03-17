import { API_KEY, API_URL } from "@/constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Score {
  code: string;
  country_name: string;
  click_count: number;
}

interface getScoreResponse {
  scores: Score[];
}

export const scoreApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  reducerPath: "scoreApi",
  tagTypes: ["Score"],
  endpoints: (builder) => ({
    getScores: builder.query<getScoreResponse, number>({
      query: () => ({
        url: "/scores",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }),
    }),
  }),
});

export const { useGetScoresQuery } = scoreApiSlice;
