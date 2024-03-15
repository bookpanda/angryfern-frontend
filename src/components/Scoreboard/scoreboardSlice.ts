import { createAppSlice } from "@/store/createAppSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { codeToName } from "./types";

interface initialScoreboardState {
  [code: string]: number;
}

const initialState: initialScoreboardState = {};
for (const countryCode in codeToName) {
  initialState[countryCode] = 0;
}

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
