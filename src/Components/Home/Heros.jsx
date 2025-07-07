import DestinationPriceSelector from "./HerosPrices";

export default function Heros() {
  return (
    <div className="relative bg-[url('/assets/yellow-car.webp')] bg-no-repeat bg-cover bg-center w-full min-h-[80vh] flex justify-center items-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Foreground content */}
      <div className="relative z-20 flex flex-col items-center px-4 py-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] rounded-md border border-roti-500 backdrop-blur-md">
        <h1 className="text-gray-50 font-extrabold text-3xl sm:text-4xl text-center leading-tight">
          Premium Car Rentals at Humble Prices
        </h1>

        <p className="text-white text-center mt-2 text-sm sm:text-base">
          Experience luxury without breaking the bank
        </p>

        {/* Responsive price selector bar */}
        <div className="w-full mt-4">
          <DestinationPriceSelector />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
          <a className="px-6 py-2 text-gray-50 bg-roti-500 rounded-md font-medium text-center">
            Our fleet
          </a>
          <a className="px-6 py-2 text-gray-50 bg-roti-500/20 border-2 border-roti-700 rounded-md font-medium text-center">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
