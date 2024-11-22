import { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { Form } from "./Form";
import { Header } from "./Header";

export default function App() {
  const storeditems = JSON.parse(localStorage.getItem("items")) || [];
  console.log(storeditems);
  const [items, setItems] = useState(storeditems);

  function handleAddItems(task) {
    setItems((items) => [...items, task]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <TodoList items={items} onDeleteItem={handleDeleteItem} />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <h4>Rishabh Joshi </h4>
    </footer>
  );
}
