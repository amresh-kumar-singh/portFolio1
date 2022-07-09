import { Box, Container, Divider, Typography } from "@mui/material";
import Circle from "../Components/Circle";

const Intro = () => {
  return (
    <Container
      maxWidth="xl"
      id="intro"
      sx={{
        color: "white",
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        variant="h2"
        sx={{
          flex: 3,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Circle />
      </Box>
      {/* <Divider
        orientation="vertical"
        flexItem
        variant="middle"
        sx={{ color: "white", border: "8px solid" }}
      /> */}
      <Box flex={2}>
        <Typography textAlign="left" variant="h2" sx={{ display: "block" }}>
          Hi,
        </Typography>
        <Typography textAlign="left" variant="h2" sx={{}}>
          I'm Amresh Kumar,
        </Typography>
        <Typography
          textAlign="left"
          variant="h3"
          sx={{
            background: "linear-gradient(#b88746, #fdf5a6)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          A Full-Stack Developer
        </Typography>
      </Box>
    </Container>
  );
};

export default Intro;
