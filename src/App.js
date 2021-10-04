import './App.css';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Profile />
      <Skills title="Front End Skills"/>
      <Skills title="Back End Skills"/>
    </div>
  );
}

export default App;
