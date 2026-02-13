import { Box } from "@mui/material";
import { valentineStore } from "./store";
import ReturnDialog from "./ReturnDialog";
import { useEffect, useRef } from "react";

const videoStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "70vh",
  height: "60vw",
  transform: "translate(-50%, -50%)",
  objectFit: "cover",
};

const ProposeVideo = () => {
  const { setPicheChale } = valentineStore((state) => state);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      if (audio.readyState >= 1) {
        audio.currentTime = 30;
        audio.play();
      } else {
        audio.addEventListener(
          "loadedmetadata",
          () => {
            audio.currentTime = 17;
            audio.play();
          },
          { once: true },
        );
      }
    }

    // move timeout inside useEffect ✅
    setTimeout(() => {
      setPicheChale();
    }, 30000);
  }, [setPicheChale]);
  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <Box>
      {/* Hidden audio element */}
      <audio ref={audioRef} src="/music/Nazar.mp3" autoPlay preload="auto" />

      <Box
        component="video"
        autoPlay
        src="/propose.mp4"
        muted
        sx={videoStyle}
      />

      <ReturnDialog />
    </Box>
  );
};

export default ProposeVideo;
