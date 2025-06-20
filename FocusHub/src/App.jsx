import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import DailyGoals from "./components/DailyGoals/DailyGoals";
import Quotes from "./components/Quotes/Quotes";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import AnalyticsDashboard from "./components/AnalyticsDashboard/AnalyticsDashboard";
import FocusMusic from "./components/FocusMusic/FocusMusic";
import "./App.css";

function App() {
  return (
    <div className="App">
       <Header />
      <div className="container">
          <TaskList />
          <PomodoroTimer />
          <DailyGoals />
          <Quotes />
          <ThemeSelector />
          <AnalyticsDashboard />
          <FocusMusic />
      </div>
      <footer>
        <p>© 2023 FocusHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
