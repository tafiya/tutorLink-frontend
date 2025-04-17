/* eslint-disable @next/next/no-img-element */
import { getAllTutors } from '@/services/Tutor';
import { IUser } from '@/types';
import React from 'react';

const InstructorsSection = async () => {
  const data = await getAllTutors();
  const tutors: IUser[] = data?.data || [];
  return (
    <section className="pb-28 ">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-orange-500  font-semibold">Course Instructors</h4>
        <h2 className="text-4xl text-gray-200 font-bold mt-2">
          Meet our <br /> Class Instructors
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl px-10 mt-10 mx-auto">
        {tutors.map((instructor, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center duration-300 hover:-translate hover:scale-105 duration-150 ease-in-out  shadow-[0px_0px_20px_theme(colors.blue.600)] hover:shadow-blue-600 rounded-lg hover:shadow-xl  py-10"
          >
            <img
              src={instructor.profilePicture}
              alt={instructor.name}
              className="w-24 h-24 rounded-full border-4 border-gray-200 shadow-md"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-300">
              {instructor.name}
            </h3>
            <p className="text-gray-300">{instructor.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstructorsSection;
