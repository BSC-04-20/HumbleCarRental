import { FiMapPin } from "react-icons/fi";

const destinations = {
  "Balaka": "MK 65,000",
  "Blantyre": "MK 45,000",
  "Chikwawa": "MK 70,000",
  "Dedza": "MK 70,000",
  "Lilongwe": "MK 90,000",
  "Liwonde": "MK 70,000",
  "Machinga": "MK 70,000",
  "Mangochi": "MK 80,000",
  "Mulanje": "MK 60,000",
  "Mwanza": "MK 70,000",
  "Nsanje": "MK 85,000",
  "Ntcheu": "MK 70,000",
  "Salima": "MK 85,000",
  "Thyolo": "MK 55,000",
  "Zomba": "MK 60,000"
};

export default function PricesList() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-roti-500 mb-10">
        Destination Prices (From Blantyre)
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {Object.entries(destinations).map(([district, price]) => (
          <div
            key={district}
            className="bg-white rounded-xl shadow hover:shadow-lg p-6 border border-gray-200 transition-all relative"
          >
            {/* Top-right icon */}
            <div className="absolute top-4 right-4 p-2 bg-tarawera-50 rounded-full">
                <FiMapPin className="text-tarawera-700 text-xl" />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">{district}</h2>
            <p className="text-roti-500 font-bold text-lg">{price} / day</p>
          </div>
        ))}
      </div>
    </div>
  );
}
