const HistoryCard = ({ history, setHistory, isDarkMode }) => {
  return (
    <div
      className={`border rounded-3xl shadow-lg p-8 w-full max-w-md mx-auto mt-6 transition-all duration-300 ${
        isDarkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-200"
      }`}
    >
      {/* Section Title */}
      <h1
        className={`text-xl font-bold mb-4 ${
          isDarkMode ? "text-white" : "text-slate-900"
        }`}
      >
        Recent Activity
      </h1>

      {/* Empty State */}
      {history.length === 0 && (
        <p
          className={`text-center ${
            isDarkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          No activity yet
        </p>
      )}

      {/* Activity List */}
      <div className="space-y-2">
        {history.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl ${
              isDarkMode
                ? "bg-slate-700 text-slate-200"
                : "bg-slate-50 text-slate-700"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Clear History Button */}
      <button
        className={`w-full mt-4 font-semibold py-3 rounded-xl transition duration-300 ${
          isDarkMode
            ? "bg-slate-700 hover:bg-slate-600 text-white"
            : "bg-slate-200 hover:bg-slate-300 text-slate-800"
        }`}
        onClick={() => setHistory([])}
      >
        Clear History
      </button>
    </div>
  );
};

export default HistoryCard;
