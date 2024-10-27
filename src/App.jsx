import { useReducer } from "react";
import { initialTasks } from "../data/tasks";
import taskReducer from "../reducers/taskReducers";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );

    return maxId + 1;
  };

  const handleAddTask = (text) => {
    text &&
      dispatch({
        type: "added",
        id: getNextId(tasks),
        text,
      });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <div>
      <h1>Task List</h1>

      <AddTask onAdd={handleAddTask} />

      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
