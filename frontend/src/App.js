import React, { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList.js";
import ToDoForm from "./components/ToDoForm.js";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteRequest = (index) => {
    setTodoToDelete(index);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (todoToDelete !== null) {
      setTodos(todos.filter((_, i) => i !== todoToDelete));
      setTodoToDelete(null);
    }
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setTodoToDelete(null);
    setShowConfirm(false);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={handleDeleteRequest} />
      {showConfirm && (
        <ConfirmDeleteModal onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
}

export default App;
