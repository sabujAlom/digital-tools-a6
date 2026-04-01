import { ImCheckmark } from "react-icons/im";

const ModelCard = ({ model }) => {
  return (
    <div className="shadow-lg rounded-lg border overflow-hidden border-zinc-300">
      <div className="flex justify-center items-center h-56 bg-zinc-200">
        {/* <img className="h-40 w-40 object-contain" src={model.icon} /> */}
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-bold">{model.name}</h2>
        <p>{model.description}</p>
        <div className="text-2xl font-bold">
          ${model.price}/{model.period}
        </div>

           <ul className="space-y-3 mb-8">
          {model.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-500 mt-0.5"><ImCheckmark /></span>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-4         rounded-xl text-lg shadow-md hover:shadow-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
