/* eslint-disable @next/next/no-img-element */
import { getAllTutors } from "@/services/Tutor";
import { IUser } from "@/types";
import React from "react";

// const instructors = [
//   { name: "Jason Response", role: "Education Assistant", image: "https://via.placeholder.com/150" },
//   { name: "Jonquil Von", role: "Teaching Assistant", image: "https://via.placeholder.com/150" },
//   { name: "Piff Jenkins", role: "Teacher", image: "https://via.placeholder.com/150" },
//   { name: "Brian Cumin", role: "Lead Teacher", image: "https://via.placeholder.com/150" },
//   { name: "Hanson Deck", role: "Teacher", image: "https://via.placeholder.com/150" },
//   { name: "Alan Fresco", role: "Teacher", image: "https://via.placeholder.com/150" },
// ];

const InstructorsSection = async () => {
    const data = await getAllTutors();
    const tutors: IUser[] = data?.data || [];
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h4 className="text-orange-500  font-semibold">Course Instructors</h4>
                <h2 className="text-4xl font-bold mt-2">Meet our <br /> Class Instructors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10 max-w-6xl mx-auto">
                {tutors.map((instructor, index) => (
                    <div key={index} className="flex flex-col items-center text-center  hover:shadow-blue-100 rounded-lg hover:shadow-lg py-10">
                        <img
                            src={instructor.profilePicture}
                            alt={instructor.name}
                            className="w-24 h-24 rounded-full border-4 border-gray-200 shadow-md"
                        />
                        <h3 className="mt-4 text-lg font-semibold">{instructor.name}</h3>
                        <p className="text-gray-500">{instructor.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InstructorsSection;
