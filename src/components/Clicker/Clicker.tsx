"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, PropsWithChildren, useState } from "react";
import {
  increment,
  incrementAsync,
  resetCount,
  selectNewClicks,
} from "./clickerSlice";
import { getRandomInt } from "./utils";

export const Clicker: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const newClicks = useAppSelector((state) => selectNewClicks(state));
  const [threshold, setThreshold] = useState(10);

  const onClicked = () => {
    dispatch(increment());
    if (newClicks >= threshold) {
      dispatch(incrementAsync(newClicks));
      dispatch(resetCount());
      setThreshold(getRandomInt(10, 20));
    }
  };

  return (
    <div className="absolute bottom-0 h-full w-full" onClick={onClicked}>
      {children}
    </div>
  );
};
