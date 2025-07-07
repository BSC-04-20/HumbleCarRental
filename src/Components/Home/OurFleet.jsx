import { FaBagShopping, FaCar, FaPeopleGroup } from "react-icons/fa6";
import redCar from "../../assets/fleet/red-car.jpg";
import bmw from "../../assets/fleet/bmw.jpg"
import toyota from "../../assets/fleet/toyota.png"

const fleetData = [
  {
    id: 1,
    name: "Mazda Demio",
    image: redCar,
    seats: "4 Seats",
    transmission: "Automatic",
    bags: "4",
  },
  {
    id: 2,
    name: "BMW c200",
    image: bmw,
    seats: "4 Seats",
    transmission: "Automatic",
    bags: "4",
  },
  {
    id: 3,
    name: "Toyota Corola",
    image: toyota,
    seats: "4 Seats",
    transmission: "Automatic",
    bags: "4",
  },
];

export default function OurFleet() {
  return (
    <div className="my-10 bg-gray-50 py-5">
      <div className="flex flex-col items-center justify-center mb-12 sm:mb-10">
        <h1 className="font-extrabold text-3xl text-roti-500 px-3">Our Fleet</h1>
        <p className="font-light w-5/6 text-center">Choose from our wide range of premium vehicles to make your journey comfortable and stylish.</p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-10 px-6 sm:px-10 mt-6">
        {fleetData.map((car) => (
          <div key={car.id} className="px-4 py-4 shadow rounded bg-white/5 backdrop-blur bg-white">
            <div className="w-full h-48">
              <img src={car.image} className="object-cover rounded-md w-full h-full" />
            </div>
            <p className="text-xl font-bold mt-2 text-tarawera-900">{car.name}</p>

            <div className="my-2 flex flex-wrap gap-3 text-white">
              <div className="flex gap-2 items-center">
                <FaPeopleGroup className="size-5 text-roti-500" />
                <span className="text-sm text-black">{car.seats}</span>
              </div>
              <div className="flex gap-2 items-center">
                <FaCar className="size-5 text-roti-500" />
                <span className="text-sm text-black">{car.transmission}</span>
              </div>
              <div className="flex gap-2 items-center">
                <FaBagShopping className="size-5 text-roti-500" />
                <span className="text-sm text-black">{car.bags} bags</span>
              </div>
            </div>

            <div className="w-full">
              <button className="w-full bg-tarawera-900 hover:bg-opacity-80 py-2 rounded-md text-gray-50 mt-3">Call</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
