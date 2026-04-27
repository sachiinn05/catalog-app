import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/item/${item.itemname}`)}
      className="group hover:-translate-y-1 transition duration-300 relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl shadow-md hover:shadow-2xl cursor-pointer"
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          className="h-48 w-full object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg group-hover:text-indigo-600">
          {item.itemname}
        </h3>
        <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
          Click to view →
        </p>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-indigo-500/10 to-purple-500/10"></div>
    </div>
  );
};

export default ItemCard;