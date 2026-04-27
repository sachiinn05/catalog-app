import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";

const ItemDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const item = data.find((i) => i.itemname === name);

  if (!item) return <p>Item not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
      >
        ← Back
      </button>

      <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
        <img src={item.image} className="w-full h-72 object-cover" />

        <div className="p-6">
          <h1 className="text-4xl font-bold">{item.itemname}</h1>
          <p className="text-gray-500 mb-4">{item.category}</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {item.itemprops.map((prop, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-100 shadow hover:shadow-lg transition"
              >
                <p className="text-sm text-gray-500">{prop.label}</p>
                <p className="font-semibold text-lg">{prop.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ItemDetail;