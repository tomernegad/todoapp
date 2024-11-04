import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}> completedTodos:{completedTodos} </span>
      <span className={styles.item}> completedTodos:{totalTodos} </span>
    </div>
  );
}
