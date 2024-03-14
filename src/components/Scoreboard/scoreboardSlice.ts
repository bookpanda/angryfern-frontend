import { createAppSlice } from "@/store/createAppSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface ScoreboardState {}

const initialState: ScoreboardState = {};

export const updateScores = createAsyncThunk(
  "scoreboard/updateScores",
  async () => {}
);

export const scoreboardSlice = createAppSlice({
  name: "scoreboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateScores.fulfilled, (state, action) => {});
  },
  selectors: {
    selectAll: (state) => state,
  },
});

export const { selectAll } = scoreboardSlice.selectors;
