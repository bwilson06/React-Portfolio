import "./App.css";
import Animation from "./components/Animaton";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Animation />
      <div id="info-top">
        <h1 className="intro-top">
          Hello, I'm<span className="name"> Bradley Wilson</span>
        </h1>
        <h1 className="intro-bottom">I'm a full-stack web developer.</h1>
      </div>
      <Navbar />
      <Projects />
    </div>
  );
}

export default App;
