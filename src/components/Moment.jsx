import { Box } from "@mui/material";

const videoStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "70vh",
  height: "60vw",
  transform: "translate(-50%, -50%)",
  objectFit: "cover",
};
const Moment = () => {
  return <Box component="video" autoPlay src="./pvs.mp4" sx={videoStyle} />;
};

export default Moment;
