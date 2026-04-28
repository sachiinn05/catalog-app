import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/item/${item.itemname}`)}
      className="group relative rounded-3xl overflow-hidden cursor-pointer 
      bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl 
      border border-white/10 shadow-lg 
      hover:shadow-purple-500/30 hover:-translate-y-2 
      transition-all duration-500"
    >
    
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          className="h-52 w-full object-cover 
          group-hover:scale-110 group-hover:rotate-1 
          transition duration-700 ease-out"
        />

       
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70"></div>
      </div>

  
      <div className="p-5 relative z-10">
        <h3
          className="font-semibold text-lg text-white 
        group-hover:text-transparent group-hover:bg-clip-text 
        group-hover:bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 transition"
        >
          {item.itemname}
        </h3>

        <p
          className="text-xs text-gray-400 mt-2 opacity-0 
        group-hover:opacity-100 transition duration-300"
        >
          Click to explore →
        </p>
      </div>

    
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 
      transition duration-500 
      bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-pink-500/20"
      ></div>

  
      <div
        className="absolute inset-0 rounded-3xl border border-transparent 
      group-hover:border-purple-400/40 transition duration-500"
      ></div>
    </div>
  );
};

export default ItemCard;