import { Box } from "@mui/material";
import { valentineStore } from "./store";
import Happy from "./Happy";

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
  const {setHappy}= valentineStore((state)=>state)

  setTimeout(() => {
    setHappy()
  }, 94000);
  return<> <Box component="video" autoPlay src="./pvs.mp4" sx={videoStyle} /> <Happy/></>;
};

export default Moment;
