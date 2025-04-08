export const dynamic = "force-dynamic";
import Spinner from "@/components/Spinner";
import FindTutors from "@/components/tutor/Turors";
import { getAllTutors } from "@/services/Tutor";
import React, { Suspense } from "react";

const TutorsPage = async () => {
  const data = await getAllTutors();

  const tutors = data?.data;
  return (
    <div className="">
      <div className="w-full max-w-7xl mx-auto md:pt-38 pt-24 ">
      <div className=" shadow-[0px_0px_10px_theme(colors.blue.400)] rounded-lg bg-blue-800/10 p-12">
      <h2 className=" text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold leading-snug text-gray-100 text-center">
            Find your <span className=" text-blue-600 ">Perfect </span>
        
            Tutor
          </h2>
          <h2 className=" text-center text-blue-600 text-lg font-medium mt-3">
            {" "}
            All The Tutors
          </h2>
      </div>
      
      
      </div>
      <Suspense
        fallback={
          <>
            <Spinner></Spinner>
          </>
        }
      >
        <FindTutors tutors={tutors}></FindTutors>
      </Suspense>
    </div>
  );
};

export default TutorsPage;
