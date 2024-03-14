import { clickerSlice } from "@/components/Clicker/clickerSlice";
import { scoreboardSlice } from "@/components/Scoreboard/scoreboardSlice";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineSlices(clickerSlice, scoreboardSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
