import { Button, Dialog, Typography, Box } from "@mui/material";
import { valentineStore } from "./store";
import { useNavigate } from "react-router-dom";

const SurpriseDialog = () => {
  const { surpriseVideo } = valentineStore();
  const navigate=useNavigate()

  const handleMomentClick=()=>{
    navigate('/pvs')
  }

  return (
    <Dialog
      open={surpriseVideo}
      PaperProps={{
        sx: {
          borderRadius: 5,
          padding: 5,
          background: "linear-gradient(135deg, #ffe6f0, #ffc1e3, #ff99cc)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 20px 40px rgba(216,27,96,0.4)",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: 28,
          fontFamily: "'Dancing Script', cursive",
          color: "#C2185B",
          textAlign: "center",
          mb: 4,
          textShadow: "2px 2px 8px rgba(255,255,255,0.6)",
        }}
      >
        💖 The Moment has Come... 💖
      </Typography>

      <Button
      onClick={handleMomentClick}
        sx={{
          bgcolor: "#D81B60",
          color: "#fff",
          fontWeight: "bold",
          px: 5,
          py: 1.5,
          borderRadius: 3,
          fontSize: 18,
          boxShadow: "0 0 20px rgba(216,27,96,0.6)",
          transition: "all 0.3s ease",
          "&:hover": {
            bgcolor: "#C2185B",
            transform: "scale(1.05)",
            boxShadow: "0 0 30px rgba(216,27,96,0.9)",
          },
        }}
      >
        💌 Click Me ....!! 💌
      </Button>
    </Dialog>
  );
};

export default SurpriseDialog;
