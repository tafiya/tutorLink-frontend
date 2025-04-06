'use client';
import React from 'react';
// import { getAllTutors } from './../../../services/Tutor/index';
import { IUser } from '@/types';
import TutorCard from './../../tutor/TutorCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  tutors: IUser[];
}

const FeatureTutors: React.FC<Props> = ({ tutors }) => {
  return (

    <div
      className="max-w-7xl mx-auto border py-12 px-3 rounded-lg border-black shadow-[0px_0px_15px_rgba(37,99,235,0.6)] 
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
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: '.custom-prev-button',
            prevEl: '.custom-next-button',
          }}
          loop={true}
          breakpoints={{
            350: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            873: { slidesPerView: 2 },
            1080: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {' '}
          {tutors.map((tutor: IUser) => (
            <SwiperSlide key={tutor._id} className="cursor-pointer  ">
              <TutorCard tutor={tutor}></TutorCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureTutors;
