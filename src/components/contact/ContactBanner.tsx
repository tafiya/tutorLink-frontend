import React from 'react';

const ContactBanner = () => {
    return (
        <div className="w-full flex justify-center items-center bg-[#eff6ff] h-64 md:h-80 ">
        <div className=" mt-16">
          <h2 className=" text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold leading-snug text-balance text-center">
            <span className=" text-blue-600 ">Contact Us</span>
     
          </h2>
          {/* <h2 className=" text-center text-blue-600 text-lg font-medium mt-3">
            {" "}
            All The Tutors
          </h2> */}
        </div>
      </div>
    );
};

export default ContactBanner;