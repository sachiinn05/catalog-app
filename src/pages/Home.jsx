import { useEffect, useState } from "react";
import data from "../data/data.json";
import Navbar from "../components/Navbar";
import CategorySection from "../components/CategorySection";
import SkeletonCard from "../components/SkeletonCard";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    setTimeout(() => {
      setItems(data);
      setLoading(false);
    }, 1000);
  }, []);

  const categories = [...new Set(data.map((i) => i.category))];

  const filtered = items.filter(
    (item) =>
      (selected === "All" || item.category === selected) &&
      item.itemname.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white animate-fadeIn">
      
      <Navbar
        search={search}
        setSearch={setSearch}
        categories={categories}
        selected={selected}
        setSelected={setSelected}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

       
        <div className="relative mb-12 p-10 rounded-3xl 
        bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
        shadow-2xl overflow-hidden">

      
          <div className="absolute inset-0 opacity-30 blur-2xl 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Premium</span> Products 
            </h1>  
          </div>
        </div>

      
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array(8).fill(0).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
         
          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold text-gray-300 mb-2">
              No items found 😢
            </h2>
            <p className="text-gray-500">
              Try searching something else or change category
            </p>
          </div>

        ) : (
          Object.keys(grouped).map((category) => (
            <CategorySection
              key={category}
              title={category}
              items={grouped[category]}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;