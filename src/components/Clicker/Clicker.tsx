"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import {
  increment,
  incrementAsync,
  loadClickCount,
  resetCount,
  selectCount,
  selectNewClicks,
} from "./clickerSlice";
import { getRandomInt } from "./utils";

export const Clicker: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const newClicks = useAppSelector((state) => selectNewClicks(state));
  const count = useAppSelector((state) => selectCount(state));
  const [threshold, setThreshold] = useState(10);

  useEffect(() => {
    const clickCount = localStorage.getItem("clickCount");
    dispatch(loadClickCount(clickCount ? parseInt(clickCount, 10) : 0));
  }, []);

  const onClicked = () => {
    dispatch(increment());
    localStorage.setItem("clickCount", (count + 1).toString());
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
