import { Box, Slide, Typography } from "@mui/material";
import { useState } from "react";
import Card from "../Components/Card";
import MyContainer from "../Components/MyContainer";

const data = [
  {
    header: "Front End",
    logo: "logo192.png",
    content:
      "I can work on HTML and CSS. Although React is my favorite Framework and i love to work on it.",
  },
  {
    header: "Java Script",
    logo: "js.png",
    content:
      "JavaScript is my main language and I can develope a Full Stack web page using JavaScript.",
  },
  {
    header: "Node Js",
    logo: "node.png",
    content:
      "For server side i use Nodejs with Express and for Database i prefer MongoDB.",
  },
];

const Skills = ({ myClass }) => {
  const [hover, setHover] = useState(null);

  // const handleHover = (e) => {
  //   setHover(true);
  // };
  return (
    <Box
      className={myClass}
      height="100vh"
      position="relative"
      sx={{ height: { xs: "auto", sm: "100vh" } }}
    >
      <Typography className="title" variant="h2" sx={{ flex: 1 }}>
        Skills
      </Typography>
      <MyContainer
        maxWidth="md"
        id="Skills"
        sx={{
          flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: { xs: "center", md: "space-between" },
          height: { xs: "auto", sm: "100vh" },
        }}
      >
        {data.map((skill, i) => {
          return (
            <Card
              key={i}
              header={skill.header}
              logo={skill.logo}
              content={skill.content}
              setHover={setHover}
              hover={hover}
            />
          );
        })}
      </MyContainer>
    </Box>
  );
};

export default Skills;
