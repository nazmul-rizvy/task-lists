import { createContext, useReducer } from "react";
import { initialTasks } from "../data/tasks";
import taskReducer from "../reducers/taskReducers";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;
