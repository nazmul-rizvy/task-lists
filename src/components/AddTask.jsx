import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  // const handleChangeText = (event) => {
  //   setText(event.target.value);
  // };

  return (
    <>
      {/* <input placeholder="Add task" value={text} onChange={handleChangeText} /> */}
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAdd(text);
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
