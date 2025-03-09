const HowItWorks = () => {
    const steps = [
      {
        number: "01",
        title: "College Tutoring",
        description: "This helps us adjust the learning plan as needed.",
        icon: "📖"
      },
      {
        number: "02",
        title: "Set Schedule",
        description: "This helps us adjust the learning plan as needed.",
        icon: "📅"
      },
      {
        number: "03",
        title: "Applying Tuition",
        description: "This helps us adjust the learning plan as needed.",
        icon: "🖥️"
      },
      {
        number: "04",
        title: "Start Journey",
        description: "This helps us adjust the learning plan as needed.",
        icon: "🚀"
      }
    ];
  
    return (
      <section className="py-12 bg-blue-50 text-center px-4">
        <h3 className="text-blue-500 font-semibold flex justify-center items-center gap-2">
          <span>📘</span> Working Process
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">How It Works For Tutors</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Our tutoring sessions are interactive and engaging, focusing on the students specific needs.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
              <div className="relative flex items-center justify-center w-16 h-16 text-blue-500 text-3xl border-2 border-blue-500 rounded-full">
                {step.icon}
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold mt-4">{step.title}</h3>
              <p className="text-gray-600 mt-2 text-sm text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  