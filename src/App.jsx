import TasksProvider from "../contexts/TasksContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <TasksProvider>
      <h1>Task List</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
};

export default App;
