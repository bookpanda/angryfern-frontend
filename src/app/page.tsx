import { Clicker } from "@/components/Clicker/Clicker";
import { DisplayScore } from "@/components/Clicker/DisplayScore";
import Video from "../components/Video/Video";

export default function Home() {
  return (
    <div className="relative h-full w-full">
      <DisplayScore />
      <Clicker>
        <Video />
      </Clicker>
    </div>
  );
}
