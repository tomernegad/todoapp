import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="Enter todo item"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
