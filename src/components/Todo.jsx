export default function Todo({ todo, dispatch, ACTIONS }) {
  return (
    <div className="todo">
      <li className={todo.complete ? "completed" : ""}>{todo.description}</li>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id } })
        }
        className="complete-btn"
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
        className="trash-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
