import "./App.css";
import About from "./sections/About/About";
import Landing from "./sections/Landing/Landing";
import Navigation from "./components/navigation/Navigation";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Skills />
    </div>
  );
}

export default App;
