"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { selectIsPlaying, stopPlaying } from "../Clicker/clickerSlice";

const Video = () => {
  const [calcWidth, setCalcWidth] = useState(0);
  const [hasWindow, setHasWindow] = useState(false);
  const dispatch = useAppDispatch();

  const videoRef = useRef<ReactPlayer>(null);
  const isPlaying = useAppSelector((state) => selectIsPlaying(state));
  const onVideoEnded = () => {
    videoRef.current?.seekTo(0);
    dispatch(stopPlaying());
  };

  useEffect(() => {
    if (typeof window !== "undefined") setHasWindow(true);

    const handleResize = () => {
      const newWindowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const viewportHeight = newWindowDimensions.height;
      const aspectRatio = 16 / 9;

      if (newWindowDimensions.width < viewportHeight * aspectRatio) {
        setCalcWidth(viewportHeight * aspectRatio);
      } else {
        setCalcWidth(newWindowDimensions.width);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative h-screen overflow-hidden">
      {hasWindow && (
        <ReactPlayer
          ref={videoRef}
          height={(calcWidth / 16) * 9}
          width={calcWidth}
          playing={isPlaying}
          onEnded={onVideoEnded}
          progressInterval={5}
          url="fern.mp4"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
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
