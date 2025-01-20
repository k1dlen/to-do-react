import React from "react";

function ToDoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? "task-completed" : ""}`}>
      <span
        className={`todo-task ${todo.completed ? "completed" : ""}`}
      >
        {todo.text}
      </span>
      <button className="complete-button" onClick={() => toggleTodo(index)}>
        ✓
      </button>
      <button className="delete-button" onClick={() => deleteTodo(index)}>
        ✕
      </button>
    </li>
  );
}

export default ToDoItem;
