import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
              todos={todos}
            />
          );
        })}
      </ul>
    </div>
  );
}
