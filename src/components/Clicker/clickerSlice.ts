import { createAppSlice } from "@/store/createAppSlice";
import { getCountryCode } from "./clickerAPI";

export interface ClickerState {
  newClicks: number;
  count: number;
  isPlaying: boolean;
  countryCode: string;
}

const initialState: ClickerState = {
  newClicks: 0,
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
      state.newClicks += 1;
      state.isPlaying = true;
    }),
    resetNewClicks: create.reducer((state) => {
      state.newClicks = 0;
    }),
    stopPlaying: create.reducer((state) => {
      state.isPlaying = false;
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
    selectNewClicks: (state) => state.newClicks,
    selectCountryCode: (state) => state.countryCode,
    selectIsPlaying: (state) => state.isPlaying,
  },
});

export const { increment, resetNewClicks, stopPlaying, setCodeAsync } =
  clickerSlice.actions;
export const {
  selectCount,
  selectNewClicks,
  selectCountryCode,
  selectIsPlaying,
} = clickerSlice.selectors;
