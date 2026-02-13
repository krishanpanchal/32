import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Box,
} from "@mui/material";
import NewDialog from "./NewDialog";
import { useNavigate } from "react-router-dom";
import { valentineStore } from "./store";

const ValentineDialog = () => {
  const {
    yesClicked,
    setThingDialog,
    setActiveButton,
    activeButton,
    setYesClickedToNo,
    proposeTwice,
  } = valentineStore((state) => state);

  const navigate = useNavigate();

  const handleClick = () => {
    setThingDialog();
    setYesClickedToNo();
  };

  const handlePropose = () => {
    setActiveButton();
    navigate("/proposevideo");
    setYesClickedToNo();
  };

  const handleDabao = () => {
    alert("Pehle propose kar ne do na .....");
  };

  const handleDoubleClick = () => {
    alert("Do bar Propose kyu krwana hai......!!🤦‍♂️ Ab dusra button dabao");
  };

  return (
    <Box>
      <Dialog
        open={yesClicked}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            padding: 3,
            background: "linear-gradient(135deg, #fff0f6, #ffdde1)",
            textAlign: "center",
            boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
            position: "relative",
          },
        }}
      >
        {/* Decorative Hearts */}
        <Box
          sx={{
            position: "absolute",
            top: 1,
            right: 10,
            width: 80,
            height: 80,
            background: "url('/images/heart.png') no-repeat center/contain",
            animation: "rotateHeart 4s linear infinite",
            opacity: 0.6,
          }}
        />

        <DialogContent sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#b00020",
              mb: 2,
              fontFamily: "cursive",
              textShadow: "1px 1px 2px rgba(0,0,0,0.15)",
            }}
          >
            Hey Prerna ❤️
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#4a154b",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              px: 1,
            }}
          >
            I’m really glad you said yes. From the moment you’re around,
            everything feels a little softer and a lot brighter. I made this
            just for you, because you truly matter to me. I’m grateful for your
            smile and the way you make ordinary moments feel special. I can’t
            wait to spend this Valentine’s Day with you.
          </Typography>
        </DialogContent>

        <DialogActions
          sx={{
            justifyContent: "center",
            pb: 3,
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            onClick={activeButton ? handleClick : handleDabao}
            sx={{
              backgroundColor: activeButton ? "#e91e63" : "#616161",
              borderRadius: 25,
              px: 5,
              py: 1.5,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
              transition: "transform 0.2s, background-color 0.2s",
              "&:hover": {
                backgroundColor: activeButton ? "#d81b60" : "#616161",
                transform: "scale(1.05)",
              },
            }}
          >
            {activeButton ? "Aage Badhe Babu..... ❤️" : "Pehle Ye Dabao ...👉"}
          </Button>

          <Button
            variant="contained"
            onClick={proposeTwice ? handleDoubleClick : handlePropose}
            sx={{
              backgroundColor: "#ff3366",
              borderRadius: 25,
              px: 5,
              py: 1.5,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#d81b60",
                transform: "scale(1.05)",
              },
            }}
          >
            "Let me Propose first...❤️"
          </Button>
        </DialogActions>
      </Dialog>
      <NewDialog />
      <style>{`
        @keyframes rotateHeart {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(15deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </Box>
  );
};

export default ValentineDialog;
