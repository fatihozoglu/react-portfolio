import "./App.css";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";
import Hobbies from "./components/Hobbies/Hobbies";
import jsTodoApp from "./static/js-todo-app.png";
import reactGame from "./static/react-game.png";
import reactTodo from "./static/react-todo-app.png";
import binaryCalculator from "./static/binary-calculator.png"
import linkedin from "./static/bootstrap-linkedin.png"

function App() {
  return (
    <div className="App">
      <Profile />
      <Skills title="Front End Skills" />
      <Skills title="Back End Skills" />
      <Project
        imgSource={reactGame}
        tech={["ReactJS", "Function Components", "Hooks"]}
        projectTitle={"React TicTacToe Game"}
        projectDesc={
          "This is the tic-tac-toe game in ReactJS official tutorial, reacreated with functional components and hooks."
        }
        demoLink={"#"}
        githubLink={"https://github.com/fatihozoglu/react-game"}
      />
      <Project
        imgSource={reactTodo}
        tech={["ReactJS", "Function Components", "Hooks"]}
        projectTitle={"React Todo App"}
        projectDesc={
          "This is a todo app created with ReactJS functional components and hooks. You can add items, mark them as 'coompleted', filter them with categories as 'all', 'active', 'completed' and delete them."
        }
        demoLink={"#"}
        githubLink={"https://github.com/fatihozoglu/react-todo-app"}
      />
      <Project
        imgSource={jsTodoApp}
        tech={["HTML5", "CSS3", "Javascript"]}
        projectTitle={"Javascript Todo App"}
        projectDesc={
          "This is a todo app created with HTML, CSS and Javascript. You can add items, mark them as 'coompleted' and delete them."
        }
        demoLink={"#"}
        githubLink={"https://github.com/fatihozoglu/javascript-todo-app"}
      />
      <Project
        imgSource={"https://cs50.harvard.edu/x/2020/tracks/web/finance/finance.png"}
        tech={["HTML5", "CSS3", "Javascript", "Python", "Flask"]}
        projectTitle={"Flask Finance App"}
        projectDesc={
          "A web application getting stock data from iexcloud.io API and allowing users to sign up/sign in, buy and sell stocks and see their profits, created with Flask/Python."
        }
        demoLink={"#"}
        githubLink={"https://github.com/fatihozoglu/cs50-finance-web-app"}
      />
      <Project
        imgSource={linkedin}
        tech={["HTML5", "CSS3", "Bootstrap"]}
        projectTitle={"Bootstrap Linkedin Clone"}
        projectDesc={
          "A Linkedin clone is created with Bootstrap 5"
        }
        demoLink={"#"}
        githubLink={"https://github.com/fatihozoglu/kodluyoruz-projeler/tree/main/Bootstrap_odev_3"}
      />
      <Project
        imgSource={binaryCalculator}
        tech={["HTML5", "CSS3", "Javascript"]}
        projectTitle={"Binary Calculator"}
        projectDesc={
          "A binary calculator which you can add, subtract, multiply and divide binary numbers. This was a challenge in HAckerRank Javascript 10 Day Challenge."
        }
        demoLink={"#"}
        githubLink={"https://github.com/fatihozoglu/kodluyoruz-projeler/tree/main/Binary_Calculator"}
      />
      <Experience />
      <Hobbies />
    </div>
  );
}

export default App;
