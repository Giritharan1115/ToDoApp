import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function TodoItem({ todo, index, toggleComplete, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex align-items-center mb-2 rounded shadow">
      <input
        type="checkbox"
        className="form-check-input me-2"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
      />
      {isEditing ? (
        <input
          type="text"
          className="form-control me-2"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <span
          className={`flex-grow-1 ${
            todo.completed ? "text-decoration-line-through text-muted" : ""
          }`}
        >
          {todo.text}
        </span>
      )}
      <button
        className="btn btn-warning btn-sm me-2"
        onClick={() => setIsEditing(!isEditing)}
      >
        <FaEdit />
      </button>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTodo(index)}
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;
