export default function Form({
  setInputText,
  inputText,
  setTodos,
  todos,
  setStatus,
}) {
  const inputTextHanlder = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHanlder = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Date.now() }]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHanlder}
        type="text"
        className="todo-input"
      />
      <button
        onClick={(e) => {
          submitTodoHanlder(e);
        }}
        className="todo-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
