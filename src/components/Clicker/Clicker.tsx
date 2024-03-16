"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, PropsWithChildren, useEffect } from "react";
import {
  increment,
  incrementAsync,
  resetCount,
  selectNewClicks,
} from "./clickerSlice";

export const Clicker: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const newClicks = useAppSelector((state) => selectNewClicks(state));

  useEffect(() => {
    const codeTimer = setInterval(() => {
      dispatch(resetCount());
    }, 3000);

    return () => {
      clearInterval(codeTimer);
    };
  }, []);

  const onClicked = () => {
    dispatch(increment());
    dispatch(incrementAsync(newClicks));
  };

  return (
    <div className="absolute bottom-0 h-full w-full" onClick={onClicked}>
      {children}
    </div>
  );
};
