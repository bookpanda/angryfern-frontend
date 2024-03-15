import { Clicker } from "@/components/Clicker/Clicker";
import { DisplayScore } from "@/components/Clicker/DisplayScore";
import { Scoreboard } from "@/components/Scoreboard/Scoreboard";
import Video from "../components/Video/Video";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <DisplayScore />
      <Clicker>
        <Video />
      </Clicker>
      <Scoreboard />
    </div>
  );
}
