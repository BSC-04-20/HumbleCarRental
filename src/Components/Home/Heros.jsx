import DestinationPriceSelector from "./HerosPrices";

export default function Heros() {
  return (
    <div className="relative bg-[url('/assets/yellow-car.webp')] bg-no-repeat bg-cover bg-center w-full h-[80vh] flex justify-center items-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Foreground content */}
      <div className="flex flex-col items-center px-4 py-4 w-[60%] rounded-md border border-roti-500 backdrop-blur-md h-72 z-20">
        <h1 className="text-gray-50 font-extrabold text-4xl text-center">Premium Car Rentals at Humble Prices</h1>
        <p className="text-white text-center mt-2">Experience luxury without breaking the bank</p>

        <DestinationPriceSelector/>

        <div className="flex flex-col sm:flex-row gap-5 mt-5">
            <a className="px-6 py-2 text-gray-50 bg-roti-500 rounded-md font-medium w-full sm:w-max">Our fleet</a>
            <a className="px-6 py-2 text-gray-50 bg-roti-500/20 border-[2px] border-roti-700 rounded-md font-medium w-full sm:w-max">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
