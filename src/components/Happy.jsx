import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { valentineStore } from "./store";

const Happy = () => {

const {happy}=valentineStore()
  return (
    <Dialog
      open={happy}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: "rgba(255, 192, 203, 0.95)", // soft pink
          borderRadius: 5,
          padding: 2,
          textAlign: "center",
        },
      }}
    >
      <DialogTitle sx={{ color: "#d32f2f", fontWeight: "bold", fontSize: "1.8rem" }}>
        💖 Happy Valentine’s Day! 💖
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mt: 1, fontSize: "1.2rem", color: "#880e4f" }}>
          My dearest love, <br />
          Every beat of my heart whispers your name. Being with you feels like a beautiful dream I never want to wake up from. 
          You are my everything — my joy, my comfort, my forever. I love you more than words can ever express.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#d32f2f", "&:hover": { backgroundColor: "#b71c1c" } }}
        >
          Forever Yours ❤️
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Happy;
