import "./App.css";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Hobbies from "./components/Hobbies/Hobbies";

function App() {
  return (
    <div className="App">
      <Profile />
      <Skills />
      <Projects />
      <Experience />
      <Hobbies />
    </div>
  );
}

export default App;
