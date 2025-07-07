import { useState } from "react";

const destinations = {
  "Lilongwe": "MK 80,000",
  "Mzuzu": "MK 120,000",
  "Zomba": "MK 45,000",
  "Mangochi": "MK 90,000",
  "Salima": "MK 85,000",
  "Ntcheu": "MK 70,000",
};

export default function DestinationPriceSelector() {
  const [selectedDistrict, setSelectedDistrict] = useState("Lilongwe");

  return (
    <div className="bg-gray-800/80 w-full px-6 py-4 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
      <div className="flex items-center gap-2 text-white w-full sm:w-auto">
        <span className="font-semibold">From:</span>
        <span className="font-bold text-roti-500">Blantyre</span>
      </div>

      <div className="flex items-center gap-2 text-white w-full sm:w-auto">
        <label htmlFor="to" className="font-semibold">To:</label>
        <select
          id="to"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="bg-gray-700 text-white px-3 py-2 rounded-md border border-gray-600"
        >
          {Object.keys(destinations).map((district) => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>
      </div>

      <div className="text-white font-semibold w-full sm:w-auto">
        Price: <span className="text-roti-500 font-bold">{destinations[selectedDistrict]}</span>
      </div>
    </div>
  );
}
