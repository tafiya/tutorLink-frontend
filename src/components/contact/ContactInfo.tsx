import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className=" pt-38 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-orange-500 font-semibold text-lg flex items-center justify-center gap-2">
          📩 Get In Touch
        </h3>
        <h2 className="text-3xl font-bold text-gray-100 mt-2">
          Let us help you
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Our platform is built on the principles of innovation, quality, and inclusivity, aiming to provide a seamless learning experience.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Main Office */}
        <div className="bg-white p-6 shadow-[0px_0px_20px_theme(colors.blue.600)] hover:shadow-lg hover:shadow-blue-600 overflow-hidden transition-transform hover:scale-105 rounded-xl text-center">
          <div className="flex justify-center">
            <div className="bg-blue-600 text-white p-4 rounded-full">
              <FaMapMarkerAlt size={24} />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Main Office</h3>
          <p className="text-gray-600 mt-2">
            2972 Westheimer Rd, Santa Ana, Illinois 85486
          </p>
          <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">
            Find Location
          </a>
        </div>

        {/* Email Address */}
        <div className="bg-white p-6 shadow-[0px_0px_20px_theme(colors.blue.600)] hover:shadow-lg hover:shadow-blue-600 overflow-hidden transition-transform hover:scale-105 rounded-xl text-center">
          <div className="flex justify-center">
            <div className="bg-blue-600 text-white p-4 rounded-full">
              <FaEnvelope size={24} />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Email Address</h3>
          <p className="text-gray-600 mt-2">infoexample@gmail.com</p>
          <p className="text-gray-600">example@gmail.com</p>
          <a href="mailto:infoexample@gmail.com" className="text-blue-600 font-semibold mt-2 inline-block">
            Get In Touch
          </a>
        </div>

        {/* Phone Number */}
        <div className="bg-white p-6 shadow-[0px_0px_20px_theme(colors.blue.600)] hover:shadow-lg hover:shadow-blue-600 overflow-hidden transition-transform hover:scale-105 rounded-xl text-center">
          <div className="flex justify-center">
            <div className="bg-blue-600 text-white p-4 rounded-full">
              <FaPhone size={24} />
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Phone Number</h3>
          <p className="text-gray-600 mt-2">(505) 555-0125</p>
          <p className="text-gray-600">(406) 555-0120</p>
          <a href="tel:5055550125" className="text-blue-600 font-semibold mt-2 inline-block">
            Contact Us Today!
          </a>
        </div>
      </div>
    </div>
  );
}
