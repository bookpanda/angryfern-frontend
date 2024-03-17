"use client";

import { SPEED_THRESHOLD } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { selectIsPlaying, stopPlaying } from "../Clicker/clickerSlice";

const Video = () => {
  const [calcWidth, setCalcWidth] = useState(0);
  const [hasWindow, setHasWindow] = useState(false);
  const dispatch = useAppDispatch();
  const count = useRef(0);
  const [speed, setSpeed] = useState(0);

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

    window.addEventListener("click", () => {
      count.current += 1;
    });

    const clickTimer = setInterval(() => {
      setSpeed(count.current);
      count.current = 0;
    }, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", () => {
        count.current += 1;
      });
      clearInterval(clickTimer);
    };
  }, []);

  const isSpeedExceeded = speed > SPEED_THRESHOLD;

  const calculateSpeed = () => {
    if (speed > SPEED_THRESHOLD) return 4;
    return 1;
  };
  return (
    <div className="relative h-screen overflow-hidden">
      {hasWindow && <ReactPlayer url="ora.mp3" playing={isSpeedExceeded} />}
      {hasWindow && (
        <ReactPlayer
          ref={videoRef}
          height={(calcWidth / 16) * 9}
          width={calcWidth}
          playing={isPlaying}
          onEnded={onVideoEnded}
          playbackRate={calculateSpeed()}
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
              if (isSpeedExceeded) videoRef.current?.seekTo(0.13);
              else videoRef.current?.seekTo(0.1);
            }
          }}
        />
      )}
    </div>
  );
};

export default Video;
