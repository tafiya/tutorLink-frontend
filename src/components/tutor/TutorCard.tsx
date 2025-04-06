"use client"
import { IUser } from '@/types';
import { MapPin, ScanEye } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

const TutorCardNew = ({ tutor }: { tutor: IUser }) => {
  return (
    <div className="bg-gray-100 shadow-[0px_0px_20px_theme(colors.blue.600)] dark:bg-gray-700 relative w-96 overflow-hidden hover:shadow-lg hover:shadow-blue-600 group rounded-xl p-5 transition-all duration-500 transform">
      <div className=" flex justify-between mb-3">
        <div className="">
          <span className="text-sm text-yellow-500">
            ⭐ {tutor?.averageRating?.toFixed(1)}
          </span>
        </div>
        <span className="text-base font-semibold px-1.5 bg-[#066ccb] rounded-lg text-white">
          ${tutor?.price}/hr
        </span>
      </div>

      <div className="flex items-center gap-4 ">
        <div>
          <img
            src={tutor?.profilePicture}
            className="w-40 rounded-xl shadow-[0px_0px_10px_theme(colors.blue.600)] group-hover:w-36 group-hover:h-36 h-40 object-center object-cover  transition-all duration-500 delay-500 transform"
          />
        </div>

        <div className=" transition-all flex flex-col justify-center items-center text-center transform duration-500 space-y-1">
          <h1 className="text-gray-600 text-xl text-center uppercase dark:text-gray-200 font-bold">
            {tutor?.name}
          </h1>
          <div className=" flex justify-center items-center gap-2 text-sm">
            <MapPin size={15} color="#f72b2b" />{' '}
           
            {tutor?.address ? tutor.address.split(',').pop()?.trim() : 'N/A'}
          </div>

          <div className="flex flex-wrap gap-2 justify-center items-center mb-4">
            {tutor?.subjects?.split(',').map((subject, index) => (
              <span
                key={index}
                className="rounded-full bg-[#dae6f3] px-5 py-1 text-sm font-semibold text-[#066ccb]"
              >
                {subject.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute group-hover:bottom-1 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-35
         rounded-lg"
      >
        <Link href={`/tutors/${tutor?._id}`}>   <Button
          variant="outline"
          className="bg-blue-600 text-white  hover:text-blue-600 border-blue-600 flex items-center gap-2 "
        >
          <ScanEye />
          Veiw Details
        </Button></Link>
     
   
      </div>
    </div>
  );
};

export default TutorCardNew;
