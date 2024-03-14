import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

export interface ClickerState {
  count: number;
}

const initialState: ClickerState = {
  count: 0,
};

export const clickerSlice = createSlice({
  name: "clicker",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment } = clickerSlice.actions;
export const selectCount = (state: RootState) => state.clicker.count;
export default clickerSlice.reducer;
