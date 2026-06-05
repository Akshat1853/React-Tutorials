import { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleTaskAdd = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    const obj = {
      id: Date.now(),
      text: text.trim(),
      priority: priority,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, obj]);

    setPriority("medium");
    setText("");
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-8">
      <form onSubmit={handleTaskAdd} className="space-y-4">
        <input
          type="text"
          placeholder="Enter a task..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
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
            placeholder:text-slate-500
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
            transition-all
            duration-200
          "
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
            }}
            className="
              flex-1
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
              transition-all
              duration-200
            "
          >
            <option value="low">🟢 Low</option>
            <option value="medium">🟡 Medium</option>
            <option value="high">🔴 High</option>
          </select>

          <button
            type="submit"
            className="
              px-6
              py-3
              bg-blue-600
              hover:bg-blue-700
              rounded-xl
              font-semibold
              transition-all
              duration-200
              shadow-lg
              shadow-blue-900/30
            "
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
