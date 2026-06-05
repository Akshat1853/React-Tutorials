import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Stats from "./components/Stats";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? todo.completed
        : !todo.completed;

    return matchesSearch && matchesFilter;
  });

  function editTodo(id, newText) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: newText.trim(),
            }
          : todo
      )
    );
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.filter(
        (todo) => todo.id !== id
      )
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4">
      <div className="max-w-3xl mx-auto">
        <Header />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
        />

        <TodoForm
          setTodos={setTodos}
        />

        <TodoList
          todos={filteredTodos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />

        <Stats todos={todos} />
      </div>
    </div>
  );
};

export default App;