import React, { useState, useEffect } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList.js";
import ToDoForm from "./components/ToDoForm.js";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal.js";

function App() {
  const [todos, setTodos] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  const addTodo = (text) => {
    fetch("http://localhost:3000/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then(() => {
        setTodos([...todos, { id: Date.now(), text, completed: 0 }]);
      });
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: todo.completed ? 0 : 1 } : todo
    );
    setTodos(updatedTodos);

    fetch("http://localhost:3000/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        completed: updatedTodos.find((todo) => todo.id === id).completed,
      }),
    }).catch((err) => console.error("Ошибка обновления:", err));
  };

  const handleDeleteRequest = (id) => {
    setTodoToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (todoToDelete !== null) {
      fetch(`http://localhost:3000/delete/${todoToDelete}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setTodos(todos.filter((todo) => todo.id !== todoToDelete));
          setTodoToDelete(null);
        });
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
      <ToDoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={handleDeleteRequest}
      />
      {showConfirm && (
        <ConfirmDeleteModal onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import ToDoList from "./components/ToDoList.js";
// import ToDoForm from "./components/ToDoForm.js";
// import ConfirmDeleteModal from "./components/ConfirmDeleteModal.js";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [todoToDelete, setTodoToDelete] = useState(null);

//   const fetchTodos = async () => {
//     fetch("http://localhost:3000/")
//       .then((res) => res.json())
//       .then((data) => setTodos(data))
//       .catch((err) => console.error("Ошибка загрузки:", err));
//   };

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const addTodo = async (text) => {
//     try {
//       await fetch("http://localhost:3000/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text }),
//       });
//       await fetchTodos();
//     } catch (err) {
//       console.error("Ошибка добавления:", err);
//     }
//   };

//   const toggleTodo = async (id) => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === id
//         ? { ...todo, completed: todo.completed ? false : true }
//         : todo
//     );
//     setTodos(updatedTodos);

//     try {
//       await fetch("http://localhost:3000/update", {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id,
//           completed: updatedTodos.find((todo) => todo.id === id).completed,
//         }),
//       });
//     } catch (err) {
//       console.error("Ошибка обновления:", err);
//     }
//   };

//   const handleDeleteRequest = (id) => {
//     setTodoToDelete(id);
//     setShowConfirm(true);
//   };

//   const confirmDelete = async () => {
//     if (todoToDelete !== null) {
//       fetch(`http://localhost:3000/delete/${todoToDelete}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then(() => {
//           fetchTodos();
//           setTodoToDelete(null);
//         });
//     }
//     setShowConfirm(false);
//   };

//   const cancelDelete = () => {
//     setTodoToDelete(null);
//     setShowConfirm(false);
//   };

//   return (
//     <div className="todo-container">
//       <h1 className="todo-title">To-Do List</h1>
//       <ToDoForm addTodo={addTodo} />
//       <ToDoList
//         todos={todos}
//         toggleTodo={toggleTodo}
//         deleteTodo={handleDeleteRequest}
//       />
//       {showConfirm && (
//         <ConfirmDeleteModal onConfirm={confirmDelete} onCancel={cancelDelete} />
//       )}
//     </div>
//   );
// }

// export default App;
