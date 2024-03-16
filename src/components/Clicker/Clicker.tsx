"use client";

import { useAppDispatch } from "@/store/hooks";
import { FC, PropsWithChildren, useEffect } from "react";
import { increment, incrementAsync } from "./clickerSlice";

export const Clicker: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  const onClicked = () => {
    dispatch(increment());
    dispatch(incrementAsync(1));
  };

  return (
    <div className="absolute bottom-0 h-full w-full" onClick={onClicked}>
      {children}
    </div>
  );
};
