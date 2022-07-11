import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MyContainer from "../Components/MyContainer";
import ProjectCards from "../Components/ProjectCards";

const Projects = ({ projectSlice, myClass }) => {
  return (
    <Box className={myClass} height="100vh" position="relative">
      <Typography className="title" variant="h2" sx={{ flex: 1 }}>
        Projects
      </Typography>
      <MyContainer
        maxWidth="md"
        id="Projects"
        sx={{
          zIndex: "2",
          flexDirection: "column",
          justifyContent: "center",
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
            />
          );
        })}
      </MyContainer>
    </Box>
  );
};

export default Projects;
