import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Pages/Intro";
import About from "./Pages/About";
import SayHi from "./Pages/SayHi";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import projectDetails from "./Data/projectDetails";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import MyAlert from "./Components/MyAlert";

function App() {
  const [visibility, setVisibility] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "info",
  });

  function moveToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    const visible = () => {
      const scroll = document.documentElement.scrollTop;
      if (scroll > window.screen.availHeight) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };
    window.addEventListener("scroll", visible);
    return () => window.removeEventListener("scroll", visible);
  }, []);
  return (
    <div className="App">
      <Navbar setAlert={setAlert} />
      <MyAlert alert={alert} setAlert={setAlert} />
      <Intro />
      <About myClass="next" setAlert={setAlert} />
      <Skills myClass="box" />
      <Projects myClass="next" projectSlice={projectDetails.slice(0, 2)} />
      <Projects myClass="box" projectSlice={projectDetails.slice(2)} />
      <SayHi myClass="next" setAlert={setAlert} />
      {visibility && (
        <IconButton
          className="scroll-top"
          onClick={moveToTop}
          size="large"
          color="secondary"
        >
          <ArrowCircleUpOutlinedIcon fontSize="large" />
        </IconButton>
      )}
    </div>
  );
}

export default App;
