"use client";

import clsx from "clsx";
import { useState } from "react";
import { Button } from "../ui/button";
import { ScoreDrawer } from "./ScoreDrawer";
import { ScoreboardTable } from "./ScoreboardTable";

export const Scoreboard = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="hidden h-full w-full lg:block">
        <Button
          variant="secondary"
          className={clsx(
            "absolute right-4 top-[14%] z-20 w-16",
            !show && "opacity-30"
          )}
          onClick={handleClick}
        >
          {show ? "Hide" : "Show"}
        </Button>
        <div
          className={clsx(
            "absolute right-4 top-[20%] z-20 h-1/2 overflow-scroll rounded-lg bg-white shadow-2xl duration-300 ease-in-out lg:w-[30%] xl:w-[25%] 2xl:w-[20%]",
            !show && "opacity-0"
          )}
        >
          <ScoreboardTable />
        </div>
      </div>
      <div className="h-full w-full lg:hidden">
        <ScoreDrawer>
          <div className="h-full w-full overflow-scroll">
            <ScoreboardTable />
          </div>
        </ScoreDrawer>
      </div>
    </>
  );
};
