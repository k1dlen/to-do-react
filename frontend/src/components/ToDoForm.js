import React, { useState } from "react";

function ToDoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-wrapper">
      <input
        type="text"
        className="todo-input"
        placeholder="Добавить новое задание..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="todo-add-button">Добавить</button>
    </form>
  );
}

export default ToDoForm;
