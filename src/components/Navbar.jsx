const Navbar = ({ search, setSearch, categories, selected, setSelected }) => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl 
    bg-gradient-to-r from-slate-900/80 via-gray-900/80 to-black/80 
    border-b border-white/10 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center gap-5 justify-between">

     
        <h1 className="text-2xl md:text-3xl font-extrabold 
        bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
        text-transparent bg-clip-text tracking-wide cursor-pointer 
        hover:scale-110 transition duration-300">
          CatalogX ✨
        </h1>

  
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl 
            bg-white/5 text-white placeholder-gray-400 
            border border-white/10 backdrop-blur-lg 
            focus:ring-2 focus:ring-indigo-500 focus:outline-none 
            shadow-md transition"
          />
          <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
            🔍
          </span>
        </div>

        <div className="relative">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="px-4 py-2.5 rounded-xl 
            bg-white/5 text-white 
            border border-white/10 backdrop-blur-lg 
            focus:ring-2 focus:ring-purple-500 focus:outline-none 
            shadow-md cursor-pointer 
            hover:shadow-purple-500/20 transition"
          >
            <option className="bg-slate-900 text-white" value="All">
              All Categories
            </option>
            {categories.map((c, i) => (
              <option key={i} value={c} className="bg-slate-900 text-white">
                {c}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};

export default Navbar;