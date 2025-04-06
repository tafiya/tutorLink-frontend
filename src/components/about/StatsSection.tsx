import { FaUsers, FaVideo, FaThumbsUp, FaUserFriends } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      icon: <FaUsers className="text-blue-500 text-3xl" />,
      number: "10K",
      label: "Successfully Trained",
      bg: "bg-blue-200",
    },
    {
      icon: <FaVideo className="text-red-500 text-3xl" />,
      number: "22K",
      label: "Courses Completed",
      bg: "bg-red-50",
    },
    {
      icon: <FaThumbsUp className="text-blue-500 text-3xl" />,
      number: "45K",
      label: "Satisfaction Rate",
      bg: "bg-blue-200",
    },
    {
      icon: <FaUserFriends className="text-orange-500 text-3xl" />,
      number: "55K",
      label: "Students Community",
      bg: "bg-orange-50",
    },
  ];

  return (

      <div className=" max-7xl mx-auto flex flex-wrap justify-center items-center gap-12 py-28  text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-lg duration-300 hover:-translate hover:scale-105 duration-150 ease-in-out shadow-[0px_0px_20px_theme(colors.blue.600)] hover:shadow-lg hover:shadow-blue-600 ${stat.bg}`}
          >
            <div className="bg-white p-3 rounded-full shadow-md">
              {stat.icon}
            </div>
            <p className="text-2xl font-bold mt-2">{stat.number}</p>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
  
  );
}
