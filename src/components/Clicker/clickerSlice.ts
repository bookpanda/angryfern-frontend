import { createAppSlice } from "@/store/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { getCountryCode } from "./clickerAPI";

export interface ClickerState {
  count: number;
  isPlaying: boolean;
  countryCode: string;
}

const initialState: ClickerState = {
  count: 0,
  isPlaying: false,
  countryCode: "",
};

export const clickerSlice = createAppSlice({
  name: "clicker",
  initialState,
  reducers: (create) => ({
    increment: create.reducer((state) => {
      state.count += 1;
      state.isPlaying = true;
    }),
    stopPlaying: create.reducer((state) => {
      state.isPlaying = false;
    }),
    setCode: create.reducer((state, action: PayloadAction<string>) => {
      state.countryCode = action.payload;
    }),
    setCodeAsync: create.asyncThunk(
      async () => {
        const code = await getCountryCode();
        return code;
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.countryCode = action.payload ?? "";
        },
        rejected: () => {},
      }
    ),
  }),
  selectors: {
    selectCount: (state) => state.count,
    selectCountryCode: (state) => state.countryCode,
    selectIsPlaying: (state) => state.isPlaying,
  },
});

export const { increment, stopPlaying } = clickerSlice.actions;
export const { selectCount, selectCountryCode, selectIsPlaying } =
  clickerSlice.selectors;
