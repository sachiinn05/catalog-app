const Navbar = ({ search, setSearch, categories, selected, setSelected }) => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-white/20 shadow-lg p-4 flex flex-col md:flex-row gap-4 justify-between items-center">

      <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
        CatalogX
      </h1>

      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 rounded-xl border bg-white/60 backdrop-blur focus:ring-2 focus:ring-indigo-400 w-full md:w-1/3"
      />

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="px-4 py-2 rounded-xl border bg-white/60 backdrop-blur focus:ring-2 focus:ring-indigo-400"
      >
        <option value="All">All Categories</option>
        {categories.map((c, i) => (
          <option key={i} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
};

export default Navbar;