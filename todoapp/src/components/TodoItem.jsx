import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete activated for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item.name}{" "}
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
