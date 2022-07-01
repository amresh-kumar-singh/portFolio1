import { Box, Typography } from "@mui/material";
import AboutTable from "../Components/AboutTable";
import MyContainer from "../Components/MyContainer";

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
          // border: "15px solid  #f13050",
          // borderStyle: "outset",
          padding: "0 !important",
          border: "15px dashed mediumseagreen",
          boxShadow:
            "0 0 0 7.5px #226741, 0 0 0 37.5px #fff, inset 0 0 0 7.5px #226741, 0 15px 30px 45px rgb(0 0 0 / 50%), inset 0 0 0 18px #fff, inset 0 0 100vw 100vw beige",
        }}
      >
        <Box
          height="100%"
          flex={1}
          sx={{
            background: "white",
            borderRight: "2px dashed",
            color: "black",
          }}
        >
          Introduction
        </Box>

        <Box
          height="100%"
          flex={1}
          sx={{ background: "white", color: "black" }}
        >
          <Box width="100%" height="50%">
            Social Media
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
