import { createAppSlice } from "@/store/createAppSlice";
import { RootState } from "@/store/store";
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
});

export const selectAll = (state: RootState) => state.scoreboard;
