import { createRoot } from "react-dom/client";
import { useState, useEffect, useReducer } from "react";
import "../src/styles/App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  // todo app actions
  const ACTIONS = {
    ADD_TODO: "add-todo",
    COMPLETE_TODO: "complete-todo",
    DELETE_TODO: "delete-todo",
    GET_LOCAL_TODOS: "get-local-todos",
  };

  // states
  const [todos, dispatch] = useReducer(reducer, []);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("all");

  // reducer function
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.description)];
      case ACTIONS.COMPLETE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);
      case ACTIONS.GET_LOCAL_TODOS:
        return [...todos];
      default:
        return todos;
    }
  }

  // add new todo function
  function newTodo(description) {
    return { id: Date.now(), description: description, complete: false };
  }

  // filterHandler 1
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.complete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // useEffect run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  // useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // localstorage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      dispatch(todoLocal, { type: ACTIONS.GET_LOCAL_TODOS });
    }
  };

  // markup
  return (
    <div className="App">
      <header>
        <h1>Marios Todo App</h1>
      </header>
      <Form
        todos={todos}
        dispatch={dispatch}
        input={input}
        setInput={setInput}
        ACTIONS={ACTIONS}
        setStatus={setStatus}
      />
      <TodoList
        dispatch={dispatch}
        ACTIONS={ACTIONS}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

// render in html
let container = null;
document.addEventListener("DOMContentLoaded", function () {
  if (!container) {
    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(<App />);
  }
});
