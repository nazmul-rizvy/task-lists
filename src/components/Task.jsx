import { useContext, useState } from "react";
import { TasksDispatchContext } from "../../contexts/TasksContext";

const Task = ({ task }) => {
  const [isEditing, setEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }
        />
        <button onClick={() => setEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />

        {taskContent}

        <button
          onClick={() =>
            dispatch({
              type: "deleted",
              id: task.id,
            })
          }
        >
          Delete
        </button>
      </label>
    </li>
  );
};

export default Task;
