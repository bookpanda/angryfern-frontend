import { RootState } from "@/store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ScoreboardState {}

const initialState: ScoreboardState = {};

export const updateScores = createAsyncThunk(
  "scoreboard/updateScores",
  async () => {}
);

const scoreboardSlice = createSlice({
  name: "scoreboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateScores.fulfilled, (state, action) => {});
  },
});

export const selectAll = (state: RootState) => state.scoreboard;

export default scoreboardSlice.reducer;
