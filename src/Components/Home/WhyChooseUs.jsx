import { FaCheckCircle, FaShieldAlt, FaStar, FaClock, FaMapMarkedAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle className="text-roti-500 text-3xl" />,
    title: "Reliable & Clean Vehicles",
    description: "Our fleet is well-maintained, sanitized, and ready to meet all your travel needs."
  },
  {
    icon: <FaShieldAlt className="text-roti-500 text-3xl" />,
    title: "Safety First",
    description: "Your safety is our priority. Every vehicle is thoroughly inspected before each trip."
  },
  {
    icon: <FaMapMarkedAlt className="text-roti-500 text-3xl" />,
    title: "Wide Coverage",
    description: "Serving across 15 districts from our base in Blantyre. Wherever you are, we’ll get to you."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-tarawera-950 py-12 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-roti-500 mb-3">Why Choose Us</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
          Discover what makes Humble Car Rental your best option for affordable, safe, and efficient transport.
        </p>
      </div>

      <div className="grid gap-2 sm:gap-3 md:gap-8 sm:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-tarawera-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{feature.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
