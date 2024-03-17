import { createAppSlice } from "@/store/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { getCountryCode, sendClickCount } from "./clickerAPI";

export interface ClickerState {
  count: number;
  newClicks: number;
  isPlaying: boolean;
}

const initialState: ClickerState = {
  count: 0,
  newClicks: 0,
  isPlaying: false,
};

export const clickerSlice = createAppSlice({
  name: "clicker",
  initialState,
  reducers: (create) => ({
    loadClickCount: create.reducer((state, action: PayloadAction<number>) => {
      state.count = action.payload;
    }),
    increment: create.reducer((state) => {
      state.count += 1;
      state.newClicks += 1;
      state.isPlaying = true;
    }),
    incrementAsync: create.asyncThunk(
      async (amount: number) => {
        const code = await getCountryCode();
        await sendClickCount(amount, code ?? "");
      },
      {
        pending: () => {},
        fulfilled: () => {},
        rejected: () => {},
      }
    ),
    resetCount: create.reducer((state) => {
      state.newClicks = 0;
    }),
    stopPlaying: create.reducer((state) => {
      state.isPlaying = false;
    }),
  }),
  selectors: {
    selectCount: (state) => state.count,
    selectNewClicks: (state) => state.newClicks,
    selectIsPlaying: (state) => state.isPlaying,
  },
});

export const {
  loadClickCount,
  increment,
  incrementAsync,
  resetCount,
  stopPlaying,
} = clickerSlice.actions;
export const { selectCount, selectNewClicks, selectIsPlaying } =
  clickerSlice.selectors;
