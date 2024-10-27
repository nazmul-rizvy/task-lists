import { useState } from "react";
import { initialTasks } from "../data/tasks";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );

    return maxId + 1;
  };

  const handleAddTask = (text) => {
    text &&
      setTasks([
        ...tasks,
        {
          id: getNextId(tasks),
          text: text,
          done: false,
        },
      ]);
  };

  const handleChangeTask = (task) => {
    const nextTasks = tasks.map((tsk) => {
      if (tsk.id === task.id) return task;
      else return tsk;
    });

    setTasks(nextTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((tsk) => tsk.id !== taskId));
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
