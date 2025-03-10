import React from "react";
import { getAllTutors } from "./../../../services/Tutor/index";
import { IUser } from "@/types";
import TutorCard from "./../../tutor/TutorCard";
import Link from "next/link";

const FeatureTutors = async () => {
  const data = await getAllTutors();
  const tutors: IUser[] = data?.data || [];
  return (
    <div className=" bg-blue-50 py-24">
      <h3 className="text-orange-500 font-semibold text-center">
        🚀 Find Your Perfect Tutor!
      </h3>
      <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-20 text-center">
        {" "}
        Expert tutors. Personalized learning
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {tutors.slice(0, 3).map((tutor: IUser, i: number) => (
          <TutorCard key={i} tutor={tutor}></TutorCard>
        ))}
      </div>
      <div className=" flex justify-center mt-12">
        <Link href={"/tutors"}>
          <button className="mt-6 bg-blue-600  hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureTutors;
