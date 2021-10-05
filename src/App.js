import './App.css';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <Profile />
      <Skills title="Front End Skills"/>
      <Skills title="Back End Skills"/>
      <Project />
    </div>
  );
}

export default App;
