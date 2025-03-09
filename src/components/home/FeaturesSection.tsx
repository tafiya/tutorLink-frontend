import { Video, Users, Clock, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: <Video size={40} />,
    title: "50,000 online courses",
    description: "Enjoy a variety of fresh topics",
  },
  {
    icon: <Users size={40} />,
    title: "Expert instruction",
    description: "Find the right instructor for you",
  },
  {
    icon: <Clock size={40} />,
    title: "Life time access",
    description: "Learn on your schedule",
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "Get Certificate",
    description: "When Courses Complete",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-blue-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white p-3 rounded-full text-blue-600 mb-4">
              {feature.icon}
            </div>
            <h3 className="font-bold text-lg">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
