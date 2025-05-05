import { FaUsers, FaVideo, FaThumbsUp, FaUserFriends } from "react-icons/fa";

export default function Community() {
  const stats = [
    {
      icon: <FaUsers className="text-blue-500 text-3xl" />,
      number: "50,000",
      label: "Students who have improved their grades",
      bg: "bg-blue-200",
    },
    {
      icon: <FaVideo className="text-red-500 text-3xl" />,
      number: "100+",
      label: "From math to music, we've got you covered",
      bg: "bg-red-50",
    },
    {
      icon: <FaThumbsUp className="text-blue-500 text-3xl" />,
      number: "200+",
      label: "Based on thousands of reviews",
      bg: "bg-blue-200",
    },
    {
      icon: <FaUserFriends className="text-orange-500 text-3xl" />,
      number: "500+",
      label: "Qualified and experienced educators",
      bg: "bg-orange-50",
    },
  ];

  return (

      <div className=" max-7xl mx-auto px-4 flex flex-col justify-center items-center pb-28  text-center">
          <h3 className="text-orange-500 font-semibold text-center">Community </h3>
      <h2 className="text-2xl text-gray-100 md:text-4xl font-bold mt-4 mb-16 text-center">
        {" "}
        Our Growing Community 
      </h2>
      <div className=" flex flex-wrap justify-center items-center gap-12">
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
       
      </div>
  
  );
}
