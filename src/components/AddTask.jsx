import { useContext, useState } from "react";
import {
  TasksContext,
  TasksDispatchContext,
} from "../../contexts/TasksContext";
import { getNextId } from "../../utils/getNextId";

const AddTask = () => {
  const [text, setText] = useState("");
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: getNextId(tasks),
            text,
          });
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
