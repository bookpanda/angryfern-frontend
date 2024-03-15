"use client";

import clsx from "clsx";
import { useState } from "react";
import { Button } from "../ui/button";
import { ScoreboardTable } from "./ScoreboardTable";

export const Scoreboard = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  //drawer for mobile
  return (
    <>
      <Button
        variant="secondary"
        className={clsx(
          "absolute right-4 top-[15%] w-16",
          !show && "opacity-30"
        )}
        onClick={handleClick}
      >
        {show ? "Hide" : "Show"}
      </Button>
      <div
        className={clsx(
          "absolute right-4 top-[20%] h-1/2 w-1/6 overflow-scroll rounded-lg duration-300 ease-in-out",
          !show && "opacity-0"
        )}
      >
        <ScoreboardTable />
      </div>
    </>
  );
};
