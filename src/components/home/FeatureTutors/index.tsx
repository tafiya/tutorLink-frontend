import React from 'react';
import { getAllTutors } from './../../../services/Tutor/index';
import { IUser } from '@/types';
import TutorCard from './../../tutor/TutorCard';
import Link from 'next/link';


const FeatureTutors = async () => {
  const data = await getAllTutors();
  const tutors: IUser[] = data?.data || [];
  return (
    <div
      className="max-w-7xl mx-auto border py-12 px-3 rounded-lg border-black  mb-12 shadow-[0px_0px_15px_rgba(37,99,235,0.6)] 
  "
    >
      <div className="">
        <h3 className="text-orange-500 font-semibold text-center">
          🚀 Find Your Perfect Tutor!
        </h3>
        <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-20 text-gray-100 text-center">
          {' '}
          Expert tutors. Personalized learning
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {tutors.slice(0, 3).map((tutor: IUser, i: number) => (
            <TutorCard key={i} tutor={tutor}></TutorCard>
          ))}
        </div>
   
        <div className=" flex justify-center mt-12">
          <Link href={'/tutors'}>
            <button
              className="mt-6 bg-blue-600 shadow-lg shadow-blue-600 hover:bg-blue-700 text-white
           font-bold py-3 px-6 rounded-lg transition duration-300 
           hover:-translate hover:scale-105 duration-150 ease-in-out"
            >
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureTutors;
