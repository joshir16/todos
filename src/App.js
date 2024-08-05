import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(task) {
    setItems((items) => [...items, task]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <TodoList items={items} />
    </div>
  );
}

function Header() {
  return <h1>Todos</h1>;
}

function Form({ onAddItems }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;

    const newTask = { task, id: Date.now() };

    onAddItems(newTask);

    setTask("");
  }

  return (
    <form className="form" onClick={handleSubmit}>
      <h3>What do you want todo?</h3>
      <input
        type="text"
        placeholder="add items..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button className="btn-add">Add</button>
    </form>
  );
}

function TodoList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <span>{item.task}</span>
      <span>❌</span>
    </li>
  );
}
