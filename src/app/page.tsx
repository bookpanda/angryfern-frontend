import { Clicker } from "@/components/Clicker/Clicker";
import { DisplayClicks } from "@/components/Clicker/DisplayClicks";
import { Scoreboard } from "@/components/Scoreboard/Scoreboard";
import Video from "../components/Video/Video";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <DisplayClicks />
      <Clicker>
        <Video />
      </Clicker>
      <Scoreboard />
    </div>
  );
}
