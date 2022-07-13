import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AboutTable from "../Components/AboutTable";
import MyContainer from "../Components/MyContainer";
import Social from "../Components/Social";

const About = ({ myClass }) => {
  return (
    <Box
      className={myClass}
      position="relative"
      height="100vh"
      display="flex"
      alignItems={{ xs: "end", sm: "center" }}
      justifyContent="center"
      id="AboutMe"
    >
      <Typography className="title" variant="h2" sx={{ flex: 1 }}>
        About Me
      </Typography>

      <MyContainer
        maxWidth="md"
        className="about-me-container"
        sx={{
          height: { xs: "92%", sm: "70%" },
          background: "white",
          boxSizing: "border-box",
          padding: "0 !important",
          flexDirection: { xs: "column", sm: "row" },
          margin: { xs: "5px", sm: "inherit" },
          borderRadius: "6px",
        }}
      >
        <Box
          height="100%"
          flex={{ xs: 3, sm: 1 }}
          sx={{
            background: "white",
            color: "black",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderTopLeftRadius: "6px",
            borderTopRightRadius: { xs: "6px", sm: "0" },
            borderBottomLeftRadius: { xs: "0", sm: "6px" },
          }}
        >
          <Typography
            variant="body1"
            className="about-me-para"
            sx={{
              padding: "20px 40px",
              fontSize: { sm: "1.5rem", xs: "1.25rem", textAlign: "justify" },
              lineHeight: { sm: "1.5", xs: "1.75rem" },
              // paddingTop: { xs: "12%", sm: "0" },
              paddingRight: "60px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Hi, I am Amresh Kumar, a javascript developer. I can work on
            technologies like HTML, CSS, Javascript, NodeJs, React Js, MongoDB,
            etc. A B.E. graduate in C.S.E. Currently living in Banglore and I am
            from Bihar.
          </Typography>
        </Box>

        <Box
          className="tilt"
          height="100%"
          flex={{ xs: 4, sm: 1 }}
          sx={{
            background: { xs: "#34495e", sm: "white" },
            color: "black",
            position: "relative",
            width: { xs: "100%", sm: "auto" },
            borderBottomLeftRadius: { xs: "6px", sm: "0" },
            borderBottomRightRadius: { xs: "6px", sm: "0" },
          }}
        >
          <Box
            width="100%"
            height={{ xs: "44%", sm: "50%" }}
            position="relative"
            zIndex="5"
          >
            <Social />
          </Box>
          <Box
            className="mq410"
            width={{ xs: "80%", sm: "100%" }}
            marginLeft={{ xs: "10%", sm: "initial" }}
            height="50%"
            display="flex"
            alignItems="center"
            position="relative"
            zIndex="5"
          >
            <AboutTable />
          </Box>
        </Box>
      </MyContainer>
    </Box>
  );
};

export default About;
