"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const instructors = [
  {
    name: "Jack Benzion",
    location: "Pittsburgh, USA",
    image: "/images/instructor1.jpg",
  },
  {
    name: "Jesmin Walkaer",
    location: "Pittsburgh, USA",
    image: "/images/instructor2.jpg",
  },
  {
    name: "James Benzion",
    location: "Pittsburgh, USA",
    image: "/images/instructor3.jpg",
  },
  {
    name: "James Benzion",
    location: "Pittsburgh, USA",
    image: "/images/instructor3.jpg",
  },
];

export default function InstructorSlider() {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Header with Navigation Buttons */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Our Skilled Instructors</h2>
        <div className="flex gap-3">
          <button className="swiper-button-prev bg-gray-200 p-2 rounded-full shadow-md">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next bg-gray-200 p-2 rounded-full shadow-md">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {instructors.map((instructor, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div className="w-80 h-96 relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={instructor.image}
                alt={instructor.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-blue-700">{instructor.name}</h3>
            <p className="text-gray-500">{instructor.location}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
