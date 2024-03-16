"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, PropsWithChildren, useEffect } from "react";
import { sendClickCount } from "./clickerAPI";
import {
  increment,
  resetNewClicks,
  selectCountryCode,
  selectNewClicks,
  setCodeAsync,
} from "./clickerSlice";

export const Clicker: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const newClicks = useAppSelector((state) => selectNewClicks(state));
  const countryCode = useAppSelector((state) => selectCountryCode(state));

  useEffect(() => {
    dispatch(setCodeAsync(""));

    const codeTimer = setInterval(() => {
      dispatch(setCodeAsync(""));
    }, 1000 * 60);

    const sendClickTimer = setInterval(async () => {
      // if (newClicks === 0) return;
      await sendClickCount(newClicks, countryCode);
      dispatch(resetNewClicks());
    }, 5000);

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
