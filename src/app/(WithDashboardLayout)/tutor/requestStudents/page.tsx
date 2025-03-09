import StudentRequestForm from "@/components/dashboard/turorDashboard/StudentRequestForm";
import { getAllTutors } from "@/services/Tutor";

const RequestStudentPage = async () => {
    const data= await getAllTutors();
 
    
    const tutors = data?.data;
    console.log("all the tutor",tutors)
    return (
        <div>
           <StudentRequestForm tutors={tutors}/>
        </div>
    );
};

export default RequestStudentPage;