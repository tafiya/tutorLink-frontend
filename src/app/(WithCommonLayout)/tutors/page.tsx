export const dynamic = "force-dynamic";
import Spinner from "@/components/Spinner";
import FindTutors from "@/components/tutor/Turors";
import { getAllTutors } from "@/services/Tutor";
import React, { Suspense } from "react";

const TutorsPage = async () => {
  const data = await getAllTutors();

  const tutors = data?.data;
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto pt-38 ">
      <div className=" border rounded-lg">
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
