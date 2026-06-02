const Navbar = ({ toggleTheme, count, isDarkMode }) => {
  return (
    <nav
      className={`border-b px-8 py-4 transition-all duration-300 ${
        isDarkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="flex items-center justify-around mx-auto max-w-5xl">
        {/* App Title */}
        <h1
          className={`text-xl font-bold ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Counter Dashboard
        </h1>

        <div className="flex items-center gap-4">
          {/* Current Count Badge */}
          <div
            className={`px-4 py-2 rounded-full font-medium ${
              isDarkMode
                ? "bg-slate-700 text-indigo-400"
                : "bg-indigo-50 text-indigo-600"
            }`}
          >
            Count: {count}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg transition duration-300 ${
              isDarkMode
                ? "bg-slate-700 hover:bg-slate-600 text-white"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
