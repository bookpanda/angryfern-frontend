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
    <div className="absolute h-full w-full bg-red-100" onClick={onClicked}>
      {children}
    </div>
  );
};
