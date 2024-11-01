import { useRef } from "react";

function Input({ onAddClick }) {
  const task = useRef();
  const date = useRef();

  function handleAddButton() {
    if (task && date) {
      onAddClick(task.current.value, date.current.value);
    }
  }

  return (
    <div>
      <div className="row todoInput">
        <div className="col-4 boxes">
          <input
            type="text"
            id="exampleInputTask"
            name="todo"
            placeholder="Enter To-Do"
            ref={task}
          />
        </div>
        <div className="col-4 boxes">
          <input id="exampleInputDate" type="date" name="date" ref={date} />
        </div>
        <div className="col-2 buttons">
          <center>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddButton}
            >
              Add
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Input;
