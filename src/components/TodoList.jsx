import Todo from "./Todo";

export default function TodoList({ dispatch, ACTIONS, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              dispatch={dispatch}
              ACTIONS={ACTIONS}
            />
          );
        })}
      </ul>
    </div>
  );
}
