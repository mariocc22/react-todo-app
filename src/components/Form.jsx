export default function Form({
  dispatch,
  input,
  setInput,
  ACTIONS,
  setStatus,
}) {
  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { description: input } });
    setInput("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          onChange={(e) => setStatus(e.target.value)}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
