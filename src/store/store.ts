import clickerSlice from "@/components/Clicker/clickerSlice";
import scoreboardSlice from "@/components/Scoreboard/scoreboardSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { clicker: clickerSlice, scoreboard: scoreboardSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
