/* eslint-disable @next/next/no-img-element */
import { FaChartBar, FaBullseye } from "react-icons/fa";


export default function EduAllSection() {
  return (
    <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row gap-12  justify-between px-10 py-16 ">
      {/* Left Section: Images and Stats */}
      <div className="flex flex-col space-y-4 lg:w-1/2">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/demnpqwx3/image/upload/v1741551776/aboutTutor_hkinpz.jpg"
            alt="Students in class"
            className="rounded-xl shadow-[0px_0px_20px_theme(colors.blue.600)] hover:shadow-blue-600 hover:shadow-lg duration-300 hover:-translate hover:scale-105 duration-150 ease-in-out "
          />
          <div className="absolute bottom-2 left-2 bg-white p-2 rounded-lg shadow-md text-sm font-semibold">
            <span className="text-red-500">20% OFF</span> <br /> For All Courses
          </div>
        </div>
        <div className="flex space-x-6 ">
          <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md shadow-blue-600 text-center duration-300 hover:-translate hover:scale-105 duration-150 ease-in-out">
            <p className="text-2xl font-bold">16+</p>
            <p className="text-sm">Years of Experience</p>
          </div>
          <div className="bg-gray-400 text-white px-6 py-3 rounded-lg shadow-md shadow-blue-600 text-center duration-300 hover:-translate hover:scale-105 duration-150 ease-in-out">
            <p className="text-2xl font-bold">3K</p>
            <p className="text-sm">Educated Student</p>
          </div>
        </div>
      </div>

      {/* Right Section: About EduAll */}
      <div className="mt-10 lg:w-1/2">
        <h3 className="text-orange-500 font-semibold">About TeachNest</h3>
        <h2 className="md:text-4xl text-2xl font-bold mt-2 text-gray-100">
          The Place Where You Can Achieve
        </h2>
        <p className="mt-4 text-gray-300">
          Welcome to TeachNest, where learning knows no bounds. Whether youre a
          student, professional, or lifelong learner...
        </p>
        <div className="mt-6 space-y-4">
          <div className="flex items-start space-x-3">
            <FaChartBar className="text-blue-600 text-4xl" />
            <div>
              <h4 className="text-lg md:text-2xl font-semibold text-gray-200">Our Mission</h4>
              <p className="text-gray-400 text-base">
                Driven by a team of dedicated educators, technologists, and
                visionaries, we strive to create a supportive environment.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FaBullseye className="text-blue-600 text-4xl" />
            <div>
              <h4 className="text-lg md:text-2xl font-semibold text-gray-200">Our Vision</h4>
              <p className="text-gray-400 text-base">
                A professional seeking to upskill or a lifelong learner
                exploring new horizons, were here to accompany you every step
                of the way.
              </p>
            </div>
          </div>
        </div>
        {/* <Button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">
          Read More →
        </Button> */}
  
      </div>
    </div>
  );
}
