import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-white">Today's Tasks</h1>

        <span className="text-sm text-slate-400">
          {todos.length} {todos.length === 1 ? "task" : "tasks"}
        </span>
      </div>

      {todos.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
          <p className="text-slate-400 text-lg">No tasks match your search.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {todos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                todo={item}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default TodoList;
