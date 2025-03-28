"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import banner from "../../assets/banner.png";
import toast from "react-hot-toast";

const Banner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const trimmedSearch = searchTerm.trim();

    if (trimmedSearch) {
      router.push(`/tutors?search=${encodeURIComponent(trimmedSearch)}`);
    } else {
      toast.error("Please type for search");
      // router.push(`/tutors`); // Redirect to tutors page without query params
    }
  };
  return (
    <div className=" ">
      <section className="pt-32 pb-12 sm:pb-16 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-100 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  Best <span className="text-blue-600">Tutoring </span>Platform <span className="text-blue-600">For</span> Online <span className="text-blue-600">Tuitions </span> 
                </h1>
                <p className="mt-2 text-lg text-gray-200 sm:mt-8 font-inter">
                  Find the Perfect Tutor Near You: Enhance Learning with Expert
                  Guidance and Personalized Support Today!
                </p>

                <div className="mt-8 sm:mt-10 transition duration-300 
           hover:-translate hover:scale-105 duration-150 ease-in-out">
                  <div className="relative p-2 group sm:rounded-xl sm:focus-within:ring-1
                   sm:focus-within:ring-blue-600 sm:focus-within:border-blue-600 ">
                    <input
                      type="email"
                      name=""
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search Course"
                      className="block w-full px-4 py-4 text-gray-100 placeholder-gray-300 bg-transparent
                        outline-none focus:border-blue-600 
                        focus:ring-1 focus:ring-blue-600 rounded-xl shadow-lg shadow-blue-600 
                         sm:focus:ring-0 sm:focus:border-transparent"
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                      <button
                        onClick={handleSearch}
                        type="submit"
                        className="inline-flex px-6 py-3 text-lg duration-300 ease-in 
                         font-bold text-white transition bg-blue-600  rounded-lg  "
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-100 sm:text-4xl font-pj">
                    2943
                  </p>
                  <p className="ml-3 text-sm text-gray-100 font-pj">
                    Students
                    <br />
                    Register
                  </p>
                </div>

                <div className="hidden sm:block">
                  <svg
                    className="text-gray-400"
                    width="16"
                    height="39"
                    viewBox="0 0 16 39"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975" />
                    <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398" />
                    <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                    <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                    <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
                  </svg>
                </div>

                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-100 sm:text-4xl font-pj">
                    100+
                  </p>
                  <p className="ml-3 text-sm text-gray-100 font-pj">
                    Expert
                    <br />
                    Tutor
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={banner}
                alt=""
                width={700}
                height={600}
                className="w-full  shadow-lg
            rounded-4xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
