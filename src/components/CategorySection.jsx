import ItemCard from "./ItemCard";

const CategorySection = ({ title, items }) => {
  return (
    <div className="mb-14 px-4">
      
    
      <div className="flex items-center gap-3 mb-8">
        <span className="w-2 h-10 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></span>

        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          {title}
        </h2>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="transform transition duration-300 hover:scale-105 hover:-translate-y-2"
          >
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;