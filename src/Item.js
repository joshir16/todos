export function Item({ item, onDeleteItem }) {
  return (
    <li className="item">
      <span>{item.task}</span>
      <span className="delete-item" onClick={() => onDeleteItem(item.id)}>
        ❌
      </span>
    </li>
  );
}
