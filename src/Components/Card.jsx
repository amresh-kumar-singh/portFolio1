import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MyCard({ logo, header, content, setHover, hover }) {
  return (
    <Card
      className="cardSkill"
      sx={{
        maxWidth: 345,
        width: "30%",
        paddingTop: "16px",
        // boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        // opacity: hover && "0.3",
        filter: hover && "blur(5px) brightness(0.5) saturate(0)",
        transition: "0.5s",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(null)}
    >
      <CardMedia
        component="img"
        height="100"
        image={logo}
        sx={{ objectFit: "contain", border: "50%" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={"700"}
        >
          {header}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "1.124rem",
            lineHeight: "1.75rem",
            textAlign: "justify",
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
