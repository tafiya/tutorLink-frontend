/* eslint-disable @next/next/no-img-element */
// TutorCard.tsx
"use client"
import React from 'react';
import { IoIosSend } from "react-icons/io";
import { IUser } from '@/types';
import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';
import { Eye } from 'lucide-react';

const TutorCard = ({ tutor }: { tutor: IUser }) => {

      return (
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 hover:shadow-xl hover:shadow-blue-200 transition duration-300">
              <div className=' flex justify-between'>
              <span className="rounded-full border border-[#f98900] px-3 py-1 text-xs text-[#f98900]">{tutor?.gradeLevel}</span>
              <span className="text-sm text-yellow-500">
                ⭐ {tutor?.averageRating?.toFixed(1)}
                </span>
              </div>
           
            <div className="flex flex-col items-center gap-4 pb-2">
          <img src={tutor?.profilePicture} className="rounded-full object-cover h-16 w-16" alt="" />
                <h2 className="text-xl font-semibold">{tutor?.name}</h2>
             
                <p className="text-base text-center text-gray-700">{tutor?.bio}</p>
                <span className="rounded-full bg-[#f3f9ff] px-5 py-2 text-base font-semibold text-[#066ccb]">{tutor?.subjects}</span>
            </div>
          <hr />
             
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-semibold text-[#f48750]">${tutor?.price}/hr</span>
                <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={`/tutors/${tutor?._id}`}><Eye className=" text-blue-600 text-xl"/></Link>
          {/* <Button variant="outline">Hover</Button> */}
        </TooltipTrigger>
        <TooltipContent className="">
          <p>View Details</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
                <Button
            variant="outline"
            className="bg-blue-600 text-white hover:text-blue-600 text-base transition hover:border-blue-600 flex items-center gap-2 "
          > <IoIosSend />Request to Hire
                  </Button>
            </div>
          
          </div>
     
      );
};

export default TutorCard;

{/* <Card className="w-[350px]">
<CardHeader>
  <div className="relative h-40 w-full">
    <Image
      src={tutor.profilePicture || defaultImageUrl}
      alt='pisture'
      fill
      className="rounded-t-lg object-cover"
    />
  </div>
  <CardTitle className="mt-4">{tutor?.name}</CardTitle>
  <CardDescription>{tutor?.bio}</CardDescription>
</CardHeader>
<CardContent className="grid gap-4">
  <div className="flex space-x-4 text-sm text-gray-600">
    <div>📄 7 Sections</div>
    <div>📄 30 Days</div>
    <div>📄 25 Students</div>
  </div>
</CardContent>
<CardFooter className="flex justify-between items-center">
  <span className="text-lg font-semibold">{tutor?.price}</span>
  <Button>Join This Class</Button>
</CardFooter>
</Card> */}