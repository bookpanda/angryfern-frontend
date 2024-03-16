"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, PropsWithChildren, useEffect } from "react";
import { sendClickCount } from "./clickerAPI";
import {
  increment,
  resetNewClicks,
  selectNewClicks,
  setCodeAsync,
} from "./clickerSlice";

export const Clicker: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCodeAsync(""));

    const codeTimer = setInterval(() => {
      dispatch(setCodeAsync(""));
    }, 1000 * 60);

    const sendClickTimer = setInterval(async () => {
      const newClicks = useAppSelector((state) => selectNewClicks(state));
      dispatch(resetNewClicks());
      await sendClickCount(newClicks);
    }, 1000 * 5);

    return () => {
      clearInterval(codeTimer);
      clearInterval(sendClickTimer);
    };
  }, []);

  const onClicked = () => {
    dispatch(increment());
  };

  return (
    <div className="absolute bottom-0 h-full w-full" onClick={onClicked}>
      {children}
    </div>
  );
};
