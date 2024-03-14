"use client";

import { useAppSelector } from "@/store/hooks";
import { Text } from "../custom";
import { selectCount } from "./clickerSlice";

export const DisplayScore = () => {
  const count = useAppSelector((state) => selectCount(state));
  return (
    <div>
      <Text variant="h1" className="text-white">
        ANGRYFERN
      </Text>
      <Text variant="h1" className="text-white">
        {count}
      </Text>
    </div>
  );
};
