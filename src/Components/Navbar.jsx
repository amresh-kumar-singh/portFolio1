import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import CloseIcon from "@mui/icons-material/Close";
import axiosInstance from "../config/axiosInstance";
import MyAlert from "./MyAlert";
const pages = ["About Me", "Skills", "Projects", "Say Hi"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [error, setError] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleDownload = async () => {
    try {
      const res = await axiosInstance.get("/resume", { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = window.document.createElement("a");
      link.href = url;
      link.setAttribute("download", "AmreshResume.pdf");
      link.click();
    } catch (err) {
      setError(err?.response?.statusText || err.message);
      console.log(err?.response?.statusText);
    }
  };
  return (
    <AppBar position="fixed" sx={{ background: "transparent", boxShadow: "0" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {error && <MyAlert error={error} setError={setError} />}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#intro"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Amresh Kumar
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  width: "100vw !important",
                  height: "100vh !important",
                  background: {
                    xs: "rgba(0, 140, 230, 0.8)",
                    sm: "rgba(236, 135, 192, 0.8)",
                  },
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "16px",
                },
                "& .MuiList-root": {
                  flexDirection: "column",
                  alignItems: "center",
                  height: "60%",
                  width: "100%",
                  display: "flex",
                  color: "white",
                  justifyContent: "space-around",
                },
                "& .MuiTypography-root": {
                  fontSize: "2rem",
                },
              }}
            >
              <IconButton
                sx={{ position: "absolute", top: "-25%", right: "5%" }}
                onClick={() => handleCloseNavMenu()}
              >
                <CloseIcon sx={{ color: "white", fontSize: "4rem" }} />
              </IconButton>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component="a"
                    href={`#${page.replace(" ", "")}`}
                    sx={{ textDecoration: "none", color: "white" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#intro"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 600,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              margin: "0",
              fontSize: "1.25rem",
            }}
          >
            Amresh Kumar
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              mr: 6,
            }}
          >
            {pages.map((page, i) => (
              <Link
                key={page}
                href={`#${page.replace(" ", "")}`}
                color="inherit"
                underline="none"
                sx={{
                  my: 1,
                  color: "white",
                  display: "block",
                  mr: 6,
                  fontSize: "0.875rem",
                  lineHeight: "1.75",
                  letterSpacing: "0.02857em",
                  textTransform: "uppercase",
                  zIndex: 2,
                  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                }}
              >
                {page}
                {page.includes("Say") ? (
                  <p
                    className="animation-btn"
                    style={{
                      fontSize: "2rem",
                      margin: 0,
                      position: "absolute",
                      top: "0",
                      zIndex: "-1",
                    }}
                  >
                    👋🏽
                  </p>
                ) : (
                  ""
                )}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Download Resume">
              <Button
                variant="outlined"
                sx={{ color: "#a239ca" }}
                startIcon={<DownloadTwoToneIcon />}
                // href={process.env.REACT_APP_BASE_URL + "/resume"}
                download
                onClick={handleDownload}
              >
                Resume
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
