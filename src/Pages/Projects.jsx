import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MyContainer from "../Components/MyContainer";
import ProjectCards from "../Components/ProjectCards";

const Projects = ({ projectSlice, myClass }) => {
  return (
    <Box
      className={myClass}
      height={{ xs: "auto", sm: "100vh" }}
      position="relative"
      sx={{ scrollSnapAlign: { xs: "none", md: "start" } }}
    >
      <Typography className="title" variant="h2" sx={{ flex: 1 }}>
        Projects
      </Typography>
      <MyContainer
        maxWidth="md"
        // className="project-page"
        id="Projects"
        sx={{
          zIndex: "2",
          flexDirection: "column",
          justifyContent: "center",
          height: { xs: "auto", sm: "inherit" },
          paddingTop: { xs: "10%", sm: "inherit" },
        }}
      >
        {projectSlice.map((item, index) => {
          return (
            <ProjectCards
              key={item.name}
              index={index}
              details={item.details}
              image={item.pic}
              name={item.name}
              demo={item.demo}
              repo={item.repo}
            />
          );
        })}
      </MyContainer>
    </Box>
  );
};

export default Projects;
