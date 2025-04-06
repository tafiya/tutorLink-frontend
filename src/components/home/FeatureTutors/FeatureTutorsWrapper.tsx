import React from 'react';
import { getAllTutors } from '@/services/Tutor';
import { IUser } from '@/types';
import FeatureTutors from '.';



const FeatureTutorsWrapper = async () => {
  const data = await getAllTutors();
  const tutors: IUser[] = data?.data || [];

  return <FeatureTutors tutors={tutors} />;
};

export default FeatureTutorsWrapper;
