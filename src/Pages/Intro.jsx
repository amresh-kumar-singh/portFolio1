import { Container, Divider, Typography } from "@mui/material";

const Intro = () => {
  return (
    <Container
      maxWidth="md"
      id="intro"
      sx={{
        color: "white",
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2" sx={{ flex: 1 }}>
        Left
      </Typography>{" "}
      <Divider
        orientation="vertical"
        flexItem
        variant="middle"
        sx={{ color: "white", border: "8px solid" }}
      />
      <Typography variant="h2" sx={{ flex: 1 }}>
        RIght
      </Typography>
    </Container>
  );
};

export default Intro;
