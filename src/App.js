import "./App.css";
import About from "./sections/About/About";
import Landing from "./sections/Landing/Landing";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <About />
    </div>
  );
}

export default App;
