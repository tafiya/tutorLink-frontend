const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🏃",
      title: "One-on-one Teaching",
      description:
        "All of our special education experts have a degree in special education.",
      bgColor: "bg-blue-500",
    },
    {
      icon: "⏳",
      title: "24/7 Tutor Availability",
      description:
        "Our tutors are always available to respond as quick as possible for you.",
      bgColor: "bg-green-500",
    },
    {
      icon: "📚",
      title: "Interactive Whiteboard",
      description:
        "Our digital whiteboard is equipped with audio and video chat features.",
      bgColor: "bg-orange-500",
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      description: "Choose an expert tutor based on your budget and per hour.",
      bgColor: "bg-pink-500",
    },
  ];

  return (
    <div className=" ">
      <section className="py-28  max-w-7xl mx-auto text-center px-4">
        <h3 className="text-orange-500 font-semibold">WHY CHOOSE US</h3>
        <h2 className="text-2xl md:text-4xl text-gray-100 font-bold mt-4 mb-14">
          Benefits of Online Tutoring Services With Us
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-6 flex flex-col items-center transition duration-300 
           hover:-translate hover:scale-105 duration-150 ease-in-out shadow-[0px_0px_20px_theme(colors.blue.600)] hover:shadow-lg hover:shadow-blue-600"
            >
              <div
                className={`text-white ${benefit.bgColor} p-3 rounded-full text-2xl`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mt-4">{benefit.title}</h3>
              <p className="text-gray-600 mt-2 text-sm text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BenefitsSection;
