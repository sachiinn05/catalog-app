import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";

const ItemDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const item = data.find((i) => i.itemname === name);

  if (!item)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Item not found 😢
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-4 py-10">

      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-5 py-2 rounded-xl 
        bg-white/10 backdrop-blur-lg border border-white/20 
        hover:bg-white/20 transition shadow-lg"
      >
        ← Back
      </button>

     
      <div className="max-w-5xl mx-auto 
      bg-white/5 backdrop-blur-xl border border-white/10 
      rounded-3xl shadow-2xl overflow-hidden">

        
        <div className="overflow-hidden">
          <img
            src={item.image}
            className="w-full h-80 object-cover 
            hover:scale-105 transition duration-700"
          />
        </div>

       
        <div className="p-8">

        
          <h1 className="text-4xl md:text-5xl font-bold 
          bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
          text-transparent bg-clip-text mb-2">
            {item.itemname}
          </h1>

       
          <p className="text-gray-400 mb-6 text-sm tracking-wide">
            {item.category}
          </p>

      
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {item.itemprops.map((prop, i) => (
              <div
                key={i}
                className="relative p-5 rounded-2xl 
                bg-gradient-to-br from-white/10 to-white/5 
                border border-white/10 backdrop-blur-lg 
                shadow-md hover:shadow-purple-500/20 
                transition duration-300"
              >
              
                <div className="absolute inset-0 opacity-0 hover:opacity-100 
                transition bg-gradient-to-tr from-indigo-500/10 to-pink-500/10 rounded-2xl"></div>

                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  {prop.label}
                </p>

                <p className="font-semibold text-lg mt-1 text-white">
                  {prop.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>


      <div className="fixed top-[-120px] right-[-120px] w-[300px] h-[300px] 
      bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="fixed bottom-[-120px] left-[-120px] w-[300px] h-[300px] 
      bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

    </div>
  );
};

export default ItemDetail;