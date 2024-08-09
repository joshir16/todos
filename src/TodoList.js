import { useState } from "react";
import { Item } from "./Item";

export function TodoList({ items, onDeleteItem }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "task")
    sortedItems = items.slice().sort((a, b) => a.task.localeCompare(b.task));

  return (
    <div className="list">
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="task">Sort by task</option>
        </select>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}
