/* eslint-disable @next/next/no-img-element */
export default function ContactSection() {
  return (
    <div className="py-28 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg">Contact Us</h3>
          <h2 className="text-3xl font-bold text-gray-100 mt-2">
            Have questions? Dont hesitate to contact us
          </h2>
          <p className="text-gray-300 mt-4">
            We are passionate about transforming lives through education.
            Founded with a vision to make learning accessible to all, we believe
            in the power of knowledge to unlock opportunities and shape the
            future.
          </p>

          {/* Reviews Section */}
          <div className="flex items-center mt-6">
            {/* Avatar group */}
            <div className="flex -space-x-2">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="User"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="User"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="User"
              />
            </div>

            {/* Star Ratings */}
            <div className="ml-4">
              <div className="flex text-yellow-500">★ ★ ★ ★ ☆</div>
              <p className="text-gray-100 text-sm">2.5k+ reviews (4.95 of 5)</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white p-8 shadow-[0px_0px_20px_theme(colors.blue.600)] hover:shadow-lg hover:shadow-blue-600 overflow-hidden transition-transform hover:scale-105 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900">Get In Touch</h3>
          <form className="mt-6">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Name..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Enter Email..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Enter Your Number..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Enter Your Message..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
