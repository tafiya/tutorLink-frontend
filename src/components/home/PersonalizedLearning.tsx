import Image from "next/image";
import tution1 from "../../assets/tution.2.jpg";
import tution2 from "../../assets/bannerNew.jpg";
import Link from "next/link";
export default function PersonalizedLearningSection() {
  return (
    <section className=" py-24 max-w-7xl mx-auto ">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src={tution1}
              alt="Woman Tutor"
              width={550}
              height={500}
              className="rounded-lg shadow-[0px_0px_32px_theme(colors.blue.600)] duration-300 hover:-translate hover:scale-105 duration-150 ease-in-out "
            />
            <div className="absolute top-0 left-0 bg-orange-500 text-white rounded-full px-4 py-2 text-center shadow-md">
              <p className="text-lg font-bold">
                12K <span className="text-sm">Community</span>{" "}
              </p>
            </div>
          </div>
          <div className="absolute bottom-[-40px] left-2">
            <Image
              src={tution2}
              alt="Man Tutor"
              width={350}
              height={350}
              className="rounded-lg shadow-lg shadow-blue-600 duration-300 hover:-translate hover:scale-105 duration-150 ease-in-out"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <h3 className="text-orange-500 font-semibold">
            Request a Class for FREE Trial
          </h3>
          <h2 className="text-2xl md:text-4xl text-gray-100 font-bold mt-2">
            Experience Personalized Learning Today
          </h2>
          <p className="text-gray-400 mt-4">
            Ready to experience the benefits of personalized tutoring firsthand?
            Sign up for a FREE trial class today and see how our expert tutors
            can help you.
          </p>

          <div className="mt-6  text-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <Link href={"/register"}>
            <button className="mt-6 bg-blue-600 duration-300 ease-in-out 
          hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 text-white
           font-bold py-3 px-6 rounded-lg transition shadow-lg
           shadow-blue-600 cursor-pointer">
              Register Now →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
