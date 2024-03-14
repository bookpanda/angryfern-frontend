import { createAppSlice } from "@/store/createAppSlice";

export interface ClickerState {
  count: number;
  isPlaying: boolean;
}

const initialState: ClickerState = {
  count: 0,
  isPlaying: false,
};

export const clickerSlice = createAppSlice({
  name: "clicker",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.isPlaying = true;
    },
    stopPlaying: (state) => {
      state.isPlaying = false;
    },
  },
  selectors: {
    selectCount: (state) => state.count,
    selectIsPlaying: (state) => state.isPlaying,
  },
});

export const { increment, stopPlaying } = clickerSlice.actions;
export const { selectCount, selectIsPlaying } = clickerSlice.selectors;
