import {  Users, BadgeCheck, UserRoundSearch, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: <UserRoundSearch size={40} />,
    title: "Find Tutors Fast",
    description: "Connect with expert tutors in minutes",
  },

  {
    icon: <BadgeDollarSign size={40} />,
    title: "Secure Payments",
    description: "Safe and hassle-free transactions",
  },
  {
    icon: <Users size={40} />,
    title: "Expert instruction",
    description: "Find the right instructor for you",
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "Verified Profiles",
    description: "Trusted tutors with authentic credentials",
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
