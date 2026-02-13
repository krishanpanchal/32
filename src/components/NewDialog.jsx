import { Dialog, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { valentineStore } from "./store";

const NewDialog = () => {
  const navigate = useNavigate();
  const { thingDialog } = valentineStore((state) => state);

  const handleClick = () => {
    navigate("/video");
  };

  return (
    <Dialog
      open={thingDialog}
      PaperProps={{
        sx: {
          borderRadius: 4,
          padding: 4,
          background: "linear-gradient(135deg, #ffdde1, #ee9ca7)",
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
          position: "relative",
          overflow: "hidden",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          pointerEvents: "none",
          backgroundImage: "url('/images/heart.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
          backgroundSize: "50px",
          animation: "floatHearts 5s infinite linear",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#b00020",
            mb: 2,
            fontFamily: "cursive",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          One more thing… ❤️
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#5f2c2c",
            mb: 4,
            fontSize: "1.05rem",
            lineHeight: 1.6,
            px: 2,
          }}
        >
          You make my days brighter, my smiles real, and my heart very happy .Thanks For your arrival !. Everything matters a lot for me .And Remember that <strong>Your Timing was very perfect for me.....!! And I love You❤️❤️</strong>
        </Typography>

        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            backgroundColor: "#ff4d6d",
            borderRadius: "30px",
            px: 5,
            py: 1.5,
            fontSize: "1.05rem",
            textTransform: "none",
            fontWeight: "bold",
            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#e63950",
              transform: "scale(1.05)",
            },
          }}
        >
          Let’s Go! 💖
        </Button>
      </Box>

      {/* Heart float animation */}
      <style>{`
        @keyframes floatHearts {
          0% { background-position: top left; }
          100% { background-position: bottom right; }
        }
      `}</style>
    </Dialog>
  );
};

export default NewDialog;
