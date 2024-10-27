export default function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }

    case "changed": {
      return tasks.map((tsk) => {
        if (tsk.id === action.task.id) return action.task;
        else return tsk;
      });
    }

    case "deleted": {
      return tasks.filter((tsk) => tsk.id !== action.id);
    }

    default: {
      throw new Error(`No action match with ${action.type}`);
    }
  }
}
