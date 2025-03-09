import { getAllTutors } from '@/services/Tutor';
import React from 'react';

const TutorDashboard = async () => {
    const data= await getAllTutors();
    console.log(data?.data)
//     const tutors = data?.data;
      return (
            <div>
                  <h2>welcome to Tutor dashboard</h2>
            </div>
      );
};

export default TutorDashboard;