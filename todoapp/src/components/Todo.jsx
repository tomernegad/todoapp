import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodosList";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}
