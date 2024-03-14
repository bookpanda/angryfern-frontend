"use client";

import { useAppDispatch } from "@/store/hooks";
import { FC, PropsWithChildren } from "react";
import { increment } from "./clickerSlice";

export const Clicker: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  const onClicked = () => {
    dispatch(increment());
  };

  return (
    <div className="absolute bottom-0 -z-10 h-full w-full" onClick={onClicked}>
      {children}
    </div>
  );
};
