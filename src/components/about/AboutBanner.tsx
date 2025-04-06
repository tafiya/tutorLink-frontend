import React from "react";

const AboutBanner = () => {
  return (
    <div className="w-full flex justify-center items-center  h-64 md:h-80 ">
      <div className=" mt-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center font-semibold leading-snug text-balance">
          <span className="text-blue-600">Welcome to Our Journey</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-200 text-center">
          We are passionate about connecting students with the best tutors and{" "}
          <br></br>
          providing a seamless learning experience.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
