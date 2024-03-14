"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { selectIsPlaying, stopPlaying } from "../Clicker/clickerSlice";

const Video = () => {
  const [hasWindow, setHasWindow] = useState(false);
  const screenSize = useRef({ width: 500, height: 500 });
  const dispatch = useAppDispatch();

  const videoRef = useRef<ReactPlayer>(null);
  const isPlaying = useAppSelector((state) => selectIsPlaying(state));
  const onVideoEnded = () => {
    videoRef.current?.seekTo(0);
    dispatch(stopPlaying());
  };

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
          playing={isPlaying}
          onEnded={onVideoEnded}
          progressInterval={5}
          url="fern.mp4"
          width={screenSize.current.width}
          onProgress={({ playedSeconds }) => {
            if (playedSeconds >= 0.4) {
              dispatch(stopPlaying());
              videoRef.current?.seekTo(0.1);
            }
          }}
        />
      )}
    </div>
  );
};

export default Video;
