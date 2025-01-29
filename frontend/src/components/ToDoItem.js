import React from "react";

function ToDoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? "task-completed" : ""}`}>
      <span
        className={`todo-task ${todo.completed ? "completed" : ""}`}
      >
        {todo.text}
      </span>
      <button className="complete-button" onClick={() => toggleTodo(todo.id)}>
        ✓
      </button>
      <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
        ✕
      </button>
    </li>
  );
}

export default ToDoItem;
