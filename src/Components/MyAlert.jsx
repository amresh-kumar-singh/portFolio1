import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MyAlert = ({ error, setOpen, open, setError }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen && setOpen(false);
    setError && setError(false);
  };
  return (
    <Snackbar
      open={open || !!error}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity={error ? "error" : "success"}
        sx={{ width: "100%" }}
      >
        {error || "Your message has been sent!"}
      </Alert>
    </Snackbar>
  );
};
export default MyAlert;
