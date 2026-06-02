import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CounterCard from "./components/CounterCard";
import HistoryCard from "./components/HistoryCard";

const App = () => {
  // Count state (loaded from localStorage on first render)
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? Number(savedCount) : 0;
  });

  // History state (loaded from localStorage on first render)
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("history");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Theme state (loaded from localStorage on first render)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Save history whenever it changes
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  // Save count whenever it changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDarkMode ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      {/* Navbar */}
      <Navbar count={count} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      {/* Main Content */}
      <div className="py-8">
        <CounterCard
          count={count}
          setCount={setCount}
          setHistory={setHistory}
          isDarkMode={isDarkMode}
        />

        <HistoryCard
          history={history}
          setHistory={setHistory}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default App;
