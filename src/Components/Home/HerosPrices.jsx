import { useState } from "react";

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


export default function DestinationPriceSelector() {
  const [selectedDistrict, setSelectedDistrict] = useState("Lilongwe");

  return (
    <div className="bg-gray-800/80 w-full px-4 py-4 rounded-md flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mt-4">
      {/* From */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white w-full sm:w-auto">
        <span className="font-semibold">From:</span>
        <span className="font-bold text-roti-500">Blantyre</span>
      </div>

      {/* To */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white w-full sm:w-auto">
        <label htmlFor="to" className="font-semibold">To:</label>
        <select
          id="to"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="bg-gray-700 text-white px-3 py-2 rounded-md border border-gray-600 w-full sm:w-auto"
        >
          {Object.keys(destinations).map((district) => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div className="text-white font-semibold w-full sm:w-auto">
        Price: <span className="text-roti-500 font-bold">{destinations[selectedDistrict]}/day</span>
      </div>
    </div>
  );
}
