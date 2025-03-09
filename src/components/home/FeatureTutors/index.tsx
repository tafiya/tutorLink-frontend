import React  from 'react';
import { getAllTutors } from './../../../services/Tutor/index';
import { IUser } from '@/types';
import TutorCard from './../../tutor/TutorCard';

const FeatureTutors =async() => {
      const data = await getAllTutors();
      const tutors: IUser[] = data?.data ||[];
      return (
            <div>
                  <div className="flex flex-wrap justify-center gap-12">
                        {tutors.slice(0,3).map((tutor: IUser, i: number) => (
                              <TutorCard key={i} tutor={tutor}></TutorCard>
                        ))}
                  </div>
            </div>
      );
};

export default FeatureTutors;