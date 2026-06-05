const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-6">
      <input
        value={searchTerm}
        type="text"
        placeholder="🔍 Search tasks..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="
          w-full
          px-4
          py-3
          bg-slate-900
          border
          border-slate-700
          rounded-xl
          text-white
          placeholder:text-slate-400
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition-all
          duration-200
        "
      />
    </div>
  );
};

export default SearchBar;
