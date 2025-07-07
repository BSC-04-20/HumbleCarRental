import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-extrabold text-roti-500">Humble Car Rental</h2>
          <p className="mt-2 text-sm">
            Affordable, reliable, and comfortable car rental services based in Blantyre, serving 15+ districts in Malawi.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-roti-500">Home</a></li>
            <li><a href="#" className="hover:text-roti-500">Our Fleet</a></li>
            <li><a href="#" className="hover:text-roti-500">Why Choose Us</a></li>
            <li><a href="#" className="hover:text-roti-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-roti-500 mt-1" />
              <span>Blantyre, Malawi</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-roti-500" />
              <span>+265 99 873 6501</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-roti-500" />
              <span>+265 88 406 8439</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-roti-500" />
              <span>info@humblecarrentals.mw</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-4 text-roti-500 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            {/* Add more social icons if needed */}
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Humble Car Rental. All rights reserved.
      </div>
    </footer>
  );
}
