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
        maxWidth: 280,
        width: "30%",
        minWidth: "240px",
        paddingTop: "16px",
        flex: { xs: "50%", md: "inherit" },
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
          sx={{
            fontSize: "1.124rem",
            lineHeight: "1.75rem",
            textAlign: "justify",
            color: hover ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.8)",
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
