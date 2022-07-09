import { Box, Paper, Stack, Typography } from "@mui/material";
import AboutTable from "../Components/AboutTable";
import MyContainer from "../Components/MyContainer";
import Social from "../Components/Social";

const About = ({ myClass }) => {
  return (
    <Box
      className={myClass}
      height="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      // justifyContent="center"
      id="AboutMe"
    >
      <Typography className="title" variant="h2" sx={{ flex: 1 }}>
        About Me
      </Typography>

      <MyContainer
        maxWidth="md"
        sx={{
          height: "70%",
          background: "white",
          boxSizing: "border-box",
          // border: "15px solid  #f13050",#ebb9bb --#d16d8b
          // borderStyle: "outset",
          padding: "0 !important",
          border: "8px dashed #ebb9bb", //3CB371
          boxShadow:
            "0 0 0 7.5px #d16d8b, 0 0 0 37.5px #fff, inset 0 0 0 7.5px #d16d8b, 0 15px 30px 45px rgb(0 0 0 / 50%), inset 0 0 0 18px #fff, inset 0 0 100vw 100vw beige",
        }}
      >
        <Box
          height="100%"
          flex={1}
          sx={{
            background: "white",
            color: "black",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          Introduction
          <Stack
            sx={{
              padding: "20px 40px",
              fontSize: { md: "1.5rem", sm: "1rem", textAlign: "justify" },
            }}
          >
            Hi, I am Amresh Kumar, a javascript developer. I can work on
            technologies like HTML, CSS, Javascript, NodeJs, React Js, MongoDB,
            etc. A B.E. graduate in C.S.E. Currently living in Banglore and I am
            from Bihar.
          </Stack>
        </Box>

        <Box
          height="100%"
          flex={1}
          sx={{ background: "white", color: "black" }}
        >
          <Box width="100%" height="50%" position="relative">
            <Social />
          </Box>
          <Box width="100%" height="50%" display="flex" alignItems="center">
            <AboutTable />
          </Box>
        </Box>
      </MyContainer>
    </Box>
  );
};

export default About;
