import { useState } from "react";

const TodoItem = ({ todo, editTodo, deleteTodo, toggleTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const priorityStyles = {
    high: "bg-red-500/20 text-red-400 border border-red-500/30",
    medium: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
    low: "bg-green-500/20 text-green-400 border border-green-500/30",
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg hover:border-slate-700 transition-all duration-200">
      {isEditing ? (
        <div className="space-y-4">
          <input
            autoFocus
            type="text"
            value={editedText}
            onChange={(e) => {
              setEditedText(e.target.value);
            }}
            className="
              w-full
              px-4
              py-3
              bg-slate-950
              border
              border-slate-700
              rounded-xl
              text-white
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
            "
          />

          <div className="flex gap-3">
            <button
              onClick={() => {
                if (!editedText.trim()) return;

                editTodo(todo.id, editedText.trim());
                setIsEditing(false);
              }}
              className="
                px-4
                py-2
                bg-green-600
                hover:bg-green-700
                rounded-lg
                font-medium
                transition-colors
              "
            >
              Save
            </button>

            <button
              onClick={() => {
                setEditedText(todo.text);
                setIsEditing(false);
              }}
              className="
                px-4
                py-2
                bg-slate-700
                hover:bg-slate-600
                rounded-lg
                font-medium
                transition-colors
              "
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                toggleTodo(todo.id);
              }}
              className="mt-1 h-5 w-5 cursor-pointer"
            />

            <div>
              <h2
                className={`text-lg font-medium break-words ${
                  todo.completed ? "line-through text-slate-500" : "text-white"
                }`}
              >
                {todo.text}
              </h2>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                  priorityStyles[todo.priority]
                }`}
              >
                {todo.priority}
              </span>
            </div>
          </div>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => {
                setIsEditing(true);
              }}
              className="
                px-3
                py-2
                bg-blue-600
                hover:bg-blue-700
                rounded-lg
                text-sm
                font-medium
                transition-colors
              "
            >
              Edit
            </button>

            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
              className="
                px-3
                py-2
                bg-red-600
                hover:bg-red-700
                rounded-lg
                text-sm
                font-medium
                transition-colors
              "
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
