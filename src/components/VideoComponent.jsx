import { Box } from "@mui/material";
import { valentineStore } from "./store";
import SurpriseDialog from "./SurpriseDialog";

const videoStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "100vh",
  height: "100vw",
  transform: "translate(-50%, -50%) rotate(-90deg)",
  objectFit: "cover",
};

const VideoComponent = () => {
  const { setSurpriseVideo } = valentineStore();

  setTimeout(() => {
    setSurpriseVideo();
  }, 17000);
  return (
    <>
      <Box
        component="video"
        autoPlay
        src="./vhere.mp4"
        loop
        sx={videoStyle}
      />
      <SurpriseDialog />
    </>
  );
};

export default VideoComponent;
