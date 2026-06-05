const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-3 mb-6">
      <button
        onClick={() => setFilter("all")}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          filter === "all"
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          filter === "pending"
            ? "bg-yellow-500 text-black"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }`}
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          filter === "completed"
            ? "bg-green-600 text-white"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterBar;
