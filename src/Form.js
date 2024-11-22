import { useState } from "react";

export function Form({ onAddItems, onDeleteItem }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;

    const newTask = { task, id: Date.now() };

    onAddItems(newTask);

    setTask("");
  }

  return (
    <form id="form" className="form" onClick={handleSubmit}>
      <h3>What do you want todo?</h3>
      <div>
        <input
          type="text"
          placeholder="add items..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button className="btn-add">Add</button>
      </div>
    </form>
  );
}
