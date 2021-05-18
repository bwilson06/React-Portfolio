import "./App.css";
import Animation from "./components/Animaton";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Animation />
      <MainNav />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
