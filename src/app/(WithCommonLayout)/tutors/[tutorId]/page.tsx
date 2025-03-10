import ProfileSection from "@/components/tutor/tutorDetails/TutorsInfoSection";

import { getSingleTutor } from "@/services/Tutor";
import React from "react";

const TutorDetails = async ({
  params,
}: {
  params: Promise<{ tutorId: string }>;
}) => {
  const { tutorId } = await params;
  const { data: tutor } = await getSingleTutor(tutorId);

  return (
    <div className="max-w-7xl py-28 w-full mx-auto">
      <div className="flex flex-wrap  ">
        <ProfileSection tutor={tutor} />
      </div>
    </div>
  );
};

export default TutorDetails;
