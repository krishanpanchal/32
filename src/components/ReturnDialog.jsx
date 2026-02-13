import { Box, Button, Dialog, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { valentineStore } from "./store";

const ReturnDialog = () => {
  const { setYesClicked, setActiveButton, picheChale, setProposeTwice } =
    valentineStore((state) => state);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setYesClicked();
    setProposeTwice();
    setActiveButton();
  };

  return (
    <Box>
      <Dialog
        open={picheChale}
        PaperProps={{
          sx: {
            borderRadius: 5,
            padding: 4,
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
            mb: 3,
            textShadow: "2px 2px 8px rgba(255,255,255,0.6)",
          }}
        >
          💖 Chalo ho Gaya Propose ....😁 💖
        </Typography>

        <Button
          onClick={handleClick}
          sx={{
            bgcolor: "#D81B60",
            color: "#fff",
            fontWeight: "bold",
            px: 4,
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
          💌 Baby ye Dabana....😊
        </Button>
      </Dialog>
    </Box>
  );
};

export default ReturnDialog;
