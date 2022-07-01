import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Pages/Intro";
import About from "./Pages/About";
import SayHi from "./Pages/SayHi";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import projectDetails from "./Data/projectDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About myClass="next" />
      <Skills myClass="box" />
      <Projects myClass="next" projectSlice={projectDetails.slice(0, 2)} />
      <Projects myClass="box" projectSlice={projectDetails.slice(2)} />
      <SayHi myClass="next" />
    </div>
  );
}

export default App;
