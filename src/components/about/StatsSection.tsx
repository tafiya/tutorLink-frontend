import { FaUsers, FaVideo, FaThumbsUp, FaUserFriends } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    { icon: <FaUsers className="text-blue-500 text-3xl" />, number: "10K", label: "Successfully Trained", bg: "bg-blue-50" },
    { icon: <FaVideo className="text-red-500 text-3xl" />, number: "22K", label: "Courses Completed", bg: "bg-red-50" },
    { icon: <FaThumbsUp className="text-blue-500 text-3xl" />, number: "45K", label: "Satisfaction Rate", bg: "bg-blue-50" },
    { icon: <FaUserFriends className="text-orange-500 text-3xl" />, number: "55K", label: "Students Community", bg: "bg-orange-50" }
  ];

  return (
    <div className="max-7xl mx-auto">
            <div className="  flex flex-wrap justify-center items-center gap-6 px-4 py-16 bg-gray-50 text-center">
      {stats.map((stat, index) => (
        <div key={index} className={`flex flex-col items-center p-6 rounded-lg shadow-md ${stat.bg}`}>
          <div className="bg-white p-3 rounded-full shadow-md">{stat.icon}</div>
          <p className="text-2xl font-bold mt-2">{stat.number}</p>
          <p className="text-gray-600 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
    </div>

  );
}
