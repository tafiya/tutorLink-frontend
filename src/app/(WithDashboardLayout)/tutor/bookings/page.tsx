import MyAllBookings from "@/components/dashboard/turorDashboard/MyAllBookings";

import { getAllTutors } from "@/services/Tutor";

const TutorBookings = async () => {
  const data = await getAllTutors();

  const tutors = data?.data;

  return (
    <div>
      <MyAllBookings tutors={tutors} />
    </div>
  );
};

export default TutorBookings;
