import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function ProjectCards({ index, details, image, name }) {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        height: "35%",
        flexDirection: index % 2 === 0 ? "" : "row-reverse",
        marginBottom: index % 2 === 0 ? "40px" : "",
      }}
    >
      <Box
        sx={{
          flex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            borderRight: "1px solid",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
          image={`${image}.jpg`}
          alt={`${name} album cover`}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 3 }}>
        <CardContent sx={{ flex: "1 0 auto", pb: 0 }}>
          <Typography
            component="div"
            variant="h5"
            sx={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 500,
              fontStyle: "italic",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography
            sx={{ textAlign: "justify", fontFamily: "'Raleway', sans-serif" }}
          >
            {details}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pr: 2,
            pl: 2,
            pb: 1,
            justifyContent: index % 2 === 0 ? "end" : "start",
          }}
        >
          <Button variant="contained" sx={{ mr: 2 }} color="secondary">
            Demo
          </Button>
          <Button variant="contained" color="warning">
            Repo
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
