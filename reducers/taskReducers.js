export default function taskReducer(draft, action) {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });

      break;
    }

    case "changed": {
      const index = draft.findIndex((tsk) => tsk.id === action.task.id);
      draft[index] = action.task;

      break;
    }

    case "deleted": {
      return draft.filter((tsk) => tsk.id !== action.id);
    }

    default: {
      throw new Error(`No action match with ${action.type}`);
    }
  }
}
