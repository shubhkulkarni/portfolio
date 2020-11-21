import "./App.css";
import About from "./sections/About/About";
import Landing from "./sections/Landing/Landing";
import Navigation from "./components/navigation/Navigation";
import Skills from "./sections/Skills/Skills";
import Works from "./sections/Works/Works";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
