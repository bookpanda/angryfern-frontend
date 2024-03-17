"use client";

import { useAppSelector } from "@/store/hooks";
import { Text } from "../custom";
import { selectCount } from "./clickerSlice";

export const DisplayClicks = () => {
  const count = useAppSelector((state) => selectCount(state));
  return (
    <div className="fixed z-10 flex w-full flex-col items-center pt-4">
      <Text variant="h1" className="text-white">
        ANGRYFERN
      </Text>
      <Text variant="h2" className="text-white">
        {count}
      </Text>
    </div>
  );
};
