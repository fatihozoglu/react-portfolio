import "./App.css";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Hobbies from "./components/Hobbies/Hobbies";

function App( props ) {
  return (
    <div className="App">
      <Profile profileInfo={props.info.profile}/>
      <Skills skillsInfo={props.info.skills}/>
      <Projects />
      <Experience exp={props.info.experiences}/>
      <Hobbies hobbyInfo={props.info.hobbies}/>
    </div>
  );
}

export default App;
