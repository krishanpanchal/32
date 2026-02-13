import { Box, Button, Typography } from "@mui/material";
import hup from "/images/hup.png";
import { useRef, useState,useEffect } from "react";
import confetti from "canvas-confetti";
import ValentineDialog from "./ValentineDialog";
import { valentineStore } from "./store";

const main = {
  width: "70%",
  transform: "translate(20%, 40%)",
  borderRadius: 1,
  position: "relative",
};

const typo = {
  fontSize: 70,
  textAlign: "center",
  fontFamily: "Roboto",
};

const noBtn = {
  bgcolor: "#E0E0E0",
  color: "#555",
  px: 4,
  py: 1.2,
  borderRadius: 3,
  "&:hover": {
    bgcolor: "#D5D5D5",
  },
};

const yesBtn = {
  bgcolor: "#D81B60",
  color: "#fff",
  px: 4,
  py: 1.2,
  borderRadius: 3,
  fontWeight: "bold",
  "&:hover": {
    bgcolor: "#C2185B",
    transform: "scale(1.05)",
  },
};

const Valentine = () => {
  const { setYesClicked, setSurpriseButton, surpriseButton,setSurpriseButtonToNo,yesClicked} =
    valentineStore();
  const [noPos, setNoPos] = useState({
    top: 312,
    left: 760,
  });

  const audioRef = useRef(null);

useEffect(()=>{
  if(!yesClicked){

    setSurpriseButtonToNo()
  }else{
    console.log('done')
  }
},[])
  
  const handleYesClick = () => {
    const audio = audioRef.current;

    if (audio) {
      if (audio.readyState >= 1) {
        audio.currentTime = 64;
        audio.play();
      } else {
        audio.addEventListener(
          "loadedmetadata",
          () => {
            audio.currentTime = 20;
            audio.play();
          },
          { once: true },
        );
      }
    }

    confetti({
      particleCount: 2000,
      spread: 300,
      origin: { y: 0.6 },
    });

    setSurpriseButton();
    setTimeout(() => {
      setYesClicked();
    }, 3000);
  };

useEffect(()=>{

})
  
  const moveNoButton = () => {
    const x = Math.random() * 380;
    const y = Math.random() * 300;
    setNoPos({ top: x, left: y });
  };

  return (
    <Box sx={main}>
      <Typography sx={typo}>Will you be my Valentine...?</Typography>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/music/pvs.mp3" preload="auto" />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 20,
        }}
      >
        <Box component="img" src={hup} alt="cute" />

        {surpriseButton ? (
          <Typography sx={{ fontSize: 36 }}>
            Preparing your Surprise.....
          </Typography>
        ) : (
          <Box
            sx={{
              justifyContent: "center",
              width: "400px",
              gap: 1,
              display: "flex",
              mt: 18,
            }}
          >
            <Button sx={yesBtn} onClick={handleYesClick}>
              Yes
            </Button>





            <Button
              sx={{
                ...noBtn,
                position: "absolute",
                left: noPos.left,
                top: noPos.top,
              }}
              onMouseEnter={moveNoButton}
              onMouseOver={moveNoButton}
              onMouseDown={moveNoButton}
              onTouchStart={moveNoButton}
              onMouseMove={moveNoButton}
            >
              No
            </Button>
          </Box>
        )}
      </Box>

      <ValentineDialog />
    </Box>
  );
};

export default Valentine;
