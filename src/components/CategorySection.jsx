import ItemCard from "./ItemCard";

const CategorySection = ({ title, items }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded"></span>
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <ItemCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;