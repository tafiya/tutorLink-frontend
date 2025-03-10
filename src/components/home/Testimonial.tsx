/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    message:
      "TutorLink helped me find an amazing physics tutor! My grades have improved, and I feel much more confident in my studies.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    message:
      "I love how easy it was to book a tutor. The platform is user-friendly, and the tutors are highly qualified!",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Johnson",
    message:
      "My tutor explained complex math concepts in a way that finally made sense. I wish I had joined earlier!",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily Brown",
    message:
      "Great experience overall! The scheduling system is convenient, but I would love more subject options.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div className="pt-16">
      <h2 className="text-2xl md:text-4xl font-bold mt-4  text-center">
        {" "}
        Student Review
      </h2>
      <div className="relative mb-24 w-full max-w-4xl mx-auto overflow-hidden rounded-lg bg-white shadow-lg p-6">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full p-6 flex flex-col items-center text-center bg-blue-50"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4 border border-gray-300"
              />
              <p className="text-gray-800 text-lg font-semibold">
                ``{testimonial.message}``
              </p>
              <span className="text-gray-600 mt-2">- {testimonial.name}</span>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute inset-y-0 left-0 flex items-center justify-center w-12 h-full text-blue-600 text-4xl  focus:outline-none"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full text-blue-600 text-4xl focus:outline-none"
        >
          &#10095;
        </button>
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`size-3 border border-gray-400 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-blue-600 border-blue-600" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
