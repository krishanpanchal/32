import { Box, CircularProgress } from "@mui/material";
import { valentineStore } from "./store";
import ReturnDialog from "./ReturnDialog";
import { useEffect, useRef, useState } from "react";

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
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true); // Track video loading

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
          { once: true }
        );
      }
    }

    const timeout = setTimeout(() => {
      setPicheChale();
    }, 42000);

    return () => clearTimeout(timeout); // cleanup
  }, [setPicheChale]);

  // Play audio on mount
  useEffect(() => {
    audioRef.current?.play();
  }, []);

  // Handle video loaded
  const handleVideoLoaded = () => {
    setLoading(false);
  };

  return (
    <Box>
      {/* Hidden audio element */}
      <audio ref={audioRef} src="/music/Nazar.mp3" autoPlay preload="auto" />

      {/* Video */}
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      )}
      <Box
        component="video"
        ref={videoRef}
        autoPlay
        muted
        src="/p.mov"
        sx={videoStyle}
        onLoadedData={handleVideoLoaded} // Fires when video is ready
      />

      <ReturnDialog />
    </Box>
  );
};

export default ProposeVideo;
