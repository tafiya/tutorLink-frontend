import Image from "next/image";
import tution1 from "../../assets/tution1.jpg";
import tution2 from "../../assets/tution2.jpg";
export default function PersonalizedLearningSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src={tution2}
              alt="Woman Tutor"
              width={550}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 bg-orange-500 text-white rounded-full px-4 py-2 text-center shadow-md">
              <p className="text-lg font-bold">12K <span className="text-sm">Community</span> </p>
          
            </div>
          </div>
          <div className="absolute bottom-[-40px] left-2">
            <Image
              src={tution1}
              alt="Man Tutor"
              width={350}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <h3 className="text-blue-800 font-semibold">Request a Class for FREE Trial</h3>
          <h2 className="text-3xl font-bold mt-2">
            Experience Personalized Learning Today
          </h2>
          <p className="text-gray-600 mt-4">
            Ready to experience the benefits of personalized tutoring firsthand?
            Sign up for a FREE trial class today and see how our expert tutors
            can help you.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="flex items-center">
              ✅ <span className="ml-2">Fill Out the Form</span>
            </p>
            <p className="flex items-center">
              ✅ <span className="ml-2">Schedule Your Class</span>
            </p>
            <p className="flex items-center">
              ✅ <span className="ml-2">Meet Your Tutor</span>
            </p>
            <p className="flex items-center">
              ✅ <span className="ml-2">Start The Class</span>
            </p>
          </div>

          {/* Button */}
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
            Register Now →
          </button>
        </div>
      </div>
    </section>
  );
}
