const CounterCard = ({ count, setCount, setHistory, isDarkMode }) => {
  return (
    <div
      className={`border rounded-3xl shadow-lg p-8 w-full max-w-md mx-auto transition-all duration-300 ${
        isDarkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-200"
      }`}
    >
      {/* Counter Label */}
      <h1
        className={`text-lg font-medium text-center mb-4 ${
          isDarkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Current Count
      </h1>

      {/* Counter Value */}
      <div className="text-6xl font-bold text-indigo-500 text-center mb-8">
        {count}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {/* Increment Button */}
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-3 rounded-xl transition duration-300"
          onClick={() => {
            setCount((prev) => prev + 1);
            setHistory((prev) => ["Incremented by 1", ...prev]);
          }}
        >
          +
        </button>

        {/* Decrement Button */}
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-3 rounded-xl transition duration-300"
          onClick={() => {
            setCount((prev) => prev - 1);
            setHistory((prev) => ["Decremented by 1", ...prev]);
          }}
        >
          -
        </button>

        {/* Increment By 5 Button */}
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-xl transition duration-300"
          onClick={() => {
            setCount((prev) => prev + 5);
            setHistory((prev) => ["Incremented by 5", ...prev]);
          }}
        >
          +5
        </button>
      </div>

      {/* Reset Counter Button */}
      <button
        className={`w-full font-semibold py-3 rounded-xl transition duration-300 ${
          isDarkMode
            ? "bg-slate-700 hover:bg-slate-600 text-white"
            : "bg-slate-200 hover:bg-slate-300 text-slate-800"
        }`}
        onClick={() => {
          setCount(0);
          setHistory((prev) => ["Counter Reset", ...prev]);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterCard;
