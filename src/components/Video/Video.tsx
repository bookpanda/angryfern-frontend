"use client";

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [hasWindow, setHasWindow] = useState(false);
  const screenSize = useRef({ width: 500, height: 500 });

  const videoRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
      screenSize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
  }, []);
  return (
    <div className="relative h-screen w-screen">
      {hasWindow && (
        <ReactPlayer
          ref={videoRef}
          height={screenSize.current.height}
          //   playing={mouseMove}
          progressInterval={5}
          url=".mp4"
          width={screenSize.current.width}
          onProgress={({ playedSeconds }) => {
            if (playedSeconds >= 2.5) videoRef.current?.seekTo(0);
          }}
        />
      )}
    </div>
  );
};

export default Video;
