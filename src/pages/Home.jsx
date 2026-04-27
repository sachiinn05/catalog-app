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
    <div className="animate-fadeIn">
      <Navbar
        search={search}
        setSearch={setSearch}
        categories={categories}
        selected={selected}
        setSelected={setSelected}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">

        {/* HERO */}
        <div className="mb-10 p-8 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Premium Products 🚀
          </h1>
          <p className="text-lg opacity-90 max-w-xl">
            Explore curated collections across categories in one place.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array(8).fill(0).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No items found 😢
          </p>
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