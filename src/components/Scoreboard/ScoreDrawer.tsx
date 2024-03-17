import { FC, PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

export const ScoreDrawer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="default" className="absolute bottom-0 z-20 w-full">
          Open leaderboard
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="h-screen w-screen">{children}</div>
      </DrawerContent>
    </Drawer>
  );
};
