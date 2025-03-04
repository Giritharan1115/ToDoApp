import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <form className="input-group mb-3 gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control rounded"
          placeholder="Enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn btn-success rounded" type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
