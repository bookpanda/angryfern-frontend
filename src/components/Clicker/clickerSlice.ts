import { createAppSlice } from "@/store/createAppSlice";
import { RootState } from "@/store/store";

export interface ClickerState {
  count: number;
}

const initialState: ClickerState = {
  count: 0,
};

export const clickerSlice = createAppSlice({
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
