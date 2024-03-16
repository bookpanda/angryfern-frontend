"use client";

import { useAppDispatch } from "@/store/hooks";
import { FC, PropsWithChildren, useEffect } from "react";
import { increment, setCodeAsync } from "./clickerSlice";

export const Clicker: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCodeAsync(""));

    const timer = setInterval(() => {
      dispatch(setCodeAsync(""));
    }, 1000 * 60);

    return () => {
      clearInterval(timer);
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
