import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="bg-gray-50 py-12 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-roti-500 mb-3">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          We'd love to hear from you! Get in touch via phone, email, or the form below.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-roti-500 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Our Office</h3>
              <p className="text-gray-600">Blantyre, Malawi</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-roti-500 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">info@humblecarrentals.mw</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-roti-500 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+265 999 000 111</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-6 rounded-lg shadow space-y-4 border border-gray-200">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-roti-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-roti-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-roti-500"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-roti-500 text-white py-2 px-6 rounded font-semibold hover:bg-roti-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
