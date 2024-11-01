import styles from "./todoItem.module.css";
export default function TodoItem({ item }) {
  function handleDelete() {}
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}{" "}
        <button onClick={handleDelete} className={styles.deleteButton}>
          x
        </button>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
