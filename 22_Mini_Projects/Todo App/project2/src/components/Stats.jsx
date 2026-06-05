const Stats = ({ todos }) => {
  const totalTasks = todos.length;

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <section className="mt-8">
      
      <h2 className="text-2xl font-bold text-white mb-4">
        Statistics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
          <h3 className="text-slate-400 text-sm uppercase tracking-wide">
            Total Tasks
          </h3>

          <p className="text-3xl font-bold text-white mt-2">
            {totalTasks}
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
          <h3 className="text-slate-400 text-sm uppercase tracking-wide">
            Completed
          </h3>

          <p className="text-3xl font-bold text-green-400 mt-2">
            {completedTasks}
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center">
          <h3 className="text-slate-400 text-sm uppercase tracking-wide">
            Pending
          </h3>

          <p className="text-3xl font-bold text-yellow-400 mt-2">
            {pendingTasks}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;