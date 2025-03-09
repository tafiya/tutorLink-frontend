import Image from "next/image";
import banner from "../../assets/tryBanner.png";

const Banner = () => {
  return (
    <div className="bg-[#f2f4f9]">
      <section className="pt-32 pb-12 sm:pb-16 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  Best Tutoring Platform for OnlineTuitions
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                  Find the Perfect Tutor Near You: Enhance Learning with Expert
                  Guidance and Personalized Support Today!
                </p>

                <form action="#" method="POST" className="mt-8 sm:mt-10">
                  <div className="relative p-2 sm:border sm:border-blue-400  group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-blue-600 sm:focus-within:border-blue-600 ">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Search Course"
                      className="block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-blue-600 outline-none focus:border-blue-600  focus:ring-1 focus:ring-blue-600  rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                      required
                    />
                    <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                      <button
                        type="submit"
                        className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-blue-600  rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                    2943
                  </p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Cards
                    <br />
                    Delivered
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
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">
                    $1M+
                  </p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Transaction
                    <br />
                    Completed
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={banner}
                alt=""
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
