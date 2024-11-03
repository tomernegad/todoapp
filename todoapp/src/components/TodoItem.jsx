import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete activated for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todos);
  }
  const checkItemClicked = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={checkItemClicked}
          onClick={() => handleClick(item.name)}
        >
          {" "}
          {item.name}{" "}
        </span>
        <button
          onClick={() => handleDelete(item)}
          className={styles.deleteButton}
        >
          x
        </button>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
