import UserCard from '@/components/dashboard/studentDashboard/Profile';
// import TutorProfile from '@/components/dashboard/turorDashboard/TutorProfile';
import React from 'react';

const page = () => {
    return (
        <div className=' bg-gray-200 flex items-center justify-center min-h-screen'>
       <UserCard></UserCard>
     </div>
    );
};

export default page;